import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) { setError('Digite um e-mail válido'); return; }
    setLoading(true); setError('');
    try { await login(email.trim().toLowerCase()); }
    catch { setError('E-mail não encontrado. Use o e-mail da sua compra na Hotmart.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--page)' }}>
      {/* Hero gradient */}
      <div className="relative h-72 g-teal flex flex-col items-center justify-end pb-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, #fff 0%, transparent 50%), radial-gradient(circle at 70% 80%, #fff 0%, transparent 40%)' }} />
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 shadow-2xl border border-white/30">
            <span className="text-5xl">🐾</span>
          </div>
          <h1 className="text-white text-3xl font-bold tracking-tight">PetVetly</h1>
          <p className="text-white/80 text-sm mt-1">Veterinário 24h no seu bolso</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-8 pb-10">
        {/* Value props */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="space-y-3 mb-8">
          {[
            { icon: '🩺', title: 'Protocolos completos', sub: 'Guias detalhados passo a passo para cada sintoma' },
            { icon: '⚡', title: 'Triagem em 2 minutos', sub: 'Descubra a urgência real do problema do seu cão' },
            { icon: '📚', title: '100+ condições detalhadas', sub: 'Lambedura, vômito, coceira, emergências e muito mais' },
            { icon: '✅', title: 'Checklists interativos', sub: 'Acompanhe cada etapa do tratamento em casa' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.07 }}
              className="flex items-center gap-3 card rounded-2xl px-4 py-3.5">
              <span className="text-2xl w-9 text-center">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--text1)' }}>{item.title}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--text1)' }}>Acessar minha conta</h2>
          <p className="text-sm mb-5" style={{ color: 'var(--text3)' }}>Use o e-mail cadastrado na sua compra na Hotmart</p>

          <form onSubmit={handleLogin} className="space-y-3">
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text4)' }} />
              <input
                type="email" value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                placeholder="seu@email.com"
                className="inp pl-10"
                autoComplete="email" inputMode="email"
              />
            </div>
            {error && <p className="text-xs ml-1" style={{ color: 'var(--red)' }}>{error}</p>}
            <button
              type="submit" disabled={loading || !email}
              className="w-full g-teal text-white font-semibold py-4 rounded-2xl text-sm disabled:opacity-40 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/25 press"
            >
              {loading
                ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Entrando...</>
                : <>Entrar no App <ArrowRight size={16} /></>
              }
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 mt-6">
            <ShieldCheck size={13} style={{ color: 'var(--text4)' }} />
            <p className="text-xs" style={{ color: 'var(--text4)' }}>Acesso exclusivo para assinantes Hotmart</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
