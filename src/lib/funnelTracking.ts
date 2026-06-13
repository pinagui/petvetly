/* ════════════════════════════════════════════════════════════════════
   RASTREAMENTO DO FUNIL — UTMs, eventos e leads
   ──────────────────────────────────────────────────────────────────
   IMPORTANTE: por padrão os dados ficam no localStorage DO NAVEGADOR
   de cada visitante. Para receber os leads/eventos de TODOS os
   visitantes no seu /admin, configure o WEBHOOK_URL abaixo com um
   endpoint seu (Zapier, Make, Google Apps Script, Supabase etc.).
   Cada evento/lead será enviado via POST JSON para esse endpoint.
   ════════════════════════════════════════════════════════════════════ */
export const WEBHOOK_URL = ''; // ex.: 'https://hook.us1.make.com/xxxxx'

const SS_UTM = 'pv_utm';
const LS_EVENTS = 'pv_events';
const LS_LEADS = 'pv_leads';
const MAX_EVENTS = 8000;

export interface UTMData {
  utm_source?: string; utm_medium?: string; utm_campaign?: string;
  utm_content?: string; utm_term?: string; utm_id?: string;
  xcod?: string; fbclid?: string;
  screen?: string; viewport?: string; platform?: string;
  language?: string; user_agent?: string;
  session_id: string; landed_at: string;
}

export interface FunnelEvent {
  event: string;
  data?: Record<string, unknown>;
  utm: UTMData;
  ts: string;
}

export interface Lead {
  name: string;
  email: string;
  whatsapp: string;
  stage?: number;
  stage_label?: string;
  utm: UTMData;
  ts: string;
}

/* ── captura de UTMs na entrada (1x por sessão) ── */
export function captureUTMs(): UTMData {
  const existing = sessionStorage.getItem(SS_UTM);
  if (existing) {
    try { return JSON.parse(existing) as UTMData; } catch { /* recaptura */ }
  }
  const p = new URLSearchParams(window.location.search);
  const utm: UTMData = {
    utm_source: p.get('utm_source') ?? undefined,
    utm_medium: p.get('utm_medium') ?? undefined,
    utm_campaign: p.get('utm_campaign') ?? undefined,
    utm_content: p.get('utm_content') ?? undefined,
    utm_term: p.get('utm_term') ?? undefined,
    utm_id: p.get('utm_id') ?? undefined,
    xcod: p.get('xcod') ?? undefined,
    fbclid: p.get('fbclid') ?? undefined,
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    platform: navigator.platform || undefined,
    language: navigator.language || undefined,
    user_agent: navigator.userAgent,
    session_id: Math.random().toString(36).slice(2) + Date.now().toString(36),
    landed_at: new Date().toISOString(),
  };
  sessionStorage.setItem(SS_UTM, JSON.stringify(utm));
  return utm;
}

export function getUTMs(): UTMData {
  const raw = sessionStorage.getItem(SS_UTM);
  if (raw) { try { return JSON.parse(raw) as UTMData; } catch { /* recaptura */ } }
  return captureUTMs();
}

/* ── envio remoto (opcional) ── */
function postRemote(payload: unknown) {
  if (!WEBHOOK_URL) return;
  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon(WEBHOOK_URL, new Blob([body], { type: 'application/json' }));
    } else {
      fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
    }
  } catch { /* offline */ }
}

/* ── eventos ── */
export function track(event: string, data?: Record<string, unknown>) {
  const ev: FunnelEvent = { event, data, utm: getUTMs(), ts: new Date().toISOString() };
  try {
    const arr: FunnelEvent[] = JSON.parse(localStorage.getItem(LS_EVENTS) || '[]');
    arr.push(ev);
    if (arr.length > MAX_EVENTS) arr.splice(0, arr.length - MAX_EVENTS);
    localStorage.setItem(LS_EVENTS, JSON.stringify(arr));
  } catch { /* storage cheio */ }
  postRemote({ type: 'event', ...ev });
}

export function getEvents(): FunnelEvent[] {
  try { return JSON.parse(localStorage.getItem(LS_EVENTS) || '[]'); } catch { return []; }
}

/* ── leads ── */
export function saveLead(lead: Omit<Lead, 'utm' | 'ts'>) {
  const full: Lead = { ...lead, utm: getUTMs(), ts: new Date().toISOString() };
  try {
    const arr: Lead[] = JSON.parse(localStorage.getItem(LS_LEADS) || '[]');
    arr.push(full);
    localStorage.setItem(LS_LEADS, JSON.stringify(arr));
  } catch { /* storage cheio */ }
  postRemote({ type: 'lead', ...full });
  track('lead_captured', { email: lead.email });
}

export function getLeads(): Lead[] {
  try { return JSON.parse(localStorage.getItem(LS_LEADS) || '[]'); } catch { return []; }
}

export function clearAllData() {
  localStorage.removeItem(LS_EVENTS);
  localStorage.removeItem(LS_LEADS);
}

/* ── repassa UTMs para o checkout (Hotmart aceita sck + utms) ── */
export function checkoutUrl(base: string): string {
  const utm = getUTMs();
  try {
    const url = new URL(base);
    const pairs: [string, string | undefined][] = [
      ['utm_source', utm.utm_source], ['utm_medium', utm.utm_medium],
      ['utm_campaign', utm.utm_campaign], ['utm_content', utm.utm_content],
      ['utm_term', utm.utm_term], ['utm_id', utm.utm_id],
    ];
    pairs.forEach(([k, v]) => { if (v) url.searchParams.set(k, v); });
    if (utm.xcod) url.searchParams.set('sck', utm.xcod);
    return url.toString();
  } catch { return base; }
}

/* ── CSV ── */
export function leadsToCSV(leads: Lead[]): string {
  const head = ['data', 'nome', 'email', 'whatsapp', 'estagio', 'utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term', 'utm_id', 'xcod', 'plataforma', 'session_id'];
  const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = leads.map(l => [
    new Date(l.ts).toLocaleString('pt-BR'), l.name, l.email, l.whatsapp,
    l.stage_label ?? l.stage ?? '', l.utm.utm_source, l.utm.utm_campaign, l.utm.utm_medium,
    l.utm.utm_content, l.utm.utm_term, l.utm.utm_id, l.utm.xcod, l.utm.platform, l.utm.session_id,
  ].map(esc).join(';'));
  return '﻿' + [head.join(';'), ...rows].join('\n');
}
