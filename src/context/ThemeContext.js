// Unit 2.3 — useContext theme switcher
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const DARK = {
  bg:'#0c1520', bg2:'#0f1e2e', bg3:'#162335', bg4:'#1e3048',
  card:'#111d2e', border:'#1e3048',
  text:'#e2f0fb', text2:'#7aa5c5', text3:'#3d6480',
  shadow:'0 2px 8px rgba(0,0,0,.5)',
  shadowHov:'0 6px 28px rgba(0,201,167,.18)',
};
const LIGHT = {
  bg:'#f0f7ff', bg2:'#ffffff', bg3:'#e8f2fb', bg4:'#d4e8f7',
  card:'#ffffff', border:'#c8dff0',
  text:'#0c1f35', text2:'#3a6180', text3:'#7aa5c5',
  shadow:'0 1px 4px rgba(12,32,53,.08)',
  shadowHov:'0 6px 28px rgba(0,201,167,.2)',
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const colors = isDark ? DARK : LIGHT;
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      <div style={{
        background: colors.bg, color: colors.text,
        minHeight: '100vh',
        transition: 'background .3s, color .3s',
        fontFamily: "'Outfit', sans-serif",
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}