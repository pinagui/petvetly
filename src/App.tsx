import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import ThankYouScreen from './screens/ThankYouScreen';
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

function Loader() {
  return (
    <div className="flex h-full items-center justify-center" style={{ background: 'var(--page)' }}>
      <div className="w-14 h-14 rounded-3xl g-teal flex items-center justify-center animate-pulse shadow-xl shadow-teal-500/30">
        <span className="text-3xl">🐾</span>
      </div>
    </div>
  );
}

/* Tela de login (rota /login). Se já estiver logado, vai pro app. */
function LoginGate() {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <Loader />;
  if (isAuthenticated) return <Navigate to="/home" replace />;
  return (
    <div className="flex h-full items-center justify-center" style={{ background: 'var(--page)' }}>
      <div className="w-full max-w-lg h-full overflow-y-auto">
        <LoginScreen />
      </div>
    </div>
  );
}

/* App autenticado (home, categorias, perfil etc.) */
function AppShell() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

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
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto no-scroll">
          <Routes>
            <Route path="home" element={<HomeScreen />} />
            <Route path="category/:categoryId" element={<CategoryScreen />} />
            <Route path="condition/:categoryId/:conditionId" element={<ConditionScreen />} />
            <Route path="checker" element={<SymptomCheckerScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          <div className="md:hidden h-24" />
        </div>
      </main>
      <BottomNav />
      <ThemeToggleMobile />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Públicas */}
      <Route path="/" element={<LandingScreen />} />
      <Route path="/quiz/*" element={<QuizFunnelScreen />} />
      <Route path="/admin/*" element={<AdminScreen />} />
      <Route path="/obrigado" element={<ThankYouScreen />} />
      <Route path="/login" element={<LoginGate />} />
      {/* App autenticado */}
      <Route path="/*" element={<AppShell />} />
    </Routes>
  );
}
