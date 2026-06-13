import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';

/* Lazy: cada tela vira um chunk separado. As telas internas do app
   (Home/Category/Condition/Profile) carregam os 100 arquivos de dados —
   por isso NÃO podem entrar no bundle inicial de /quiz e / (tráfego pago). */
const LandingScreen = lazy(() => import('./screens/LandingScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
const ThankYouScreen = lazy(() => import('./screens/ThankYouScreen'));
const OnboardingScreen = lazy(() => import('./screens/OnboardingScreen'));
const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const CategoryScreen = lazy(() => import('./screens/CategoryScreen'));
const ConditionScreen = lazy(() => import('./screens/ConditionScreen'));
const SymptomCheckerScreen = lazy(() => import('./screens/SymptomCheckerScreen'));
const QuizFunnelScreen = lazy(() => import('./screens/QuizFunnelScreen'));
const AdminScreen = lazy(() => import('./screens/AdminScreen'));
const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));

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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="home" element={<HomeScreen />} />
              <Route path="category/:categoryId" element={<CategoryScreen />} />
              <Route path="condition/:categoryId/:conditionId" element={<ConditionScreen />} />
              <Route path="checker" element={<SymptomCheckerScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Suspense>
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
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}
