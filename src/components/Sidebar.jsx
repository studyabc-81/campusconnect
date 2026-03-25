// Sidebar — Left navigation
import { useState }  from 'react';
import { useTheme }  from '../context/ThemeContext';
import { useAuth }   from '../context/AuthContext';
import { NAV_LINKS } from './Navbar';
import Modal         from './Modal';
import SettingsPanel from './SettingsPanel';

const ALL = [
  ...NAV_LINKS,
  { path:'/notifications', label:'Notifications' },
  { path:'/profile',       label:'My Profile'    },
  { path:'/about',         label:'About'         },
];

export default function Sidebar({ route, navigate }) {
  const { colors }           = useTheme();
  const { user }             = useAuth();
  const [settOpen, setS]     = useState(false);

  return (
    <>
      <aside style={{ width:210, flexShrink:0, position:'sticky', top:78, height:'fit-content' }}>
        <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:12, boxShadow:colors.shadow }}>
          {user && (
            <div onClick={() => navigate('/profile')} style={{ padding:'8px 8px 14px', borderBottom:`1px solid ${colors.border}`, marginBottom:8, display:'flex', gap:10, alignItems:'center', cursor:'pointer' }}>
              <div style={{ position:'relative' }}>
                <img src={user.avatar} alt={user.name} style={{ width:38, height:38, borderRadius:'50%', objectFit:'cover', boxShadow:'0 0 0 2px rgba(0,201,167,.4)' }} />
                <span style={{ position:'absolute', bottom:0, right:0, width:10, height:10, borderRadius:'50%', background:'#00c9a7', border:'2px solid #0c1520' }} />
              </div>
              <div style={{ minWidth:0 }}>
                <p style={{ fontWeight:800, fontSize:13, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{user.name}</p>
                <p style={{ fontSize:11, color:colors.text3 }}>{user.major}</p>
              </div>
            </div>
          )}
          {ALL.map(l => (
            <div key={l.path} onClick={() => navigate(l.path)} style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 10px', borderRadius:9, cursor:'pointer', background: route===l.path?'rgba(0,201,167,.12)':'transparent', color: route===l.path?'#00c9a7':colors.text2, fontWeight: route===l.path?700:500, fontSize:13.5, marginBottom:2, transition:'all .15s' }}>
              {l.label}
            </div>
          ))}
          <div style={{ borderTop:`1px solid ${colors.border}`, marginTop:8, paddingTop:8 }}>
            <div onClick={() => setS(true)} style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 10px', borderRadius:9, cursor:'pointer', color:colors.text2, fontSize:13.5 }}>
              ⚙️ Settings
            </div>
          </div>
        </div>
      </aside>
      <Modal open={settOpen} onClose={() => setS(false)} title="Settings">
        <SettingsPanel onClose={() => setS(false)} onSave={() => setS(false)} />
      </Modal>
    </>
  );
}