import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check, ShieldCheck, Stethoscope, Zap, BookOpen,
  ListChecks, HeartPulse, Clock, Star, PawPrint,
} from 'lucide-react';
/* Funil faz a venda; landing apresenta o app e direciona.
   Os totais são constantes (evita importar os 100 arquivos de dados
   na landing, que é a porta de entrada do tráfego pago — performance). */
const CHECKOUT_ANUAL = 'https://pay.hotmart.com/J106307416B?off=4bf7rjdg';

const TEAL = '#0D9488';
const TEAL2 = '#0891B2';

const TOTAL_CATEGORIES = 100;
const TOTAL_CONDITIONS = 200;

const FEATURES = [
  { icon: Stethoscope, title: 'Protocolos completos', sub: 'Guias passo a passo para cada sintoma, escritos pela Dra. Ana Paula.' },
  { icon: Zap, title: 'Triagem em 2 minutos', sub: 'Descubra a urgência real do problema do seu cão antes de entrar em pânico.' },
  { icon: BookOpen, title: `${TOTAL_CATEGORIES}+ categorias`, sub: 'Da lambedura de patas a emergências — tudo organizado e fácil de achar.' },
  { icon: ListChecks, title: 'Checklists interativos', sub: 'Acompanhe cada etapa do tratamento em casa, sem se perder.' },
  { icon: HeartPulse, title: 'Sinais de alerta', sub: 'Saiba exatamente quando é hora de correr para o veterinário.' },
  { icon: Clock, title: 'Disponível 24h', sub: 'No seu bolso, a qualquer hora do dia ou da noite.' },
];

const STEPS = [
  { n: '1', title: 'Descreva o sintoma', sub: 'Conte o que está acontecendo com seu cão na triagem inteligente.' },
  { n: '2', title: 'Receba o protocolo', sub: 'O app mostra o que fazer agora, o que observar e quando se preocupar.' },
  { n: '3', title: 'Cuide com segurança', sub: 'Siga o checklist passo a passo e acompanhe a evolução em casa.' },
];

