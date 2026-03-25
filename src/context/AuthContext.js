// Auth Context — login, logout, persist user
import { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_USER } from '../utils/data';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser]         = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load saved user on app start — Unit 2.2 useEffect
  useEffect(() => {
    const saved = localStorage.getItem('cc_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    setIsLoading(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setUser(MOCK_USER);
        localStorage.setItem('cc_user', JSON.stringify(MOCK_USER));
        setIsLoading(false);
        resolve(true);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cc_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}