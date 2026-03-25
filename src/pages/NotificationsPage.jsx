import { useTheme }        from '../context/ThemeContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NOTIFICATIONS }   from '../utils/data';
import Sidebar             from '../components/Sidebar';

const TYPE_COLOR = { answer:'#22d3a5', join:'#00c9a7', like:'#fb7185', event:'#f59e0b', follow:'#38bdf8', mention:'#e879f9' };

export default function NotificationsPage({ route, navigate, toast }) {
  const { colors }              = useTheme();
  const [notifs, setNotifs]     = useLocalStorage('cc_notifs', NOTIFICATIONS);
  const unread                  = notifs.filter(n => !n.read).length;

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26, alignItems:'flex-start' }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12, marginBottom:24 }}>
            <div>
              <h1 style={{ fontWeight:800, fontSize:24 }}>Notifications {unread>0 && <span style={{ background:'#fb7185', color:'#fff', borderRadius:'50%', padding:'2px 8px', fontSize:14 }}>{unread}</span>}</h1>
            </div>
            <button onClick={() => { setNotifs(notifs.map(n=>({...n,read:true}))); toast('All marked as read!', 'success'); }} style={{ padding:'8px 16px', background:'transparent', color:'#00c9a7', border:'1.5px solid rgba(0,201,167,.4)', borderRadius:9, fontWeight:700, fontSize:13, cursor:'pointer' }}>Mark all read</button>
          </div>
          <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, overflow:'hidden' }}>
            {notifs.map((n, i) => (
              <div key={n.id} onClick={() => setNotifs(notifs.map(x => x.id===n.id ? {...x,read:true} : x))}
                style={{ display:'flex', gap:14, padding:'16px 22px', borderBottom: i<notifs.length-1 ? `1px solid ${colors.border}` : 'none', background: n.read?'transparent':'rgba(0,201,167,.05)', cursor:'pointer' }}>
                <div style={{ position:'relative', flexShrink:0 }}>
                  <img src={n.avatar} alt="" style={{ width:46, height:46, borderRadius:'50%', objectFit:'cover' }} />
                  <div style={{ position:'absolute', bottom:-2, right:-2, width:18, height:18, borderRadius:'50%', background:TYPE_COLOR[n.type]||'#00c9a7', display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, color:'#0c1520', border:'1.5px solid #0c1520', fontWeight:800 }}>
                    {n.type==='like'?'▲':n.type==='follow'?'◎':n.type==='answer'?'✓':'◆'}
                  </div>
                </div>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:14, lineHeight:1.55, fontWeight: n.read?400:700 }}>{n.msg}</p>
                  <p style={{ fontSize:12, color:colors.text3, marginTop:4 }}>{n.time}</p>
                </div>
                {!n.read && <div style={{ width:8, height:8, borderRadius:'50%', background:'#00c9a7', alignSelf:'center', flexShrink:0 }} />}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}