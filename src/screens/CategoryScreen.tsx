import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getCategoryById } from '../data/index';

const GRADIENT_MAP: Record<string, string> = {
  'grad-teal': 'g-teal', 'grad-amber': 'g-amber', 'grad-purple': 'g-purple',
  'grad-red': 'g-red', 'grad-emerald': 'g-emerald', 'grad-blue': 'g-blue',
  'grad-orange': 'g-orange', 'grad-cyan': 'g-cyan', 'grad-green': 'g-lime',
  'grad-pink': 'g-pink', 'grad-gray': 'g-indigo', 'grad-rose': 'g-rose',
};
const toClass = (g: string) => GRADIENT_MAP[g] ?? g;

export default function CategoryScreen() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const cat = getCategoryById(categoryId!);
  if (!cat) return null;

  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--page)' }}>
      {/* Header */}
      <div className="sticky top-0 z-20 px-5 pt-12 pb-5"
           style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-sm font-medium mb-5 press"
            style={{ color: 'var(--accent)' }}>
            <ChevronLeft size={18} /> Início
          </button>
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${toClass(cat.gradient)} rounded-3xl flex items-center justify-center shadow-lg shrink-0`}>
              <span className="text-3xl">{cat.emoji}</span>
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: 'var(--text1)' }}>{cat.name}</h1>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text3)' }}>
                {cat.conditions.length} condição{cat.conditions.length !== 1 ? 'ões' : ''} · {cat.conditions.reduce((s, c) => s + c.protocols.length, 0)} protocolo{cat.conditions.reduce((s, c) => s + c.protocols.length, 0) !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-8 max-w-3xl mx-auto w-full">
        <p className="text-sm mb-4 px-1 leading-relaxed" style={{ color: 'var(--text3)' }}>{cat.description}</p>
        <div className="space-y-3">
          {cat.conditions.map((cond, i) => (
            <motion.button
              key={cond.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => navigate(`/condition/${cat.id}/${cond.id}`)}
              className="w-full card rounded-2xl p-4 text-left press"
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 ${toClass(cond.gradient)} rounded-2xl flex items-center justify-center shrink-0 shadow-md`}>
                  <span className="text-2xl">{cond.emoji}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm" style={{ color: 'var(--text1)' }}>{cond.name}</h3>
                    <ChevronRight size={14} style={{ color: 'var(--text4)' }} />
                  </div>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text3)' }}>{cond.description}</p>
                  {cond.prevalence && (
                    <p className="text-xs mt-2 font-medium" style={{ color: 'var(--accent)' }}>📊 {cond.prevalence}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {cond.protocols.map(p => (
                  <span key={p.id} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: 'var(--surface2)', color: 'var(--text3)' }}>
                    {p.title.length > 30 ? p.title.slice(0, 30) + '…' : p.title}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
