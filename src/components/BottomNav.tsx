import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Stethoscope, User } from 'lucide-react';

const TABS = [
  { path: '/home',    label: 'Início',  Icon: Home },
  { path: '/checker', label: 'Triagem', Icon: Stethoscope },
  { path: '/profile', label: 'Perfil',  Icon: User },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-3 mb-3 backdrop-blur-xl rounded-3xl shadow-xl flex items-center justify-around px-3 py-2"
           style={{ background: 'color-mix(in srgb, var(--surface) 92%, transparent)', border: '1px solid var(--border)' }}>
        {TABS.map(({ path, label, Icon }) => {
          const active = pathname === path || (path === '/home' && pathname === '/');
          const isChecker = path === '/checker';
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-1 px-5 py-1.5 rounded-2xl press"
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${isChecker ? 'g-teal shadow-md shadow-teal-500/30' : ''}`}
                   style={!isChecker ? { background: active ? 'rgba(13,148,136,0.12)' : 'transparent' } : {}}>
                <Icon
                  size={isChecker ? 20 : 22}
                  className={isChecker ? 'text-white' : ''}
                  strokeWidth={active ? 2.5 : 1.8}
                  style={!isChecker ? { color: active ? 'var(--accent)' : 'var(--text4)' } : {}}
                />
              </div>
              <span className="text-[10px] font-semibold transition-colors"
                    style={{ color: active ? 'var(--accent)' : 'var(--text4)' }}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
