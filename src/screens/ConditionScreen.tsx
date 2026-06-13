import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronDown, CheckSquare, Square, AlertTriangle, ShieldCheck, Lightbulb, HelpCircle, ChevronRight, Zap, Calendar } from 'lucide-react';
import { getCategoryById } from '../data/index';
import type { Protocol, Stage, ChecklistSection, DayPlan } from '../data/types';

const GRADIENT_MAP: Record<string, string> = {
  'grad-teal': 'g-teal', 'grad-amber': 'g-amber', 'grad-purple': 'g-purple',
  'grad-red': 'g-red', 'grad-emerald': 'g-emerald', 'grad-blue': 'g-blue',
  'grad-orange': 'g-orange', 'grad-cyan': 'g-cyan', 'grad-green': 'g-lime',
  'grad-pink': 'g-pink', 'grad-gray': 'g-indigo', 'grad-rose': 'g-rose',
};
const toClass = (g: string) => GRADIENT_MAP[g] ?? g;

const urgencyStyle = (u: Stage['urgency']) => {
  switch (u) {
    case 'low':       return { bg: 'rgba(16,185,129,.1)',  border: 'rgba(16,185,129,.3)', label: 'Leve',           color: 'var(--emerald)' };
    case 'moderate':  return { bg: 'rgba(245,158,11,.1)',  border: 'rgba(245,158,11,.3)', label: 'Moderado',       color: 'var(--amber)' };
    case 'high':      return { bg: 'rgba(234,88,12,.1)',   border: 'rgba(234,88,12,.3)',  label: 'Alta urgência',  color: '#FB923C' };
    case 'emergency': return { bg: 'rgba(239,68,68,.1)',   border: 'rgba(239,68,68,.3)',  label: '🚨 EMERGÊNCIA',  color: 'var(--red)' };
  }
};

const freqLabel = (freq: ChecklistSection['freq']) => {
  switch (freq) {
    case 'daily':      return '📅 Diário';
    case 'weekly':     return '📆 Semanal';
    case 'monthly':    return '🗓️ Mensal';
    case 'each_event': return '⚡ A cada vez';
  }
};

type Tab = 'stages' | 'protocol' | 'checklists' | 'weeklyplan' | 'triggers' | 'prevention' | 'myths' | 'faq';
const ALL_TABS: { id: Tab; label: string }[] = [
  { id: 'stages',     label: 'Estágios'   },
  { id: 'protocol',   label: 'Protocolo'  },
  { id: 'checklists', label: 'Checklists' },
  { id: 'weeklyplan', label: '📅 7 Dias'  },
  { id: 'triggers',   label: 'Gatilhos'   },
  { id: 'prevention', label: 'Prevenção'  },
  { id: 'myths',      label: 'Mitos'      },
  { id: 'faq',        label: 'FAQ'        },
];

