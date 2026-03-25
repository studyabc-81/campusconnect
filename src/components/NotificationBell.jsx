// Component 14 — NotificationBell
// Unit 2.1 — useState for open/close

import { useState }        from 'react';
import { useTheme }        from '../context/ThemeContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NOTIFICATIONS }   from '../utils/data';

export default function NotificationBell({ navigate }) {
  const { colors }              = useTheme();
  const [isOpen, setIsOpen]     = useState(false);
  const [notifs, setNotifs]     = useLocalStorage('cc_notifs', NOTIFICATIONS);
  const unread                  = notifs.filter(n => !n.read).length;

  const markAllRead = () => setNotifs(notifs.map(n => ({ ...n, read:true })));

  return (
    <div style={{ position:'relative' }}>
      <button
        onClick={() => setIsOpen(o => !o)}
        style={{ position:'relative', background:'transparent', border:`1px solid ${colors.border}`, borderRadius:10, width:38, height:38, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:17 }}
      >
        🔔
        {unread > 0 && (
          <span style={{ position:'absolute', top:-3, right:-3, background:'#fb7185', color:'#fff', borderRadius:'50%', width:17, height:17, fontSize:10, fontWeight:800, display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid #0c1520' }}>
            {unread}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} style={{ position:'fixed', inset:0, zIndex:99 }} />
          <div style={{ position:'absolute', right:0, top:46, width:340, background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, boxShadow:'0 12px 48px rgba(0,0,0,.5)', zIndex:100, overflow:'hidden' }}>
            <div style={{ display:'flex', justifyContent:'space-between', padding:'14px 18px', borderBottom:`1px solid ${colors.border}` }}>
              <span style={{ fontWeight:800, fontSize:15 }}>Notifications</span>
              <button onClick={markAllRead} style={{ background:'transparent', border:'none', color:'#00c9a7', fontSize:12.5, cursor:'pointer', fontWeight:700 }}>Mark all read</button>
            </div>
            <div style={{ maxHeight:300, overflowY:'auto' }}>
              {notifs.map(n => (
                <div key={n.id} style={{ display:'flex', gap:10, padding:'12px 18px', borderBottom:`1px solid ${colors.border}`, background: n.read?'transparent':'rgba(0,201,167,.05)' }}>
                  <img src={n.avatar} alt="" style={{ width:38, height:38, borderRadius:'50%', objectFit:'cover', flexShrink:0 }} />
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:13, lineHeight:1.5, fontWeight: n.read?400:600 }}>{n.msg}</p>
                    <p style={{ fontSize:11.5, color:colors.text3, marginTop:3 }}>{n.time}</p>
                  </div>
                  {!n.read && <div style={{ width:7, height:7, borderRadius:'50%', background:'#00c9a7', alignSelf:'center', flexShrink:0 }} />}
                </div>
              ))}
            </div>
            <div style={{ padding:'12px 18px', borderTop:`1px solid ${colors.border}` }}>
              <button onClick={() => { navigate('/notifications'); setIsOpen(false); }} style={{ width:'100%', background:'transparent', border:'none', color:'#00c9a7', fontSize:13.5, cursor:'pointer', fontWeight:700 }}>View all →</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}