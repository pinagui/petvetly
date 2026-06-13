import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Stethoscope, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const NAV = [
  { path: '/home',    label: 'Início',    Icon: Home },
  { path: '/checker', label: 'Triagem',   Icon: Stethoscope },
  { path: '/profile', label: 'Perfil',    Icon: User },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();
  const { user } = useAuth();

  return (
    <aside
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      className="hidden md:flex flex-col w-64 h-full border-r shrink-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="w-10 h-10 rounded-2xl g-teal flex items-center justify-center shadow-md shadow-teal-500/30">
          <span className="text-xl">🐾</span>
        </div>
        <div>
          <p className="font-bold text-base" style={{ color: 'var(--text1)' }}>PetVetly</p>
          <p className="text-xs" style={{ color: 'var(--text3)' }}>Veterinário 24h</p>
        </div>
      </div>

      {/* Pet profile mini-card */}
      {user?.pet && (
        <div className="mx-4 mt-4 p-3 rounded-2xl" style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl g-teal flex items-center justify-center text-lg">
              {user.pet.avatar || '🐶'}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm truncate" style={{ color: 'var(--text1)' }}>{user.pet.name}</p>
              <p className="text-xs truncate" style={{ color: 'var(--text3)' }}>{user.pet.breed} · {user.pet.age}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(({ path, label, Icon }) => {
          const active = pathname === path || (path === '/home' && pathname === '/');
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all press"
              style={{
                background: active ? 'rgba(13,148,136,0.12)' : 'transparent',
                color: active ? 'var(--accent)' : 'var(--text2)',
              }}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${path === '/checker' ? 'g-teal' : ''}`}
                   style={path !== '/checker' ? { background: active ? 'rgba(13,148,136,0.15)' : 'var(--surface2)' } : {}}>
                <Icon
                  size={18}
                  strokeWidth={active ? 2.5 : 1.8}
                  className={path === '/checker' ? 'text-white' : ''}
                  style={path !== '/checker' ? { color: active ? 'var(--accent)' : 'var(--text3)' } : {}}
                />
              </div>
              <span className="font-medium text-sm">{label}</span>
              {active && path !== '/checker' && (
                <span className="ml-auto w-2 h-2 rounded-full bg-[var(--accent)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom: theme toggle + user */}
      <div className="px-3 pb-4 space-y-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
        <button
          onClick={toggle}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all press"
          style={{ background: 'var(--surface2)', color: 'var(--text2)' }}
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--border)' }}>
            {theme === 'dark'
              ? <Sun size={16} style={{ color: 'var(--amber)' }} />
              : <Moon size={16} style={{ color: 'var(--text3)' }} />
            }
          </div>
          <span className="font-medium text-sm">{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
        </button>

        {user && (
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl" style={{ background: 'var(--surface2)' }}>
            <div className="w-8 h-8 rounded-xl g-teal flex items-center justify-center text-sm">
              {user.name?.[0]?.toUpperCase() || '?'}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium truncate" style={{ color: 'var(--text1)' }}>{user.name}</p>
              <p className="text-[10px] truncate" style={{ color: 'var(--text3)' }}>{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