function WeeklyPlanWidget({ plan }: { plan: DayPlan[] }) {
  const [checked, setChecked] = useState<Record<string, Set<number>>>({});
  const toggle = (dayKey: string, i: number) => {
    setChecked(prev => {
      const daySet = new Set(prev[dayKey] ?? []);
      daySet.has(i) ? daySet.delete(i) : daySet.add(i);
      return { ...prev, [dayKey]: daySet };
    });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={16} style={{ color: 'var(--accent)' }} />
        <h3 className="font-bold text-sm" style={{ color: 'var(--text1)' }}>Plano de Acompanhamento — 7 Dias</h3>
      </div>
      <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text3)' }}>
        Siga este checklist diário para monitorar a evolução do seu pet. Marque cada tarefa conforme realizada.
      </p>
      {plan.map(day => {
        const key = `day-${day.day}`;
        const dayChecked = checked[key] ?? new Set<number>();
        const done = dayChecked.size;
        const total = day.tasks.length;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        const complete = done === total && total > 0;
        return (
          <div key={key} className="card rounded-2xl p-4"
               style={{ borderLeft: `3px solid ${complete ? 'var(--emerald)' : 'var(--accent)'}` }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold"
                      style={{ background: complete ? 'rgba(16,185,129,.15)' : 'rgba(13,148,136,.15)',
                               color: complete ? 'var(--emerald)' : 'var(--accent)' }}>
                  {day.day}
                </span>
                <p className="font-semibold text-sm" style={{ color: 'var(--text1)' }}>{day.label}</p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: complete ? 'rgba(16,185,129,.1)' : 'var(--surface2)',
                             color: complete ? 'var(--emerald)' : 'var(--text3)' }}>
                {complete ? '✓ Completo' : `${done}/${total}`}
              </span>
            </div>
            <div className="h-1 rounded-full overflow-hidden mb-3" style={{ background: 'var(--surface2)' }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                className="h-full rounded-full"
                style={{ background: complete ? 'var(--emerald)' : 'var(--accent)' }} />
            </div>
            <div className="space-y-2 mb-2">
              {day.tasks.map((task, i) => (
                <button key={i} onClick={() => toggle(key, i)}
                  className="w-full flex items-start gap-3 text-left press">
                  {dayChecked.has(i)
                    ? <CheckSquare size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--emerald)' }} />
                    : <Square size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--text4)' }} />
                  }
                  <span className="text-sm leading-snug"
                    style={{ color: dayChecked.has(i) ? 'var(--text3)' : 'var(--text2)',
                             textDecoration: dayChecked.has(i) ? 'line-through' : 'none' }}>
                    {task}
                  </span>
                </button>
              ))}
            </div>
            {day.note && (
              <div className="rounded-xl px-3 py-2 flex items-start gap-2"
                   style={{ background: 'rgba(13,148,136,.08)', border: '1px solid rgba(13,148,136,.15)' }}>
                <Lightbulb size={12} className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text3)' }}>{day.note}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ChecklistWidget({ section }: { section: ChecklistSection }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  const done = checked.size;
  const total = section.items.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="card rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm" style={{ color: 'var(--text1)' }}>{section.label}</p>
          <p className="text-xs" style={{ color: 'var(--text3)' }}>{freqLabel(section.freq)}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg" style={{ color: done === total ? 'var(--emerald)' : 'var(--accent)' }}>{done}/{total}</p>
          <p className="text-xs" style={{ color: 'var(--text3)' }}>{pct}%</p>
        </div>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
        <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
          className="h-full rounded-full transition-all"
          style={{ background: done === total ? 'var(--emerald)' : 'var(--accent)' }} />
      </div>
      <div className="space-y-2">
        {section.items.map((item, i) => (
          <button key={i} onClick={() => toggle(i)} className="w-full flex items-start gap-3 text-left press">
            {checked.has(i)
              ? <CheckSquare size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--emerald)' }} />
              : <Square size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--text4)' }} />
            }
            <span className="text-sm leading-relaxed"
              style={{ color: checked.has(i) ? 'var(--text3)' : 'var(--text2)', textDecoration: checked.has(i) ? 'line-through' : 'none' }}>
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)}
        className="w-full px-4 py-4 flex items-center justify-between text-left press gap-3">
        <div className="flex items-start gap-2">
          <HelpCircle size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
          <span className="font-medium text-sm" style={{ color: 'var(--text1)' }}>{q}</span>
        </div>
        <ChevronDown size={15} className="shrink-0 transition-transform"
          style={{ color: 'var(--text3)', transform: open ? 'rotate(180deg)' : undefined }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="px-4 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ConditionScreen() {
  const { categoryId, conditionId } = useParams<{ categoryId: string; conditionId: string }>();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('stages');
  const [activeProto, setActiveProto] = useState(0);

  const cat = getCategoryById(categoryId!);
  const cond = cat?.conditions.find(c => c.id === conditionId);
  if (!cat || !cond) return null;

  const proto: Protocol = cond.protocols[activeProto] ?? cond.protocols[0];
  if (!proto) return null;

  const visibleTabs = ALL_TABS.filter(t => {
    if (t.id === 'triggers' && proto.triggers.length === 0) return false;
    if (t.id === 'myths' && proto.myths.length === 0) return false;
    if (t.id === 'faq' && proto.faq.length === 0) return false;
    if (t.id === 'checklists' && proto.checklists.length === 0) return false;
    if (t.id === 'weeklyplan' && (!proto.weeklyPlan || proto.weeklyPlan.length === 0)) return false;
    return true;
  });

  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--page)' }}>
      {/* Hero header */}
      <div className={`${toClass(cond.gradient)} px-5 pt-12 pb-6`}>
        <div className="max-w-3xl mx-auto">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-white/80 text-sm font-medium mb-5 press">
            <ChevronLeft size={18} /> {cat.name}
          </button>
          <div className="flex items-start gap-4">
            <div className="text-5xl">{cond.emoji}</div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">{cond.name}</h1>
              <p className="text-white/80 text-sm mt-1 leading-relaxed line-clamp-3">{cond.description}</p>
            </div>
          </div>
          {cond.prevalence && (
            <div className="mt-4 bg-black/20 rounded-2xl px-4 py-3">
              <p className="text-white/90 text-xs leading-relaxed">📊 {cond.prevalence}</p>
            </div>
          )}
        </div>
      </div>

      {/* Protocol selector if multiple */}
      {cond.protocols.length > 1 && (
        <div className="px-4 pt-3 pb-2" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-3xl mx-auto flex gap-2 overflow-x-auto no-scroll">
            {cond.protocols.map((p, i) => (
              <button key={p.id} onClick={() => { setActiveProto(i); setTab('stages'); }}
                className="px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap press"
                style={{
                  background: activeProto === i ? 'var(--accent)' : 'var(--surface2)',
                  color: activeProto === i ? '#fff' : 'var(--text2)',
                }}>
                {p.title.length > 35 ? p.title.slice(0, 35) + '…' : p.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Protocol title */}
      <div className="px-5 py-3" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-sm" style={{ color: 'var(--text1)' }}>{proto.title}</h2>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{proto.subtitle}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-20 overflow-x-auto no-scroll"
           style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto flex gap-1 px-4 py-2">
          {visibleTabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all press"
              style={{
                background: tab === t.id ? 'rgba(13,148,136,.15)' : 'transparent',
                color: tab === t.id ? 'var(--accent)' : 'var(--text3)',
              }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-4 pt-4 pb-8 max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div key={`${tab}-${activeProto}`}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="space-y-3">

            {/* STAGES */}
            {tab === 'stages' && proto.stages.map(stage => {
              const s = urgencyStyle(stage.urgency);
              return (
                <div key={stage.id} className="card rounded-2xl p-4"
                     style={{ borderLeft: `4px solid ${s.border}` }}>
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-sm" style={{ color: 'var(--text1)' }}>{stage.label}</h3>
                    <span className="text-xs font-bold px-2 py-1 rounded-full shrink-0"
                          style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                      {s.label}
                    </span>
                  </div>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--text2)' }}>{stage.description}</p>
                  {stage.signs.length > 0 && (
                    <>
                      <p className="text-xs font-bold mb-2" style={{ color: 'var(--text3)' }}>SINAIS & SINTOMAS</p>
                      <ul className="space-y-1.5">
                        {stage.signs.map((sign, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text2)' }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              );
            })}

            {/* VET ALERT in stages */}
            {tab === 'stages' && proto.vetAlert.length > 0 && (
              <div className="rounded-2xl p-4"
                   style={{ background: 'rgba(239,68,68,.08)', border: '1px solid rgba(239,68,68,.25)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={16} style={{ color: 'var(--red)' }} />
                  <span className="font-bold text-sm" style={{ color: 'var(--red)' }}>Quando ir ao veterinário AGORA</span>
                </div>
                {proto.vetAlert.map((a, i) => (
                  <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                    <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: 'var(--red)' }}>→</span>
                    <p className="text-sm leading-snug" style={{ color: 'var(--text2)' }}>{a}</p>
                  </div>
                ))}
              </div>
            )}

            {/* PROTOCOL STEPS */}
            {tab === 'protocol' && proto.steps.map((step, i) => (
              <div key={i} className="card rounded-2xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 g-teal rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20 text-xl">
                    {step.icon ?? <Zap size={16} className="text-white" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-sm" style={{ color: 'var(--text1)' }}>{step.title}</h3>
                      {step.duration && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                              style={{ background: 'var(--surface2)', color: 'var(--text3)' }}>
                          {step.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text2)' }}>{step.description}</p>
                {step.checklist && step.checklist.length > 0 && (
                  <div className="rounded-xl p-3 space-y-1.5" style={{ background: 'var(--surface2)' }}>
                    {step.checklist.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text2)' }}>
                        <ChevronRight size={12} className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                {step.warning && (
                  <div className="mt-3 rounded-xl p-3 flex items-start gap-2"
                       style={{ background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.25)' }}>
                    <AlertTriangle size={14} className="shrink-0 mt-0.5" style={{ color: 'var(--amber)' }} />
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{step.warning}</p>
                  </div>
                )}
              </div>
            ))}

            {/* CHECKLISTS */}
            {tab === 'checklists' && proto.checklists.map((cl, i) => (
              <ChecklistWidget key={i} section={cl} />
            ))}

            {/* WEEKLY PLAN */}
            {tab === 'weeklyplan' && proto.weeklyPlan && proto.weeklyPlan.length > 0 && (
              <WeeklyPlanWidget plan={proto.weeklyPlan} />
            )}

            {/* TRIGGERS */}
            {tab === 'triggers' && (
              <div className="card rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} style={{ color: 'var(--amber)' }} />
                  <h3 className="font-bold text-sm" style={{ color: 'var(--text1)' }}>Gatilhos & Causas</h3>
                </div>
                <ul className="space-y-3">
                  {proto.triggers.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                            style={{ background: 'rgba(245,158,11,.15)', color: 'var(--amber)' }}>
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{t}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* PREVENTION */}
            {tab === 'prevention' && (
              <div className="card rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={16} style={{ color: 'var(--emerald)' }} />
                  <h3 className="font-bold text-sm" style={{ color: 'var(--text1)' }}>Como Prevenir</h3>
                </div>
                <ul className="space-y-3">
                  {proto.prevention.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck size={14} className="shrink-0 mt-0.5" style={{ color: 'var(--emerald)' }} />
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* MYTHS */}
            {tab === 'myths' && proto.myths.map((m, i) => (
              <div key={i} className="card rounded-2xl p-4">
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-lg">❌</span>
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text3)' }}>MITO</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text1)' }}>{m.myth}</p>
                  </div>
                </div>
                <div className="rounded-xl p-3 flex items-start gap-2"
                     style={{ background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)' }}>
                  <Lightbulb size={14} className="shrink-0 mt-0.5" style={{ color: 'var(--emerald)' }} />
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--emerald)' }}>VERDADE</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{m.truth}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ */}
            {tab === 'faq' && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle size={16} style={{ color: 'var(--accent2)' }} />
                  <h3 className="font-bold text-sm" style={{ color: 'var(--text1)' }}>Perguntas Frequentes</h3>
                </div>
                {proto.faq.map((f, i) => <AccordionItem key={i} q={f.q} a={f.a} />)}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
