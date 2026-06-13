import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

const HOTTOK = Deno.env.get('HOTMART_HOTTOK') ?? '';

/* Meta Conversions API (rastreio de venda server-side, 100% confiável) */
const META_PIXEL_ID = Deno.env.get('META_PIXEL_ID') ?? '2090986854986123';
const META_CAPI_TOKEN = Deno.env.get('META_CAPI_TOKEN') ?? '';

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input.trim().toLowerCase()));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function sendMetaPurchase(opts: {
  email?: string; phone?: string; value?: number; currency?: string;
  eventId?: string; fbp?: string; fbc?: string;
}) {
  if (!META_CAPI_TOKEN) return; // sem token configurado, ignora
  const user_data: Record<string, unknown> = {};
  if (opts.email) user_data.em = await sha256(opts.email);
  if (opts.phone) user_data.ph = await sha256(opts.phone.replace(/\D/g, ''));
  if (opts.fbp) user_data.fbp = opts.fbp;
  if (opts.fbc) user_data.fbc = opts.fbc;

  const payload = {
    data: [{
      event_name: 'Purchase',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_id: opts.eventId,
      user_data,
      custom_data: { currency: opts.currency ?? 'BRL', value: opts.value ?? undefined },
    }],
  };
  try {
    await fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch { /* falha de rede não derruba o webhook */ }
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Hotmart-Hottok',
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch { /* corpo vazio/invalido */ }

  const url = new URL(req.url);
  const hottok =
    req.headers.get('x-hotmart-hottok') ??
    url.searchParams.get('hottok') ??
    (body.hottok as string | undefined) ??
    '';

  // ── 0) Painel admin: lê leads/eventos do Supabase (senha no servidor) ──
  if (body.action === 'admin_fetch') {
    const ADMIN_PASS = Deno.env.get('PV_ADMIN_PASS') ?? '';
    if (!ADMIN_PASS || (body.password as string) !== ADMIN_PASS) {
      return json({ error: 'unauthorized' }, 401);
    }
    try {
      const [leadsRes, eventsRes, purchasesRes] = await Promise.all([
        supabase.from('funnel_leads').select('*').order('id', { ascending: false }).limit(5000),
        supabase.from('funnel_events').select('*').order('id', { ascending: false }).limit(20000),
        supabase.from('hotmart_purchases').select('*').order('id', { ascending: false }).limit(5000),
      ]);
      const reshapeUtm = (r: any) => ({
        utm_source: r.utm_source, utm_medium: r.utm_medium, utm_campaign: r.utm_campaign,
        utm_content: r.utm_content, utm_term: r.utm_term, utm_id: r.utm_id,
        xcod: r.xcod, fbclid: r.fbclid, session_id: r.session_id ?? '',
        platform: r.platform, landed_at: r.landed_at,
      });
      const leads = (leadsRes.data ?? []).map((r: any) => ({
        name: r.name, email: r.email, whatsapp: r.whatsapp,
        stage: r.stage, stage_label: r.stage_label, utm: reshapeUtm(r), ts: r.ts,
      }));
      const events = (eventsRes.data ?? []).map((r: any) => ({
        event: r.event, data: r.data ?? {}, utm: reshapeUtm(r), ts: r.ts,
      }));
      const purchases = (purchasesRes.data ?? []).map((r: any) => ({
        email: r.email, name: r.name, status: r.status, event: r.event,
        product_name: r.product_name, transaction: r.transaction, value: r.value, ts: r.ts,
      }));
      return json({ leads, events, purchases });
    } catch (err) {
      return json({ error: String(err) }, 500);
    }
  }

  // ── 0b) Verifica se o e-mail tem compra ativa (libera login do app) ──
  if (body.action === 'verify_access') {
    const email = (body.email as string ?? '').trim().toLowerCase();
    if (!email) return json({ ok: false }, 200);

    // E-mail do dono sempre liberado (testes)
    const OWNER = (Deno.env.get('PV_OWNER_EMAIL') ?? 'guilhermepinaramos@gmail.com').toLowerCase();
    if (email === OWNER) return json({ ok: true, name: 'Admin' });

    try {
      const { data } = await supabase
        .from('hotmart_purchases')
        .select('status, name')
        .eq('email', email)
        .maybeSingle();

      // status que liberam acesso (compra aprovada / assinatura ativa)
      const ACTIVE = ['APPROVED', 'COMPLETE', 'COMPLETED', 'APROVADO', 'ACTIVE'];
      const ok = !!data && ACTIVE.includes(String(data.status ?? '').toUpperCase());
      return json({ ok, name: data?.name ?? null });
    } catch (err) {
      return json({ ok: false, error: String(err) }, 500);
    }
  }

  // ── 1) Eventos/leads do próprio funil (enviados pelo navegador) ──
  const type = body.type as string | undefined;
  if (type === 'lead' || type === 'event') {
    try {
      if (type === 'lead') {
        await supabase.from('funnel_leads').insert({
          name: body.name, email: body.email, whatsapp: body.whatsapp,
          stage: body.stage, stage_label: body.stage_label,
          utm_source: (body.utm as any)?.utm_source,
          utm_medium: (body.utm as any)?.utm_medium,
          utm_campaign: (body.utm as any)?.utm_campaign,
          utm_content: (body.utm as any)?.utm_content,
          utm_term: (body.utm as any)?.utm_term,
          utm_id: (body.utm as any)?.utm_id,
          xcod: (body.utm as any)?.xcod,
          fbclid: (body.utm as any)?.fbclid,
          session_id: (body.utm as any)?.session_id,
          platform: (body.utm as any)?.platform,
          landed_at: (body.utm as any)?.landed_at,
          ts: body.ts,
        });
      } else {
        await supabase.from('funnel_events').insert({
          event: body.event, data: body.data,
          utm_source: (body.utm as any)?.utm_source,
          utm_medium: (body.utm as any)?.utm_medium,
          utm_campaign: (body.utm as any)?.utm_campaign,
          session_id: (body.utm as any)?.session_id,
          ts: body.ts,
        });
      }
    } catch (err) {
      return json({ error: String(err) }, 500);
    }
    return json({ ok: true });
  }

  // ── 2) Webhook de compra da Hotmart (valida o hottok) ──
  if (HOTTOK && hottok !== HOTTOK) {
    return json({ error: 'invalid hottok' }, 401);
  }

  try {
    const data = (body.data as Record<string, any>) ?? {};
    const buyer = data.buyer ?? {};
    const purchase = data.purchase ?? {};
    const product = data.product ?? {};
    const status = purchase.status ?? body.status ?? null;
    const email = (buyer.email ?? body.email ?? '').toString().toLowerCase();

    // valor da compra (Hotmart 2.0: purchase.price.value)
    const value =
      purchase?.price?.value ?? purchase?.full_price?.value ?? purchase?.original_offer_price?.value ?? null;
    const currency = purchase?.price?.currency_value ?? purchase?.price?.currency_code ?? 'BRL';

    await supabase.from('hotmart_purchases').upsert({
      email,
      name: buyer.name ?? null,
      status,
      event: body.event ?? null,
      transaction: purchase.transaction ?? null,
      product_id: product.id ?? null,
      product_name: product.name ?? null,
      value,
      raw: body,
      ts: new Date().toISOString(),
    }, { onConflict: 'email' });

    // Dispara Purchase no Meta via CAPI (só para venda aprovada/completa)
    const evt = String(body.event ?? '').toUpperCase();
    const st = String(status ?? '').toUpperCase();
    const isSale = evt === 'PURCHASE_APPROVED' || evt === 'PURCHASE_COMPLETE' || st === 'APPROVED' || st === 'COMPLETE';
    if (isSale && email) {
      await sendMetaPurchase({
        email,
        phone: buyer.checkout_phone ?? buyer.phone ?? undefined,
        value: typeof value === 'number' ? value : undefined,
        currency,
        eventId: purchase.transaction ?? undefined,
      });
    }
  } catch (err) {
    return json({ error: String(err) }, 500);
  }

  return json({ ok: true });
});
