import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const { type, ...data } = body;

    if (type === 'lead') {
      await supabase.from('funnel_leads').insert({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        stage: data.stage,
        stage_label: data.stage_label,
        utm_source: data.utm?.utm_source,
        utm_medium: data.utm?.utm_medium,
        utm_campaign: data.utm?.utm_campaign,
        utm_content: data.utm?.utm_content,
        utm_term: data.utm?.utm_term,
        utm_id: data.utm?.utm_id,
        xcod: data.utm?.xcod,
        fbclid: data.utm?.fbclid,
        session_id: data.utm?.session_id,
        platform: data.utm?.platform,
        landed_at: data.utm?.landed_at,
        ts: data.ts,
      });
    } else if (type === 'event') {
      await supabase.from('funnel_events').insert({
        event: data.event,
        data: data.data,
        utm_source: data.utm?.utm_source,
        utm_medium: data.utm?.utm_medium,
        utm_campaign: data.utm?.utm_campaign,
        session_id: data.utm?.session_id,
        ts: data.ts,
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
});
