import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { allCategories, searchAll } from '../data/index';
import { Search, ChevronRight, AlertTriangle, Sparkles } from 'lucide-react';

const QUICK = [
  { label: 'Lambedura',   emoji: '🐾', cat: 'patas',          cond: 'lambedura' },
  { label: 'Vômito',      emoji: '🤢', cat: 'digestivo',      cond: 'vomito' },
  { label: 'Coceira',     emoji: '😣', cat: 'pele',           cond: 'alergia' },
  { label: 'Emergência',  emoji: '🚨', cat: 'emergencias',    cond: 'intoxicacao' },
  { label: 'Ansiedade',   emoji: '😰', cat: 'comportamento',  cond: 'ansiedade-separacao' },
  { label: 'Alimentação', emoji: '☠️', cat: 'nutricao',       cond: 'alimentos-proibidos' },
];

const TIPS = [
  { tag: 'Lambedura', text: 'Pelo cor de ferrugem na pata indica que seu cão lambe há semanas. É porfirina da saliva oxidando — o sinal mais confiável de lambedura crônica.', gradient: 'g-teal' },
  { tag: 'Emergência', text: 'Se o abdômen do seu cão está distendido e ele tenta vomitar sem conseguir: pode ser torção gástrica. Isso mata em horas. Vá ao vet agora.', gradient: 'g-red' },
  { tag: 'Nutrição', text: 'Xilitol (adoçante em chicletes, doces diet e algumas manteigas de amendoim) causa hipoglicemia fulminante em cães. Verifique os rótulos SEMPRE.', gradient: 'g-amber' },
  { tag: 'Dental', text: '80% dos cães com mais de 3 anos têm doença periodontal. Bactérias dos dentes entram na corrente sanguínea e afetam coração e rins.', gradient: 'g-purple' },
  { tag: 'Digestivo', text: 'Bile amarela pela manhã = estômago vazio, não doença. Um petisco leve antes de dormir elimina esse vômito matinal em 90% dos casos.', gradient: 'g-emerald' },
];

const GRADIENT_MAP: Record<string, string> = {
  'grad-teal': 'g-teal', 'grad-amber': 'g-amber', 'grad-purple': 'g-purple',
  'grad-red': 'g-red', 'grad-emerald': 'g-emerald', 'grad-blue': 'g-blue',
  'grad-orange': 'g-orange', 'grad-cyan': 'g-cyan', 'grad-green': 'g-lime',
  'grad-pink': 'g-pink', 'grad-gray': 'g-indigo', 'grad-rose': 'g-rose',
};
const toClass = (g: string) => GRADIENT_MAP[g] ?? g;

