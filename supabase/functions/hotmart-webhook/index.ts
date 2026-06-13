import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

const HOTTOK = Deno.env.get('HOTMART_HOTTOK') ?? '';

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

    await supabase.from('hotmart_purchases').upsert({
      email,
      name: buyer.name ?? null,
      status,
      event: body.event ?? null,
      transaction: purchase.transaction ?? null,
      product_id: product.id ?? null,
      product_name: product.name ?? null,
      raw: body,
      ts: new Date().toISOString(),
    }, { onConflict: 'email' });
  } catch (err) {
    return json({ error: String(err) }, 500);
  }

  return json({ ok: true });
});
