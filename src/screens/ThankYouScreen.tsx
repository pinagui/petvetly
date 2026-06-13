import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Download, ArrowRight, Share, Plus, Smartphone } from 'lucide-react';
import { fbqTrack, readPurchaseValue, readQuery } from '../lib/pixel';

const TEAL = '#0D9488';
const TEAL2 = '#0891B2';

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function getDeferredPrompt(): InstallPromptEvent | undefined {
  return (window as unknown as { __pvInstallPrompt?: InstallPromptEvent }).__pvInstallPrompt;
}

const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (navigator as unknown as { standalone?: boolean }).standalone === true;

export default function ThankYouScreen() {
  const navigate = useNavigate();
  const fired = useRef(false);
  const [canInstall, setCanInstall] = useState(!!getDeferredPrompt());
  const [installed, setInstalled] = useState(false);
  const [showIOS, setShowIOS] = useState(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Conversão de compra no Meta Pixel (valor vem da query: ?value=147)
    const { value, currency } = readPurchaseValue();
    const transactionId = readQuery('transaction') ?? readQuery('tid') ?? readQuery('hottok');
    const contentName = readQuery('product') ?? readQuery('prod') ?? 'PetVetly';
    fbqTrack('Purchase', {
      value: value ?? undefined,
      currency,
      content_name: contentName,
      ...(transactionId ? { transaction_id: transactionId } : {}),
    });

    // Se já está rodando como app instalado, pula direto pro login
    if (isStandalone()) { navigate('/login', { replace: true }); return; }

    const onInstallable = () => setCanInstall(true);
    const onInstalled = () => { setInstalled(true); fbqTrack('CompleteRegistration', { content_name: 'pwa_install' }); };
    window.addEventListener('pv-installable', onInstallable);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('pv-installable', onInstallable);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, [navigate]);

  const handleInstall = async () => {
    const dp = getDeferredPrompt();
    if (dp) {
      await dp.prompt();
      try { await dp.userChoice; } catch { /* ignore */ }
      (window as unknown as { __pvInstallPrompt?: InstallPromptEvent }).__pvInstallPrompt = undefined;
      setCanInstall(false);
    } else if (isIOS()) {
      setShowIOS(true);
    } else {
      // navegador sem suporte a instalação — segue pro app
      navigate('/login', { replace: true });
    }
  };

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
            Instale o app no seu celular para ter acesso rápido — a qualquer hora.
          </p>
        </motion.div>

        {/* Bloco de instalação */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="mt-8 rounded-2xl p-5" style={{ background: '#fff', border: `1px solid ${TEAL}33` }}>
          <div className="flex items-center gap-2 justify-center mb-3" style={{ color: TEAL }}>
            <Smartphone size={18} />
            <span className="font-bold text-sm">Instale o PetVetly</span>
          </div>

          {installed ? (
            <p className="text-sm" style={{ color: '#16A34A' }}>✓ App instalado! Abra o PetVetly na sua tela inicial.</p>
          ) : showIOS ? (
            <div className="text-left text-sm space-y-2" style={{ color: '#475569' }}>
              <p className="font-semibold text-center mb-2" style={{ color: '#0F172A' }}>No iPhone/iPad:</p>
              <p className="flex items-center gap-2">1. Toque em <Share size={15} style={{ color: TEAL }} /> <span className="font-medium">Compartilhar</span> (barra do Safari)</p>
              <p className="flex items-center gap-2">2. Escolha <Plus size={15} style={{ color: TEAL }} /> <span className="font-medium">Adicionar à Tela de Início</span></p>
              <p>3. Toque em <span className="font-medium">Adicionar</span> — pronto! 🐾</p>
            </div>
          ) : (
            <>
              <p className="text-xs mb-4" style={{ color: '#64748B' }}>
                Acesso na tela inicial, abre em tela cheia, igual a um app.
              </p>
              <button onClick={handleInstall}
                      className="w-full flex items-center justify-center gap-2 font-bold text-white px-6 py-3.5 rounded-xl text-sm press"
                      style={{ background: `linear-gradient(135deg,${TEAL},${TEAL2})`, boxShadow: `0 8px 22px ${TEAL}40` }}>
                <Download size={17} /> {canInstall ? 'Instalar o app' : 'Instalar / adicionar à tela'}
              </button>
            </>
          )}
        </motion.div>

        {/* Continuar para o login */}
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
                       onClick={() => navigate('/login', { replace: true })}
                       className="w-full flex items-center justify-center gap-1.5 font-semibold px-6 py-4 rounded-2xl text-sm mt-4 press"
                       style={{ background: 'transparent', color: '#0F172A' }}>
          Continuar e acessar agora <ArrowRight size={16} />
        </motion.button>

        <p className="text-xs mt-3" style={{ color: '#94A3B8' }}>
          Use o mesmo e-mail da sua compra na Hotmart
        </p>
      </div>
    </div>
  );
}
