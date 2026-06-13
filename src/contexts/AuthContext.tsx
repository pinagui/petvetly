import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { verifyAccess } from '../lib/funnelTracking';

interface Pet {
  name: string;
  breed: string;
  age: string;
  weight: string;
  gender: 'male' | 'female';
  avatar: string;
}

interface User {
  email: string;
  name: string;
  pet: Pet | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  updatePet: (pet: Pet) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = 'petvetly_user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch { /* ignore */ }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    // Valida contra a base de compras da Hotmart (somente quem comprou entra)
    const { ok, name } = await verifyAccess(email);
    if (!ok) {
      const err = new Error('no_access') as Error & { code?: string };
      err.code = 'no_access';
      throw err;
    }
    const newUser: User = {
      email,
      name: (name && name !== 'Admin')
        ? name
        : email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      pet: null,
    };
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const updatePet = (pet: Pet) => {
    if (!user) return;
    const updated = { ...user, pet };
    setUser(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, updatePet, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
