/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// App.js — Main file
// Faculty Topics: React Router, useContext, API calling

// App.js — Main file
// Faculty Topics: React Router, useContext, API calling

import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider }  from './context/AuthContext';

// Pages
import HomePage          from './pages/HomePage';
import ExplorePage       from './pages/ExplorePage';
import StudyGroupsPage   from './pages/StudyGroupsPage';
import EventsPage        from './pages/EventsPage';
import QuestionsPage     from './pages/QuestionsPage';
import DashboardPage     from './pages/DashboardPage';
import ProfilePage       from './pages/ProfilePage';
import LoginPage         from './pages/LoginPage';
import NotificationsPage from './pages/NotificationsPage';
import AboutPage         from './pages/AboutPage';

// Layout
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

// ── Toast context (global notifications)
export const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const toast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500);
  }, []);
  const COLORS = { success:'#00c9a7', error:'#fb7185', info:'#38bdf8', warning:'#f59e0b' };
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div style={{ position:'fixed', bottom:24, right:24, zIndex:9999, display:'flex', flexDirection:'column', gap:8 }}>
        {toasts.map(t => (
          <div key={t.id} style={{ display:'flex', alignItems:'center', gap:10, background:COLORS[t.type], color:'#0c1520', borderRadius:12, padding:'12px 20px', boxShadow:`0 4px 24px ${COLORS[t.type]}55`, animation:'toastIn .4s ease both', fontSize:14, fontWeight:700, minWidth:240 }}>
            {t.type==='success'?'✦':t.type==='error'?'✕':t.type==='info'?'◈':'⚠'} {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// ── Hash Router (Faculty topic — React Router)
function useHashRouter() {
  const get = () => window.location.hash.slice(1) || '/';
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const h = () => setRoute(get());
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  const navigate = (path) => { window.location.hash = path; };
  return { route, navigate };
}

// ── Inject fonts + global CSS
function setupGlobals() {
  if (document.getElementById('cc-fonts')) return;
  const link = document.createElement('link');
  link.id = 'cc-fonts'; link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap';
  document.head.appendChild(link);
  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Outfit', sans-serif; }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-thumb { background: #00c9a7; border-radius: 3px; }
    @keyframes fadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
    @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
    @keyframes spin    { to{transform:rotate(360deg)} }
    @keyframes toastIn { from{transform:translateX(120%);opacity:0} to{transform:none;opacity:1} }
    input, textarea, button, select { font-family: 'Outfit', sans-serif; }
  `;
  document.head.appendChild(style);
}

// ── All pages mapped to routes
function AppContent() {
  const { route, navigate } = useHashRouter();
  const { toast }           = useToast();

  useEffect(() => { window.scrollTo(0,0); }, [route]);

  const props = { route, navigate, toast };

  const pages = {
    '/':             <HomePage          {...props} />,
    '/explore':      <ExplorePage       {...props} />,
    '/groups':       <StudyGroupsPage   {...props} />,
    '/events':       <EventsPage        {...props} />,
    '/questions':    <QuestionsPage     {...props} />,
    '/dashboard':    <DashboardPage     {...props} />,
    '/profile':      <ProfilePage       {...props} />,
    '/login':        <LoginPage         {...props} />,
    '/notifications':<NotificationsPage {...props} />,
    '/about':        <AboutPage         {...props} />,
  };

  return (
    <>
      <Navbar route={route} navigate={navigate} />
      {pages[route] || <HomePage {...props} />}
      <Footer navigate={navigate} />
    </>
  );
}

export default function App() {
  useEffect(() => { setupGlobals(); }, []);
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}