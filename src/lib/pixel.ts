/* Wrapper seguro para o Meta Pixel (fbq). Não quebra se o pixel
   ainda não carregou ou estiver bloqueado por adblock. */
declare global {
  interface Window { fbq?: (...args: unknown[]) => void; }
}

export function fbqTrack(event: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', event, params);
    }
  } catch { /* pixel indisponível */ }
}

/* Lê o valor da compra da query string (?value=147 / ?valor=147 / ?price=147).
   Aceita vírgula ou ponto como separador decimal. */
export function readPurchaseValue(): { value: number | undefined; currency: string } {
  const p = new URLSearchParams(window.location.search);
  const raw = p.get('value') ?? p.get('valor') ?? p.get('price') ?? p.get('total') ?? p.get('amount');
  const currency = (p.get('currency') ?? 'BRL').toUpperCase();
  if (!raw) return { value: undefined, currency };
  const num = parseFloat(raw.replace(/\./g, '').replace(',', '.'));
  return { value: Number.isFinite(num) ? num : undefined, currency };
}

export function readQuery(name: string): string | undefined {
  return new URLSearchParams(window.location.search).get(name) ?? undefined;
}
