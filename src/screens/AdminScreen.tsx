import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { BarChart3, Download, Lock, LogOut, RefreshCw, Users, ShoppingBag, MessageSquare } from 'lucide-react';
import { leadsToCSV, fetchAdminData } from '../lib/funnelTracking';
import type { FunnelEvent, Lead, Purchase } from '../lib/funnelTracking';

/* ── credenciais do admin ── */
const ADMIN_EMAIL = 'guilhermepinaramos@gmail.com';
const SS_AUTH = 'pv_admin_auth';
const SS_PASS = 'pv_admin_pass';

const LIGHT: CSSProperties = {
  background: '#F2F2F7',
  color: '#1C1C1E',
};

/* etapas do funil na ordem */
const FUNNEL_STEPS = [
  { key: 'page_view', label: 'Visitou a página' },
  { key: 'quiz_start', label: 'Começou o quiz' },
  ...Array.from({ length: 18 }, (_, i) => ({ key: `q${i + 1}`, label: `Pergunta ${i + 1}` })),
  { key: 'lead_view', label: 'Viu captura de lead' },
  { key: 'lead_captured', label: 'Deixou contato (LEAD)' },
  { key: 'result_view', label: 'Viu o diagnóstico' },
  { key: 'checkout_click_protocolo', label: 'Clicou — Método R$97' },
  { key: 'checkout_click_app_mensal', label: 'Clicou — App Mensal R$14,90' },
  { key: 'checkout_click_app_anual', label: 'Clicou — App Anual R$67' },
];

function stepOfEvent(ev: FunnelEvent): string | null {
  if (ev.event === 'q_answered') return String(ev.data?.q ?? '');
  if (ev.event === 'checkout_click') return `checkout_click_${String(ev.data?.offer ?? '')}`;
  return ev.event;
}

