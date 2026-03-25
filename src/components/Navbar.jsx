// Navbar — Top navigation
import { useState, useEffect }  from 'react';
import { useTheme }             from '../context/ThemeContext';
import { useAuth }              from '../context/AuthContext';
import NotificationBell         from './NotificationBell';
import Modal                    from './Modal';
import SettingsPanel            from './SettingsPanel';

export const NAV_LINKS = [
  { path:'/',           label:'Home'      },
  { path:'/explore',    label:'Explore'   },
  { path:'/groups',     label:'Groups'    },
  { path:'/events',     label:'Events'    },
  { path:'/questions',  label:'Q&A'       },
  { path:'/dashboard',  label:'Dashboard' },
];

export default function Navbar({ route, navigate }) {
  const { colors, isDark, toggleTheme } = useTheme();
  const { user, logout }               = useAuth();
  const [scrolled,   setScrolled]      = useState(false);
  const [settOpen,   setSettOpen]      = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:500,
        background: scrolled ? (isDark ? 'rgba(12,21,32,.93)' : 'rgba(240,247,255,.93)') : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? `1px solid ${colors.border}` : 'none',
        transition:'all .3s',
      }}>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 22px', height:62, display:'flex', alignItems:'center', justifyContent:'space-between', gap:12 }}>
          {/* Logo */}
          <div onClick={() => navigate('/')} style={{ display:'flex', alignItems:'center', gap:10, cursor:'pointer', flexShrink:0 }}>
            <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#00c9a7,#f59e0b)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, boxShadow:'0 4px 16px rgba(0,201,167,.5)' }}>🎓</div>
            <div>
              <div style={{ fontWeight:800, fontSize:17, background:'linear-gradient(90deg,#00c9a7,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>CampusConnect</div>
              <div style={{ fontSize:9.5, color:colors.text3, letterSpacing:.5 }}>Student Community Platform</div>
            </div>
          </div>

          {/* Links */}
          <div style={{ display:'flex', gap:2 }}>
            {NAV_LINKS.map(l => (
              <span key={l.path} onClick={() => navigate(l.path)} style={{ cursor:'pointer', padding:'6px 13px', borderRadius:9, fontSize:13.5, fontWeight: route===l.path?700:500, color: route===l.path?'#00c9a7':colors.text2, background: route===l.path?'rgba(0,201,167,.12)':'transparent', border:`1px solid ${route===l.path?'rgba(0,201,167,.3)':'transparent'}`, transition:'all .18s' }}>
                {l.label}
              </span>
            ))}
          </div>

          {/* Right */}
          <div style={{ display:'flex', gap:8, alignItems:'center', flexShrink:0 }}>
            <button onClick={toggleTheme} style={{ background:'transparent', border:`1px solid ${colors.border}`, borderRadius:9, width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:15 }}>
              {isDark ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setSettOpen(true)} style={{ background:'transparent', border:`1px solid ${colors.border}`, borderRadius:9, width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:15 }}>
              ⚙️
            </button>
            {user ? (
              <>
                <NotificationBell navigate={navigate} />
                <div onClick={() => navigate('/profile')} style={{ display:'flex', alignItems:'center', gap:8, cursor:'pointer', background:colors.bg3, border:`1px solid ${colors.border}`, borderRadius:10, padding:'5px 12px 5px 6px' }}>
                  <img src={user.avatar} alt={user.name} style={{ width:28, height:28, borderRadius:'50%', objectFit:'cover' }} />
                  <span style={{ fontSize:13, fontWeight:700 }}>{user.name.split(' ')[0]}</span>
                </div>
                <button onClick={() => { logout(); navigate('/login'); }} style={{ padding:'6px 14px', background:'transparent', color:'#fb7185', border:'1.5px solid rgba(251,113,133,.5)', borderRadius:9, fontWeight:700, fontSize:12.5, cursor:'pointer' }}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/login')} style={{ padding:'6px 14px', background:'transparent', color:'#00c9a7', border:'1.5px solid rgba(0,201,167,.5)', borderRadius:9, fontWeight:700, fontSize:13, cursor:'pointer' }}>Login</button>
                <button onClick={() => navigate('/login')} style={{ padding:'6px 14px', background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:9, fontWeight:700, fontSize:13, cursor:'pointer' }}>Join Free</button>
              </>
            )}
          </div>
        </div>
      </nav>
      <Modal open={settOpen} onClose={() => setSettOpen(false)} title="Settings">
        <SettingsPanel onClose={() => setSettOpen(false)} onSave={() => setSettOpen(false)} />
      </Modal>
    </>
  );
}