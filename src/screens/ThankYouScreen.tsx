import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fbqTrack, readPurchaseValue, readQuery } from '../lib/pixel';

const TEAL = '#0D9488';
const TEAL2 = '#0891B2';
const REDIRECT_MS = 2500;

export default function ThankYouScreen() {
  const navigate = useNavigate();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Dispara a conversão de compra no Meta Pixel (valor vem da query: ?value=147)
    const { value, currency } = readPurchaseValue();
    const transactionId = readQuery('transaction') ?? readQuery('tid') ?? readQuery('hottok');
    const contentName = readQuery('product') ?? readQuery('prod') ?? 'PetVetly';

    fbqTrack('Purchase', {
      value: value ?? undefined,
      currency,
      content_name: contentName,
      ...(transactionId ? { transaction_id: transactionId } : {}),
    });

    // Redireciona para o app logo em seguida
    const t = setTimeout(() => navigate('/login', { replace: true }), REDIRECT_MS);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-full overflow-y-auto flex flex-col items-center justify-center px-5 py-12"
         style={{ background: '#F8FAFC', color: '#0F172A' }}>
      <div className="w-full max-w-sm text-center">
        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-xl"
                    style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})`, boxShadow: `0 15px 40px ${TEAL}55` }}>
          <Check size={40} className="text-white" strokeWidth={3} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h1 className="text-3xl font-extrabold mt-7 tracking-tight">Compra confirmada! 🎉</h1>
          <p className="mt-3" style={{ color: '#475569' }}>
            Seja bem-vindo ao <span className="font-bold" style={{ color: TEAL }}>PetVetly</span>.
            Estamos liberando seu acesso…
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mt-8" style={{ color: '#94A3B8' }}>
          <span className="w-4 h-4 border-2 rounded-full animate-spin"
                style={{ borderColor: `${TEAL}33`, borderTopColor: TEAL }} />
          <span className="text-sm">Redirecionando para o app…</span>
        </div>

        <button onClick={() => navigate('/login', { replace: true })}
                className="text-sm font-semibold mt-6 press" style={{ color: TEAL }}>
          Acessar agora →
        </button>
      </div>
    </div>
  );
}