export default function HomeScreen() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [tipIdx] = useState(() => Math.floor(Math.random() * TIPS.length));

  const pet = user?.pet;
  const firstName = user?.name?.split(' ')[0] || 'Tutor';
  const tip = TIPS[tipIdx];

  const searchResults = search ? searchAll(search) : [];
  const showResults = search.length > 0;

  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--page)' }}>
      {/* Header */}
      <div className="sticky top-0 z-30 px-5 pt-12 pb-4" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm" style={{ color: 'var(--text3)' }}>Olá, {firstName} 👋</p>
              <h1 className="text-xl font-bold" style={{ color: 'var(--text1)' }}>
                {pet ? `Cuidando de ${pet.name} ${pet.avatar}` : 'PetVetly'}
              </h1>
            </div>
            <div className="w-11 h-11 g-teal rounded-2xl flex items-center justify-center shadow-md shadow-teal-500/20">
              <span className="text-xl">{pet?.avatar || '🐾'}</span>
            </div>
          </div>
          {/* Search */}
          <div className="flex items-center gap-2.5 rounded-2xl px-4 py-3"
               style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
            <Search size={15} style={{ color: 'var(--text4)' }} className="shrink-0" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar sintoma, condição ou protocolo..."
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: 'var(--text1)' }}
            />
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-8 max-w-3xl mx-auto w-full space-y-5">

        {/* Search results */}
        {showResults && (
          <div>
            <p className="text-xs font-semibold mb-3 px-1" style={{ color: 'var(--text3)' }}>
              {searchResults.length > 0
                ? `RESULTADOS PARA "${search.toUpperCase()}"`
                : `NENHUM RESULTADO PARA "${search.toUpperCase()}"`
              }
            </p>
            <div className="space-y-2">
              {searchResults.map(({ category, matches }) => (
                <button
                  key={category.id}
                  onClick={() => navigate(`/category/${category.id}`)}
                  className="w-full card rounded-2xl p-4 flex items-center gap-4 press text-left"
                >
                  <div className={`w-12 h-12 ${toClass(category.gradient)} rounded-2xl flex items-center justify-center shrink-0 shadow-md`}>
                    <span className="text-2xl">{category.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm" style={{ color: 'var(--text1)' }}>{category.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{matches.slice(0, 2).join(' · ')}</p>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--text4)' }} />
                </button>
              ))}
            </div>
          </div>
        )}

        {!showResults && (
          <>
            {/* Tip card */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-3xl shadow-lg">
              <div className={`${tip.gradient} px-5 py-4`}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-white/80" />
                  <span className="text-white/80 text-xs font-semibold">{tip.tag.toUpperCase()}</span>
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">{tip.text}</p>
              </div>
            </motion.div>

            {/* Emergency banner */}
            <button
              onClick={() => navigate('/category/emergencias')}
              className="w-full flex items-center gap-3 rounded-2xl px-4 py-3.5 press"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              <div className="w-9 h-9 bg-red-500 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle size={16} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-sm" style={{ color: 'var(--red)' }}>Protocolos de Emergência</p>
                <p className="text-xs" style={{ color: 'var(--text3)' }}>Intoxicação, convulsão, torção, mordida</p>
              </div>
              <ChevronRight size={14} style={{ color: 'var(--red)' }} />
            </button>

            {/* Quick access */}
            <div>
              <p className="text-xs font-semibold mb-3 px-1" style={{ color: 'var(--text3)' }}>ACESSO RÁPIDO</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {QUICK.map((q, i) => (
                  <motion.button
                    key={q.cond}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => navigate(`/condition/${q.cat}/${q.cond}`)}
                    className="card rounded-2xl py-4 px-2 flex flex-col items-center gap-2 press"
                  >
                    <span className="text-3xl">{q.emoji}</span>
                    <span className="text-xs font-medium text-center leading-tight" style={{ color: 'var(--text2)' }}>{q.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Categorias', value: allCategories.length, emoji: '📂' },
                { label: 'Condições', value: allCategories.reduce((s, c) => s + c.conditions.length, 0), emoji: '🔬' },
                { label: 'Protocolos', value: allCategories.reduce((s, c) => s + c.conditions.reduce((ss, cond) => ss + cond.protocols.length, 0), 0), emoji: '📋' },
              ].map(stat => (
                <div key={stat.label} className="card rounded-2xl p-3 text-center">
                  <p className="text-lg">{stat.emoji}</p>
                  <p className="font-bold text-lg" style={{ color: 'var(--accent)' }}>{stat.value}+</p>
                  <p className="text-xs" style={{ color: 'var(--text3)' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* All categories */}
            <div>
              <p className="text-xs font-semibold mb-3 px-1" style={{ color: 'var(--text3)' }}>TODOS OS PROTOCOLOS</p>
              <div className="space-y-2.5">
                {allCategories.map((cat, i) => (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => navigate(`/category/${cat.id}`)}
                    className="w-full card rounded-2xl p-4 flex items-center gap-4 press text-left"
                  >
                    <div className={`w-12 h-12 ${toClass(cat.gradient)} rounded-2xl flex items-center justify-center shrink-0 shadow-md`}>
                      <span className="text-2xl">{cat.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm" style={{ color: 'var(--text1)' }}>{cat.name}</p>
                      <p className="text-xs mt-0.5 line-clamp-1" style={{ color: 'var(--text3)' }}>{cat.description}</p>
                      <p className="text-xs mt-1 font-medium" style={{ color: 'var(--accent)' }}>
                        {cat.conditions.length} condição{cat.conditions.length !== 1 ? 'ões' : ''} · {cat.conditions.reduce((s, c) => s + c.protocols.length, 0)} protocolo{cat.conditions.reduce((s, c) => s + c.protocols.length, 0) !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <ChevronRight size={16} style={{ color: 'var(--text4)' }} />
                  </motion.button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
