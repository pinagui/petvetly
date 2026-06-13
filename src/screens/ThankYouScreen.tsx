import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Mail, ShieldCheck } from 'lucide-react';

const TEAL = '#0D9488';
const TEAL2 = '#0891B2';

const STEPS = [
  { icon: '📧', title: 'Confira seu e-mail', sub: 'A Hotmart enviou a confirmação da sua compra. Guarde esse e-mail.' },
  { icon: '🔑', title: 'Acesse com o mesmo e-mail', sub: 'Entre no app usando exatamente o e-mail que você usou na compra.' },
  { icon: '🐶', title: 'Cadastre seu cão', sub: 'Em 30 segundos você personaliza o app para o seu pet.' },
];

export default function ThankYouScreen() {
  return (
    <div className="min-h-full overflow-y-auto flex flex-col items-center justify-center px-5 py-12"
         style={{ background: '#F8FAFC', color: '#0F172A' }}>
      <div className="w-full max-w-md">
        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-xl"
                    style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})`, boxShadow: `0 15px 40px ${TEAL}55` }}>
          <Check size={40} className="text-white" strokeWidth={3} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h1 className="text-3xl font-extrabold text-center mt-7 tracking-tight">Compra confirmada! 🎉</h1>
          <p className="text-center mt-3" style={{ color: '#475569' }}>
            Seja bem-vindo ao <span className="font-bold" style={{ color: TEAL }}>PetVetly</span>.
            Seu acesso já está liberado — agora é só entrar.
          </p>
        </motion.div>

        {/* Botão principal → login */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Link to="/login"
                className="flex items-center justify-center gap-2 font-bold text-white px-7 py-4 rounded-2xl text-sm shadow-lg press mt-8"
                style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})`, boxShadow: `0 10px 30px ${TEAL}40` }}>
            Acessar o app agora <ArrowRight size={17} />
          </Link>
          <p className="flex items-center justify-center gap-1.5 text-xs mt-4" style={{ color: '#94A3B8' }}>
            <Mail size={13} /> Use o mesmo e-mail da sua compra na Hotmart
          </p>
        </motion.div>

        {/* Próximos passos */}
        <div className="mt-10 space-y-3">
          {STEPS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                        style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
              <span className="text-2xl w-9 text-center">{s.icon}</span>
              <div>
                <p className="font-semibold text-sm">{s.title}</p>
                <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="flex items-center justify-center gap-1.5 text-xs text-center mt-8" style={{ color: '#94A3B8' }}>
          <ShieldCheck size={13} /> Garantia de 7 dias · Suporte via Hotmart
        </p>
      </div>
    </div>
  );
}