export default function LandingScreen() {
  return (
    <div className="min-h-full overflow-y-auto" style={{ background: '#F8FAFC', color: '#0F172A' }}>
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-30 backdrop-blur-md" style={{ background: 'rgba(248,250,252,0.85)', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-md"
                 style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>🐾</div>
            <span className="font-bold text-lg tracking-tight">PetVetly</span>
          </div>
          <Link to="/login" className="text-sm font-semibold px-4 py-2 rounded-xl press"
                style={{ color: TEAL, border: `1px solid ${TEAL}33` }}>
            Entrar
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]"
             style={{ backgroundImage: `radial-gradient(circle at 25% 15%, ${TEAL} 0%, transparent 45%), radial-gradient(circle at 80% 60%, ${TEAL2} 0%, transparent 45%)` }} />
        <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                  style={{ background: `${TEAL}14`, color: TEAL }}>
              <Star size={12} fill={TEAL} /> Conteúdo veterinário profissional
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Um veterinário de plantão <span style={{ color: TEAL }}>no seu bolso</span>, 24 horas por dia.
            </h1>
            <p className="text-lg mt-5" style={{ color: '#475569' }}>
              Pare de entrar em pânico no Google às 2h da manhã. O PetVetly te diz
              o que fazer agora, o que observar e quando correr pro vet — em protocolos
              claros, escritos por quem entende.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link to="/quiz"
                    className="flex items-center justify-center gap-2 font-bold text-white px-7 py-4 rounded-2xl text-sm shadow-lg press"
                    style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})`, boxShadow: `0 10px 30px ${TEAL}40` }}>
                Descobrir o que meu cão precisa <ArrowRight size={17} />
              </Link>
              <a href={CHECKOUT_ANUAL}
                 className="flex items-center justify-center gap-2 font-semibold px-7 py-4 rounded-2xl text-sm press"
                 style={{ background: '#fff', color: '#0F172A', border: '1px solid #E2E8F0' }}>
                Assinar agora
              </a>
            </div>
            <p className="text-xs mt-4 flex items-center gap-1.5" style={{ color: '#94A3B8' }}>
              <ShieldCheck size={13} /> Garantia de 7 dias · Cancele quando quiser
            </p>
          </motion.div>

          {/* Mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
                      className="flex justify-center">
            <div className="relative w-[260px] rounded-[2.5rem] p-3 shadow-2xl"
                 style={{ background: '#0F172A', boxShadow: '0 30px 60px rgba(15,23,42,0.25)' }}>
              <div className="rounded-[2rem] overflow-hidden" style={{ background: '#fff' }}>
                <div className="h-40 flex flex-col items-center justify-center text-white"
                     style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>
                  <span className="text-5xl mb-2">🐶</span>
                  <p className="font-bold">Olá! Como está o Thor?</p>
                  <p className="text-xs text-white/80">Triagem inteligente</p>
                </div>
                <div className="p-4 space-y-2.5">
                  {['Lambendo muito as patas', 'Vômito e enjoo', 'Coceira na pele', 'Mancando da pata'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium"
                         style={{ background: '#F1F5F9', color: '#334155' }}>
                      <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm"
                            style={{ background: `${TEAL}1a` }}>{['🐾','🤢','🩹','🦴'][i]}</span>
                      {t}
                    </div>
                  ))}
                  <div className="rounded-xl px-3 py-3 text-xs font-semibold text-white text-center"
                       style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>
                    Ver protocolo completo →
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y" style={{ borderColor: '#E2E8F0', background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-5 py-8 grid grid-cols-3 gap-4 text-center">
          {[
            { v: `${TOTAL_CATEGORIES}+`, l: 'Categorias' },
            { v: `${TOTAL_CONDITIONS}+`, l: 'Condições detalhadas' },
            { v: '24h', l: 'Sempre disponível' },
          ].map(s => (
            <div key={s.l}>
              <p className="text-3xl font-extrabold" style={{ color: TEAL }}>{s.v}</p>
              <p className="text-xs mt-1" style={{ color: '#64748B' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-extrabold text-center tracking-tight">Tudo o que você precisa para cuidar do seu cão</h2>
        <p className="text-center mt-3 max-w-xl mx-auto" style={{ color: '#64748B' }}>
          Sem termos complicados. Sem achismo. Informação confiável na hora que você mais precisa.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {FEATURES.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                        className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                   style={{ background: `${TEAL}14`, color: TEAL }}>
                <f.icon size={20} />
              </div>
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-sm mt-1.5" style={{ color: '#64748B' }}>{f.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-5xl mx-auto px-5 py-16">
          <h2 className="text-3xl font-extrabold text-center tracking-tight">Como funciona</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center px-4">
                <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-xl font-extrabold text-white mb-4"
                     style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>{s.n}</div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-sm mt-2" style={{ color: '#64748B' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dra. Ana ── */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <div className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-7"
             style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
          <img src="/dra-ana.jpg" alt="Dra. Ana Paula"
               className="w-28 h-28 rounded-2xl object-cover shrink-0 shadow-lg"
               onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ background: `${TEAL}14`, color: TEAL }}>
              <PawPrint size={12} /> Conteúdo revisado profissionalmente
            </span>
            <h3 className="text-xl font-bold">Dra. Ana Paula</h3>
            <p className="text-sm mt-2" style={{ color: '#475569' }}>
              Todo o conteúdo do PetVetly é escrito e revisado pela Dra. Ana Paula, médica
              veterinária. Cada protocolo foi pensado para que você, tutor, saiba agir com
              segurança em casa — e reconheça na hora quando o caso exige um profissional.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-md mx-auto px-5 py-16">
          <h2 className="text-3xl font-extrabold text-center tracking-tight">Comece hoje</h2>
          <p className="text-center mt-3" style={{ color: '#64748B' }}>
            Menos do que uma única consulta de emergência. Por ano.
          </p>
          <div className="rounded-3xl p-7 mt-8 relative overflow-hidden"
               style={{ background: '#0F172A', color: '#fff', boxShadow: `0 20px 50px ${TEAL}33` }}>
            <span className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: TEAL }}>ECONOMIZE 56%</span>
            <p className="text-sm" style={{ color: '#94A3B8' }}>Plano Anual</p>
            <div className="flex items-end gap-1 mt-1">
              <span className="text-4xl font-extrabold">R$147</span>
              <span className="mb-1.5" style={{ color: '#94A3B8' }}>/ano</span>
            </div>
            <p className="text-xs mt-1" style={{ color: '#64748B' }}>
              <span className="line-through">R$334,80</span> · equivale a R$12,25/mês
            </p>
            <ul className="space-y-2.5 mt-6 text-sm">
              {[
                'Acesso completo a todos os protocolos',
                `Todas as ${TOTAL_CATEGORIES}+ categorias`,
                'Triagem inteligente ilimitada',
                'Checklists interativos',
                'Atualizações constantes de conteúdo',
              ].map(b => (
                <li key={b} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: TEAL }}><Check size={12} /></span>
                  {b}
                </li>
              ))}
            </ul>
            <a href={CHECKOUT_ANUAL}
               className="flex items-center justify-center gap-2 font-bold text-white px-6 py-4 rounded-2xl text-sm mt-7 press"
               style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>
              Assinar plano anual <ArrowRight size={16} />
            </a>
            <p className="text-center text-xs mt-3" style={{ color: '#64748B' }}>
              <ShieldCheck size={12} className="inline mr-1" /> Garantia incondicional de 7 dias
            </p>
          </div>
          <p className="text-center text-sm mt-6" style={{ color: '#64748B' }}>
            Quer entender o que seu cão precisa antes?{' '}
            <Link to="/quiz" className="font-semibold" style={{ color: TEAL }}>Faça a avaliação gratuita →</Link>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0F172A', color: '#94A3B8' }}>
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                 style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>🐾</div>
            <span className="font-bold">PetVetly</span>
          </div>
          <p className="text-xs text-center max-w-md">
            Conteúdo informativo revisado pela Dra. Ana Paula. Não substitui a consulta
            veterinária presencial. Em emergências, procure um veterinário.
          </p>
          <Link to="/login" className="text-sm font-semibold text-white press">Já sou assinante</Link>
        </div>
      </footer>
    </div>
  );
}
