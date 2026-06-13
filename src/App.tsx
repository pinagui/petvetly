import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ConditionScreen from './screens/ConditionScreen';
import SymptomCheckerScreen from './screens/SymptomCheckerScreen';
import QuizFunnelScreen from './screens/QuizFunnelScreen';
import AdminScreen from './screens/AdminScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';

function ThemeToggleMobile() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="md:hidden fixed top-4 right-4 z-50 w-9 h-9 rounded-xl flex items-center justify-center shadow-md press"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      {theme === 'dark'
        ? <Sun size={16} style={{ color: 'var(--amber)' }} />
        : <Moon size={16} style={{ color: 'var(--text3)' }} />
      }
    </button>
  );
}

export default function App() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { pathname } = useLocation();

  // Funil de quiz: página pública, sem login (tráfego pago cai direto aqui)
  if (pathname.startsWith('/quiz')) {
    return <QuizFunnelScreen />;
  }

  // Painel do funil: login próprio dentro da tela
  if (pathname.startsWith('/admin')) {
    return <AdminScreen />;
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center" style={{ background: 'var(--page)' }}>
        <div className="w-14 h-14 rounded-3xl g-teal flex items-center justify-center animate-pulse shadow-xl shadow-teal-500/30">
          <span className="text-3xl">🐾</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-full items-center justify-center" style={{ background: 'var(--page)' }}>
        <div className="w-full max-w-lg h-full overflow-y-auto">
          <LoginScreen />
        </div>
      </div>
    );
  }

  if (!user?.pet) {
    return (
      <div className="flex h-full items-center justify-center" style={{ background: 'var(--page)' }}>
        <div className="w-full max-w-lg h-full overflow-y-auto">
          <OnboardingScreen />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full overflow-hidden" style={{ background: 'var(--page)' }}>
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto no-scroll">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/category/:categoryId" element={<CategoryScreen />} />
            <Route path="/condition/:categoryId/:conditionId" element={<ConditionScreen />} />
            <Route path="/checker" element={<SymptomCheckerScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          {/* Bottom nav padding */}
          <div className="md:hidden h-24" />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <BottomNav />
      <ThemeToggleMobile />
    </div>
  );
}
