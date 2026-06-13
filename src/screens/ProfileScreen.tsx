import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, ChevronRight, Heart, Bell, Shield, Star, RefreshCw, PawPrint } from 'lucide-react';
import { allCategories } from '../data/index';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const pet = user?.pet;

  const totalConditions = allCategories.reduce((s, c) => s + c.conditions.length, 0);
  const totalProtocols = allCategories.reduce((s, c) => s + c.conditions.reduce((ss, cond) => ss + cond.protocols.length, 0), 0);

  return (
    <div className="flex flex-col min-h-full pb-8" style={{ background: 'var(--page)' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-6" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-bold mb-5" style={{ color: 'var(--text1)' }}>Meu Perfil</h1>

          {pet ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="g-teal rounded-3xl p-5 shadow-lg shadow-teal-500/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl border border-white/30">
                  {pet.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-semibold mb-0.5">MEU PET</p>
                  <h2 className="text-white text-xl font-bold">{pet.name}</h2>
                  <p className="text-white/80 text-sm">{pet.breed}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: 'Idade', value: pet.age },
                  { label: 'Peso', value: pet.weight },
                  { label: 'Sexo', value: pet.gender === 'male' ? 'Macho' : 'Fêmea' },
                ].map(s => (
                  <div key={s.label} className="bg-white/15 rounded-xl px-2 py-2 text-center">
                    <p className="text-white/60 text-xs">{s.label}</p>
                    <p className="text-white font-semibold text-xs mt-0.5">{s.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="rounded-2xl p-4 flex items-center gap-3"
                 style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
              <PawPrint size={24} style={{ color: 'var(--text4)' }} />
              <p className="text-sm" style={{ color: 'var(--text3)' }}>Nenhum pet cadastrado</p>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 pt-5 space-y-5 max-w-2xl mx-auto w-full">
        {/* User info */}
        <div>
          <p className="text-xs font-semibold mb-2 px-1" style={{ color: 'var(--text3)' }}>CONTA</p>
          <div className="card rounded-2xl overflow-hidden">
            <div className="px-4 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
              <p className="font-semibold text-sm" style={{ color: 'var(--text1)' }}>{user?.name}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{user?.email}</p>
            </div>
            <div className="px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--emerald)' }} />
              <p className="text-xs font-semibold" style={{ color: 'var(--emerald)' }}>Assinatura ativa — PetVetly R$27,90/mês</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { v: allCategories.length + '+', l: 'Categorias' },
            { v: totalConditions + '+', l: 'Condições' },
            { v: totalProtocols + '+', l: 'Protocolos' },
          ].map(s => (
            <div key={s.l} className="card rounded-2xl p-3.5 text-center">
              <p className="font-bold text-2xl" style={{ color: 'var(--accent)' }}>{s.v}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{s.l}</p>
            </div>
          ))}
        </div>

        {/* Settings sections */}
        {[
          {
            title: 'App', items: [
              { icon: <Bell size={16} />, label: 'Notificações', sub: 'Lembretes e dicas diárias' },
              { icon: <Star size={16} />, label: 'Avaliar o App', sub: 'Deixe sua opinião' },
            ]
          },
          {
            title: 'Assinatura', items: [
              { icon: <Heart size={16} />, label: 'Plano PetVetly', sub: 'R$27,90/mês — ativo' },
              { icon: <RefreshCw size={16} />, label: 'Gerenciar via Hotmart', sub: 'Cancelar ou atualizar pagamento' },
            ]
          },
          {
            title: 'Segurança', items: [
              { icon: <Shield size={16} />, label: 'Privacidade', sub: 'Seus dados são protegidos' },
            ]
          },
        ].map(section => (
          <div key={section.title}>
            <p className="text-xs font-semibold mb-2 px-1" style={{ color: 'var(--text3)' }}>{section.title.toUpperCase()}</p>
            <div className="card rounded-2xl overflow-hidden">
              {section.items.map((item, i) => (
                <button key={item.label}
                  className="w-full flex items-center gap-3 px-4 py-4 press text-left"
                  style={{ borderTop: i > 0 ? `1px solid var(--border)` : undefined }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                       style={{ background: 'var(--surface2)', color: 'var(--text3)' }}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: 'var(--text1)' }}>{item.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{item.sub}</p>
                  </div>
                  <ChevronRight size={14} style={{ color: 'var(--text4)' }} />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <div>
          {!confirmLogout ? (
            <button onClick={() => setConfirmLogout(true)}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm press"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text3)' }}>
              <LogOut size={15} /> Sair da conta
            </button>
          ) : (
            <div className="card rounded-2xl p-4 space-y-3">
              <p className="text-sm text-center font-medium" style={{ color: 'var(--text2)' }}>Tem certeza que deseja sair?</p>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setConfirmLogout(false)}
                  className="font-medium py-3 rounded-xl text-sm press"
                  style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
                  Cancelar
                </button>
                <button onClick={logout}
                  className="bg-red-500 text-white font-semibold py-3 rounded-xl text-sm press">
                  Sair
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-center pb-2" style={{ color: 'var(--text4)' }}>
          PetVetly v1.0 · Conteúdo da Dra. Ana Paula<br />
          Informativo — não substitui consulta veterinária presencial
        </p>
      </div>
    </div>
  );
}