export default function AdminScreen() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SS_AUTH) === '1');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [tab, setTab] = useState<'funil' | 'leads' | 'vendas' | 'campanhas' | 'respostas'>('funil');

  /* mapa de perguntas inline para o admin — igual ao QuizFunnelScreen */
  const QUIZ_QUESTIONS: { id: string; title: string; options: { label: string; value: string }[] }[] = [
    { id: 'q1', title: 'Com que frequência ele lambe as patas?', options: [
      { label: '2–3x/semana', value: 'raro' }, { label: 'Quase todo dia', value: 'quase' },
      { label: 'Todo dia (minutos)', value: 'diario' }, { label: 'Todo dia (horas)', value: 'horas' },
      { label: 'Acorda de madrugada', value: 'madrugada' },
    ]},
    { id: 'q2', title: 'Intensidade da lambedura?', options: [
      { label: 'Leves (hábito)', value: 'leve' }, { label: 'Constantes (focado)', value: 'constante' },
      { label: 'Com força (ouve de longe)', value: 'forte' }, { label: 'Morde junto', value: 'morde' },
    ]},
    { id: 'q3', title: 'Qual pata ele mais lambe?', options: [
      { label: 'Dianteira direita', value: 'dd' }, { label: 'Dianteira esquerda', value: 'de' },
      { label: 'Traseira direita', value: 'td' }, { label: 'Traseira esquerda', value: 'te' },
      { label: 'Mais de uma', value: 'alterna' }, { label: 'Todas as 4', value: 'todas' },
    ]},
    { id: 'q4', title: 'Aparência da pata agora?', options: [
      { label: 'Normal (rosa)', value: 'normal' }, { label: 'Tom ferrugem', value: 'ferrugem' },
      { label: 'Bem escuro (marrom)', value: 'escuro' }, { label: 'Vermelha', value: 'vermelha' },
      { label: 'Vermelha e úmida', value: 'umida' }, { label: 'Ferida aberta', value: 'ferida' },
    ]},
    { id: 'q5', title: 'Quando percebeu o primeiro sinal?', options: [
      { label: '< 1 semana', value: 'semana' }, { label: '1–4 semanas', value: 'mes' },
      { label: '1–3 meses', value: '3meses' }, { label: '3–6 meses', value: '6meses' },
      { label: '> 6 meses', value: 'mais6' }, { label: 'Não lembro', value: 'sempre' },
    ]},
    { id: 'q6', title: 'Já foi ao vet por causa disso?', options: [
      { label: 'Sim, 1x', value: 'sim1' }, { label: 'Sim, 2–3x', value: 'sim2' },
      { label: 'Sim, +3x', value: 'sim3' }, { label: 'Não, mas considera', value: 'nao_considera' },
      { label: 'Não', value: 'nao' },
    ]},
    { id: 'q7', title: 'O que o vet disse?', options: [
      { label: 'Ansiedade', value: 'ansiedade' }, { label: 'Alergia', value: 'alergia' },
      { label: 'Fungo/bactéria', value: 'fungo' }, { label: 'Mania/comportamental', value: 'mania' },
      { label: 'Sem diagnóstico claro', value: 'sem_diag' }, { label: 'Remédio sem explicação', value: 'remedio' },
    ]},
    { id: 'q8', title: 'O que já tentou? (multi)', options: [
      { label: 'Spray antilambedura', value: 'spray' }, { label: 'Pomada/creme', value: 'pomada' },
      { label: 'Cone elizabetano', value: 'cone' }, { label: 'Troca de ração', value: 'racao' },
      { label: 'Shampoo vet', value: 'shampoo' }, { label: 'Calmante', value: 'calmante' },
      { label: 'Nada ainda', value: 'nada' },
    ]},
    { id: 'q9', title: 'O que aconteceu após tentar?', options: [
      { label: 'Melhorou e voltou', value: 'voltou' }, { label: 'Não fez nada', value: 'nada' },
      { label: 'Melhorou e piorou', value: 'piorou' }, { label: 'Não conseguiu aplicar', value: 'nao_aplicou' },
    ]},
    { id: 'q10', title: 'Horário que mais lambe?', options: [
      { label: 'Manhã', value: 'manha' }, { label: 'Tarde', value: 'tarde' },
      { label: 'Noite', value: 'noite' }, { label: 'Madrugada', value: 'madrugada' },
      { label: 'Após eu chegar', value: 'chegada' }, { label: 'Após eu sair', value: 'saida' },
      { label: 'Sem horário fixo', value: 'sem_horario' },
    ]},
    { id: 'q11', title: 'O que acontece antes de lamber? (multi)', options: [
      { label: 'Eu saío', value: 'saio' }, { label: 'Eu chego', value: 'chego' },
      { label: 'Ele come', value: 'come' }, { label: 'Volta do passeio', value: 'passeio' },
      { label: 'Tem visita', value: 'visita' }, { label: 'Barulho alto', value: 'barulho' },
      { label: 'Fica sozinho', value: 'sozinho' }, { label: 'Não sei', value: 'nao_sei' },
    ]},
    { id: 'q12', title: 'Onde passa o dia?', options: [
      { label: 'Dentro (tapete/sofá)', value: 'tapete' }, { label: 'Dentro (piso frio)', value: 'piso' },
      { label: 'Quintal com terra', value: 'quintal_terra' }, { label: 'Quintal cimentado', value: 'quintal_cimento' },
      { label: 'Apartamento', value: 'ape' },
    ]},
    { id: 'q13', title: 'Produto para limpar o chão?', options: [
      { label: 'Água e sabão neutro', value: 'neutro' }, { label: 'Produto comum (pinho/cloro)', value: 'comum' },
      { label: 'Produto específico pet', value: 'pet' }, { label: 'Água sanitária', value: 'sanitaria' },
      { label: 'Não sei', value: 'nao_sei' }, { label: 'Só pano úmido', value: 'pano' },
    ]},
    { id: 'q14', title: 'Outros comportamentos? (multi)', options: [
      { label: 'Se coça em outras partes', value: 'coca' }, { label: 'Se esfrega no chão', value: 'esfrega' },
      { label: 'Mais irritado', value: 'irritado' }, { label: 'Mais apático', value: 'apatico' },
      { label: 'Ansioso (anda de um lado a outro)', value: 'ansioso' }, { label: 'Só a lambedura', value: 'so_lambedura' },
    ]},
    { id: 'q15', title: 'O que descreve melhor o que sente?', options: [
      { label: 'Cansada de tentar', value: 'cansada' }, { label: 'Preocupada com o tempo', value: 'preocupada' },
      { label: 'Com medo de virar grave', value: 'medo' }, { label: 'Frustrada com gastos', value: 'frustrada' },
      { label: 'Confusa', value: 'confusa' },
    ]},
    { id: 'q16', title: 'O que mais te preocupa em 30 dias?', options: [
      { label: 'Gastar mais sem resultado', value: 'dinheiro' }, { label: 'Infeccionar e precisar de cirurgia', value: 'cirurgia' },
      { label: 'Cachorro sofrendo', value: 'sofrer' }, { label: 'Tarde demais para resolver', value: 'tempo' },
      { label: 'Sentir-se negligente', value: 'culpa' },
    ]},
    { id: 'q17', title: 'Quanto já gastou tentando resolver?', options: [
      { label: 'Menos de R$100', value: '100' }, { label: 'R$100–R$300', value: '300' },
      { label: 'R$300–R$600', value: '600' }, { label: 'R$600–R$1.000', value: '1000' },
      { label: 'Mais de R$1.000', value: 'mais1000' }, { label: 'Não sei', value: 'nao_sei' },
    ]},
    { id: 'q18', title: 'Seguiria um protocolo específico?', options: [
      { label: 'Sim, quero que funcione', value: 'sim' },
      { label: 'Sim, mas precisa ser prático', value: 'sim_pratico' },
      { label: 'Sim, para o MEU cachorro', value: 'sim_especifico' },
    ]},
  ];

  const [events, setEvents] = useState<FunnelEvent[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadErr, setLoadErr] = useState('');

  const loadData = async (password: string) => {
    setLoading(true); setLoadErr('');
    try {
      const { leads: l, events: e, purchases: p } = await fetchAdminData(password);
      setLeads(l); setEvents(e); setPurchases(p);
    } catch {
      setLoadErr('Não foi possível carregar os dados do servidor.');
    } finally {
      setLoading(false);
    }
  };

  // carrega ao montar se já estiver logado (senha guardada na sessão)
  useEffect(() => {
    if (authed) {
      const saved = sessionStorage.getItem(SS_PASS);
      if (saved) loadData(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* sessões únicas por etapa */
  const funnelCounts = useMemo(() => {
    const bySteps = new Map<string, Set<string>>();
    events.forEach(ev => {
      const step = stepOfEvent(ev);
      if (!step) return;
      if (!bySteps.has(step)) bySteps.set(step, new Set());
      bySteps.get(step)!.add(ev.utm.session_id);
    });
    return FUNNEL_STEPS.map(s => ({ ...s, count: bySteps.get(s.key)?.size ?? 0 }));
  }, [events]);

  const maxCount = Math.max(1, ...funnelCounts.map(f => f.count));

  /* última etapa de cada sessão = onde parou */
  const dropoff = useMemo(() => {
    const lastStep = new Map<string, number>();
    events.forEach(ev => {
      const step = stepOfEvent(ev);
      const idx = FUNNEL_STEPS.findIndex(s => s.key === step);
      if (idx < 0) return;
      const cur = lastStep.get(ev.utm.session_id) ?? -1;
      if (idx > cur) lastStep.set(ev.utm.session_id, idx);
    });
    const counts = new Array(FUNNEL_STEPS.length).fill(0) as number[];
    lastStep.forEach(idx => { counts[idx] += 1; });
    return counts;
  }, [events]);

  /* agrupamento por campanha/conjunto/criativo */
  const campaigns = useMemo(() => {
    const map = new Map<string, { sessions: Set<string>; leads: number; checkouts: number }>();
    events.forEach(ev => {
      const key = [ev.utm.utm_campaign || '(sem campanha)', ev.utm.utm_medium || '—', ev.utm.utm_content || '—'].join('|||');
      if (!map.has(key)) map.set(key, { sessions: new Set(), leads: 0, checkouts: 0 });
      const row = map.get(key)!;
      row.sessions.add(ev.utm.session_id);
      if (ev.event === 'lead_captured') row.leads += 1;
      if (ev.event === 'checkout_click') row.checkouts += 1;
    });
    return [...map.entries()]
      .map(([key, v]) => {
        const [campaign, medium, content] = key.split('|||');
        return { campaign, medium, content, visits: v.sessions.size, leads: v.leads, checkouts: v.checkouts };
      })
      .sort((a, b) => b.visits - a.visits);
  }, [events]);

  const stats = useMemo(() => {
    const sessions = new Set(events.map(e => e.utm.session_id));
    const starts = new Set(events.filter(e => e.event === 'quiz_start').map(e => e.utm.session_id));
    const results = new Set(events.filter(e => e.event === 'result_view').map(e => e.utm.session_id));
    const clicks = events.filter(e => e.event === 'checkout_click').length;
    return { visits: sessions.size, starts: starts.size, leads: leads.length, results: results.size, clicks };
  }, [events, leads]);

  /* distribuição de respostas por pergunta */
  const answerDist = useMemo(() => {
    // Para cada pergunta, conta quantas sessões escolheram cada valor
    // q_answered events: { q: 'q1', value: 'diario' } ou { q: 'q8', value: ['spray','pomada'] }
    const dist = new Map<string, Map<string, Set<string>>>();
    events.forEach(ev => {
      if (ev.event !== 'q_answered') return;
      const qId = String(ev.data?.q ?? '');
      const raw = ev.data?.value;
      const sid = ev.utm.session_id;
      if (!qId) return;
      if (!dist.has(qId)) dist.set(qId, new Map());
      const qMap = dist.get(qId)!;
      const values = Array.isArray(raw) ? raw as string[] : (raw ? [String(raw)] : []);
      values.forEach(v => {
        if (!qMap.has(v)) qMap.set(v, new Set());
        qMap.get(v)!.add(sid);
      });
    });
    return dist;
  }, [events]);

  const login = async () => {
    if (email.trim().toLowerCase() !== ADMIN_EMAIL) {
      setErr('E-mail ou senha incorretos.'); return;
    }
    setLoading(true); setErr('');
    try {
      const { leads: l, events: e, purchases: p } = await fetchAdminData(pass);
      setLeads(l); setEvents(e); setPurchases(p);
      sessionStorage.setItem(SS_AUTH, '1');
      sessionStorage.setItem(SS_PASS, pass);
      setAuthed(true);
    } catch {
      setErr('E-mail ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem(SS_AUTH);
    sessionStorage.removeItem(SS_PASS);
    setAuthed(false);
    setEvents([]); setLeads([]); setPurchases([]);
  };

  // vendas aprovadas + faturamento
  const sales = useMemo(() => {
    const active = ['APPROVED', 'COMPLETE', 'COMPLETED', 'APROVADO'];
    const approved = purchases.filter(p => active.includes(String(p.status ?? '').toUpperCase()));
    const revenue = approved.reduce((s, p) => s + (Number(p.value) || 0), 0);
    return { count: approved.length, revenue, all: purchases };
  }, [purchases]);

  const refreshData = () => {
    const saved = sessionStorage.getItem(SS_PASS);
    if (saved) loadData(saved);
  };

  const exportCSV = () => {
    const blob = new Blob([leadsToCSV(leads)], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `petvetly-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  /* ══════════ LOGIN ══════════ */
  if (!authed) {
    return (
      <div className="h-full flex items-center justify-center px-6" style={LIGHT}>
        <div className="w-full max-w-sm bg-white rounded-3xl p-7" style={{ border: '1px solid #E0E0E6', boxShadow: '0 4px 20px rgba(0,0,0,.08)' }}>
          <div className="w-12 h-12 g-teal rounded-2xl flex items-center justify-center mb-4 shadow-md">
            <Lock size={20} className="text-white" />
          </div>
          <h1 className="text-lg font-bold mb-1" style={{ color: '#1C1C1E' }}>Painel do Funil</h1>
          <p className="text-xs mb-5" style={{ color: '#5A5A60' }}>Acesso restrito ao administrador.</p>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"
            className="w-full rounded-xl px-4 py-3 text-sm mb-2 outline-none"
            style={{ background: '#F2F2F7', border: '1px solid #E0E0E6', color: '#1C1C1E' }} />
          <input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="Senha"
            onKeyDown={e => e.key === 'Enter' && login()}
            className="w-full rounded-xl px-4 py-3 text-sm mb-3 outline-none"
            style={{ background: '#F2F2F7', border: '1px solid #E0E0E6', color: '#1C1C1E' }} />
          {err && <p className="text-xs text-red-600 mb-3">{err}</p>}
          <button onClick={login} disabled={loading} className="w-full g-teal text-white font-bold py-3.5 rounded-xl text-sm press disabled:opacity-50">
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </div>
      </div>
    );
  }

  /* ══════════ DASHBOARD ══════════ */
  return (
    <div className="h-full overflow-y-auto no-scroll" style={LIGHT}>
      <div className="max-w-3xl mx-auto px-5 py-8">

        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold" style={{ color: '#1C1C1E' }}>📊 Painel do Funil</h1>
            <p className="text-xs" style={{ color: '#5A5A60' }}>Quiz Lambedura — rastreamento por UTM</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={refreshData} disabled={loading} className="p-2.5 rounded-xl bg-white press disabled:opacity-50" style={{ border: '1px solid #E0E0E6' }} title="Atualizar">
              <RefreshCw size={15} className={loading ? 'animate-spin' : ''} style={{ color: '#5A5A60' }} />
            </button>
            <button onClick={logout} className="p-2.5 rounded-xl bg-white press" style={{ border: '1px solid #E0E0E6' }} title="Sair">
              <LogOut size={15} style={{ color: '#5A5A60' }} />
            </button>
          </div>
        </div>

        {loadErr && (
          <div className="rounded-2xl px-4 py-3 mb-5 text-xs leading-relaxed" style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#991B1B' }}>
            ⚠️ {loadErr} <button onClick={refreshData} className="font-bold underline">Tentar de novo</button>
          </div>
        )}

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-3">
          {[
            { label: 'Visitas', value: String(stats.visits), color: '#0D9488' },
            { label: 'Leads', value: String(stats.leads), color: '#0D9488' },
            { label: 'Vendas aprovadas', value: String(sales.count), color: '#16A34A' },
            { label: 'Faturamento', value: `R$ ${sales.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, color: '#16A34A' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-4 text-center" style={{ border: '1px solid #E0E0E6' }}>
              <p className="text-2xl font-extrabold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[11px] font-medium mt-0.5" style={{ color: '#5A5A60' }}>{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          {[
            { label: 'Iniciaram quiz', value: stats.starts },
            { label: 'Viram resultado', value: stats.results },
            { label: 'Cliques checkout', value: stats.clicks },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-3 text-center" style={{ border: '1px solid #E0E0E6' }}>
              <p className="text-lg font-extrabold" style={{ color: '#0D9488' }}>{s.value}</p>
              <p className="text-[11px] font-medium mt-0.5" style={{ color: '#5A5A60' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {([['funil', 'Funil', BarChart3], ['leads', `Leads (${leads.length})`, Users], ['vendas', `Vendas (${sales.count})`, ShoppingBag], ['campanhas', 'Campanhas', BarChart3], ['respostas', 'Respostas', MessageSquare]] as const).map(([id, label, Icon]) => (
            <button key={id} onClick={() => setTab(id)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold press"
              style={tab === id
                ? { background: '#0D9488', color: '#fff' }
                : { background: '#fff', color: '#5A5A60', border: '1px solid #E0E0E6' }}>
              <Icon size={13} />{label}
            </button>
          ))}
        </div>

        {/* ── FUNIL ── */}
        {tab === 'funil' && (
          <div className="bg-white rounded-3xl p-5" style={{ border: '1px solid #E0E0E6' }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: '#0D9488' }}>FUNIL COMPLETO — ONDE CADA SESSÃO CHEGOU E PAROU</p>
            <div className="space-y-1.5">
              {funnelCounts.map((s, i) => (
                <div key={s.key} className="flex items-center gap-2">
                  <span className="text-[10px] w-40 shrink-0 text-right font-medium" style={{ color: '#5A5A60' }}>{s.label}</span>
                  <div className="flex-1 h-5 rounded-md overflow-hidden" style={{ background: '#F2F2F7' }}>
                    <div className="h-full rounded-md g-teal flex items-center"
                      style={{ width: `${Math.max((s.count / maxCount) * 100, s.count > 0 ? 4 : 0)}%`, minWidth: s.count > 0 ? 22 : 0 }}>
                      {s.count > 0 && <span className="text-[10px] font-bold text-white px-1.5">{s.count}</span>}
                    </div>
                  </div>
                  <span className="text-[10px] w-16 shrink-0 font-medium" style={{ color: '#B45309' }}>
                    {dropoff[i] > 0 ? `${dropoff[i]} pararam` : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── RESPOSTAS ── */}
        {tab === 'respostas' && (
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest" style={{ color: '#0D9488' }}>DISTRIBUIÇÃO DE RESPOSTAS POR PERGUNTA</p>
            {QUIZ_QUESTIONS.map((question, qi) => {
              const qMap = answerDist.get(question.id);
              const totalSessions = qMap
                ? [...new Set([...qMap.values()].flatMap(s => [...s]))].length
                : 0;
              return (
                <div key={question.id} className="bg-white rounded-2xl p-4" style={{ border: '1px solid #E0E0E6' }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-bold" style={{ color: '#1C1C1E' }}>
                      <span className="text-teal-600 mr-1">Q{qi + 1}.</span> {question.title}
                    </p>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: '#F0F9FF', color: '#0D9488' }}>
                      {totalSessions} resp.
                    </span>
                  </div>
                  {totalSessions === 0 ? (
                    <p className="text-xs" style={{ color: '#9A9AA2' }}>Sem dados ainda.</p>
                  ) : (
                    <div className="space-y-1.5">
                      {question.options
                        .map(opt => ({
                          ...opt,
                          count: qMap?.get(opt.value)?.size ?? 0,
                        }))
                        .sort((a, b) => b.count - a.count)
                        .map(opt => {
                          const pct = totalSessions > 0 ? Math.round((opt.count / totalSessions) * 100) : 0;
                          return (
                            <div key={opt.value}>
                              <div className="flex items-center justify-between mb-0.5">
                                <span className="text-[11px] font-medium" style={{ color: '#3A3A40' }}>{opt.label}</span>
                                <span className="text-[11px] font-bold" style={{ color: pct >= 30 ? '#0D9488' : '#7A7A82' }}>
                                  {pct}% <span style={{ color: '#B0B0B8', fontWeight: 400 }}>({opt.count})</span>
                                </span>
                              </div>
                              <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F2F2F7' }}>
                                <div
                                  className="h-full rounded-full"
                                  style={{
                                    width: `${pct}%`,
                                    background: pct >= 50 ? '#0D9488' : pct >= 25 ? '#0891B2' : '#D1D1D6',
                                    transition: 'width 0.4s ease',
                                    minWidth: opt.count > 0 ? 4 : 0,
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── LEADS ── */}
        {tab === 'leads' && (
          <div className="bg-white rounded-3xl p-5" style={{ border: '1px solid #E0E0E6' }}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold tracking-widest" style={{ color: '#0D9488' }}>PLANILHA DE LEADS — E-MAIL + WHATSAPP</p>
              <button onClick={exportCSV} disabled={leads.length === 0}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold g-teal text-white press"
                style={leads.length === 0 ? { opacity: 0.4 } : {}}>
                <Download size={13} />Exportar CSV
              </button>
            </div>
            {leads.length === 0 ? (
              <p className="text-sm py-8 text-center" style={{ color: '#7A7A82' }}>Nenhum lead capturado ainda.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ color: '#5A5A60' }}>
                      {['Data', 'Nome', 'E-mail', 'WhatsApp', 'Estágio', 'Campanha', 'Criativo'].map(h => (
                        <th key={h} className="text-left font-bold py-2 px-2 whitespace-nowrap" style={{ borderBottom: '2px solid #E0E0E6' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[...leads].reverse().map((l: Lead, i) => (
                      <tr key={i} style={{ color: '#3A3A40', borderBottom: '1px solid #F2F2F7' }}>
                        <td className="py-2 px-2 whitespace-nowrap">{new Date(l.ts).toLocaleString('pt-BR')}</td>
                        <td className="py-2 px-2 font-medium">{l.name}</td>
                        <td className="py-2 px-2">{l.email}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{l.whatsapp}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{l.stage_label ?? '—'}</td>
                        <td className="py-2 px-2">{l.utm.utm_campaign ?? '—'}</td>
                        <td className="py-2 px-2">{l.utm.utm_content ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ── VENDAS ── */}
        {tab === 'vendas' && (
          <div className="bg-white rounded-3xl p-5" style={{ border: '1px solid #E0E0E6' }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: '#16A34A' }}>VENDAS — COMPRAS RECEBIDAS DA HOTMART</p>
            {purchases.length === 0 ? (
              <p className="text-sm py-8 text-center" style={{ color: '#7A7A82' }}>Nenhuma compra registrada ainda.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ color: '#5A5A60' }}>
                      {['Data', 'Nome', 'E-mail', 'Produto', 'Valor', 'Status', 'Transação'].map(h => (
                        <th key={h} className="text-left font-bold py-2 px-2 whitespace-nowrap" style={{ borderBottom: '2px solid #E0E0E6' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {purchases.map((p: Purchase, i) => {
                      const active = ['APPROVED', 'COMPLETE', 'COMPLETED', 'APROVADO'].includes(String(p.status ?? '').toUpperCase());
                      return (
                        <tr key={i} style={{ color: '#3A3A40', borderBottom: '1px solid #F2F2F7' }}>
                          <td className="py-2 px-2 whitespace-nowrap">{new Date(p.ts).toLocaleString('pt-BR')}</td>
                          <td className="py-2 px-2 font-medium">{p.name ?? '—'}</td>
                          <td className="py-2 px-2">{p.email}</td>
                          <td className="py-2 px-2">{p.product_name ?? '—'}</td>
                          <td className="py-2 px-2 whitespace-nowrap">{p.value != null ? `R$ ${Number(p.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : '—'}</td>
                          <td className="py-2 px-2 whitespace-nowrap">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                              style={active ? { background: '#DCFCE7', color: '#16A34A' } : { background: '#FEF2F2', color: '#B91C1C' }}>
                              {p.status ?? p.event ?? '—'}
                            </span>
                          </td>
                          <td className="py-2 px-2 whitespace-nowrap">{p.transaction ?? '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ── CAMPANHAS ── */}
        {tab === 'campanhas' && (
          <div className="bg-white rounded-3xl p-5" style={{ border: '1px solid #E0E0E6' }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: '#0D9488' }}>DESEMPENHO POR CAMPANHA / CONJUNTO / CRIATIVO</p>
            {campaigns.length === 0 ? (
              <p className="text-sm py-8 text-center" style={{ color: '#7A7A82' }}>Nenhum tráfego registrado ainda.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ color: '#5A5A60' }}>
                      {['Campanha (utm_campaign)', 'Conjunto (utm_medium)', 'Criativo (utm_content)', 'Visitas', 'Leads', 'Cliques checkout'].map(h => (
                        <th key={h} className="text-left font-bold py-2 px-2 whitespace-nowrap" style={{ borderBottom: '2px solid #E0E0E6' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((c, i) => (
                      <tr key={i} style={{ color: '#3A3A40', borderBottom: '1px solid #F2F2F7' }}>
                        <td className="py-2 px-2 font-medium">{c.campaign}</td>
                        <td className="py-2 px-2">{c.medium}</td>
                        <td className="py-2 px-2">{c.content}</td>
                        <td className="py-2 px-2 font-bold" style={{ color: '#0D9488' }}>{c.visits}</td>
                        <td className="py-2 px-2 font-bold" style={{ color: '#0D9488' }}>{c.leads}</td>
                        <td className="py-2 px-2 font-bold" style={{ color: '#B45309' }}>{c.checkouts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        <p className="text-center text-[11px] mt-6" style={{ color: '#9A9AA0' }}>
          Dados em tempo real do Supabase · {events.length} eventos · {leads.length} leads
        </p>
      </div>
    </div>
  );
}
