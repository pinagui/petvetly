import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

const TEAL = '#0D9488';
const TEAL2 = '#0891B2';

const PROOF = ['Protocolos passo a passo', 'Triagem em 2 minutos', '100+ categorias', 'Checklists interativos'];

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
    <div className="min-h-full flex flex-col" style={{ background: '#F8FAFC', color: '#0F172A' }}>
      {/* Top brand bar */}
      <div className="px-5 pt-6">
        <Link to="/" className="inline-flex items-center gap-2 press">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-md"
               style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>🐾</div>
          <span className="font-bold text-lg tracking-tight">PetVetly</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-5 py-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
                    className="w-full max-w-sm">
          {/* Card */}
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 20px 50px rgba(15,23,42,0.10)' }}>
            {/* Hero header */}
            <div className="relative px-7 pt-9 pb-8 text-white overflow-hidden"
                 style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})` }}>
              <div className="absolute inset-0 opacity-20"
                   style={{ backgroundImage: 'radial-gradient(circle at 25% 20%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 90%, #fff 0%, transparent 45%)' }} />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-3xl mb-4 shadow-lg">🐾</div>
                <h1 className="text-2xl font-extrabold tracking-tight">Bem-vindo de volta</h1>
                <p className="text-white/85 text-sm mt-1">Acesse sua conta e cuide do seu cão com segurança.</p>
              </div>
            </div>

            {/* Form */}
            <div className="px-7 py-7">
              <form onSubmit={handleLogin} className="space-y-3">
                <label className="block text-xs font-semibold mb-1" style={{ color: '#64748B' }}>
                  E-mail da sua compra
                </label>
                <div className="relative">
                  <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#94A3B8' }} />
                  <input
                    type="email" value={email}
                    onChange={e => { setEmail(e.target.value); setError(''); }}
                    placeholder="seu@email.com"
                    autoComplete="email" inputMode="email"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm outline-none transition"
                    style={{ background: '#F8FAFC', border: `1.5px solid ${error ? '#EF4444' : '#E2E8F0'}`, color: '#0F172A' }}
                    onFocus={e => { if (!error) e.currentTarget.style.borderColor = TEAL; }}
                    onBlur={e => { if (!error) e.currentTarget.style.borderColor = '#E2E8F0'; }}
                  />
                </div>
                {error && <p className="text-xs ml-1" style={{ color: '#EF4444' }}>{error}</p>}

                <button
                  type="submit" disabled={loading || !email}
                  className="w-full text-white font-bold py-4 rounded-2xl text-sm disabled:opacity-40 flex items-center justify-center gap-2 press"
                  style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})`, boxShadow: `0 10px 24px ${TEAL}40` }}
                >
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Entrando...</>
                    : <>Entrar no app <ArrowRight size={16} /></>}
                </button>
              </form>

              <div className="flex items-center justify-center gap-1.5 mt-5">
                <ShieldCheck size={13} style={{ color: '#94A3B8' }} />
                <p className="text-xs" style={{ color: '#94A3B8' }}>Acesso exclusivo para assinantes</p>
              </div>
            </div>
          </div>

          {/* Mini value props */}
          <div className="grid grid-cols-2 gap-2 mt-5">
            {PROOF.map(p => (
              <div key={p} className="flex items-center gap-1.5 text-xs" style={{ color: '#475569' }}>
                <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: `${TEAL}1a`, color: TEAL }}>
                  <Check size={10} strokeWidth={3} />
                </span>
                {p}
              </div>
            ))}
          </div>

          {/* No access yet */}
          <p className="text-center text-sm mt-6" style={{ color: '#64748B' }}>
            Ainda não tem acesso?{' '}
            <Link to="/quiz" className="font-semibold" style={{ color: TEAL }}>Comece aqui →</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
