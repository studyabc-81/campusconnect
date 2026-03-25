import { useAuth }        from '../context/AuthContext';
import { useTheme }       from '../context/ThemeContext';
import DashboardStats     from '../components/DashboardStats';
import ActivityFeed       from '../components/ActivityFeed';
import MessagePreview     from '../components/MessagePreview';
import Sidebar            from '../components/Sidebar';
import { STUDY_GROUPS, EVENTS } from '../utils/data';

export default function DashboardPage({ route, navigate }) {
  const { user }   = useAuth();
  const { colors } = useTheme();

  if (!user) return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26 }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1, textAlign:'center', padding:'80px 20px' }}>
          <div style={{ fontSize:56, marginBottom:16 }}>🔒</div>
          <h2 style={{ fontWeight:800, fontSize:22, marginBottom:10 }}>Login to access Dashboard</h2>
          <button onClick={() => navigate('/login')} style={{ padding:'12px 28px', background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:10, fontWeight:700, fontSize:15, cursor:'pointer' }}>Login Now</button>
        </main>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26, alignItems:'flex-start' }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:28 }}>
            <img src={user.avatar} alt={user.name} style={{ width:60, height:60, borderRadius:'50%', objectFit:'cover', boxShadow:'0 0 0 3px rgba(0,201,167,.4)' }} />
            <div>
              <h1 style={{ fontWeight:800, fontSize:24 }}>Good evening, {user.name.split(' ')[0]} 👋</h1>
              <p style={{ color:'#7aa5c5', fontSize:14, marginTop:3 }}>{user.major} · {user.year} · {user.college}</p>
            </div>
          </div>

          <DashboardStats />

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginTop:22 }}>
            <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:22 }}>
              <p style={{ fontWeight:800, fontSize:15, marginBottom:16 }}>📡 Activity Feed</p>
              <ActivityFeed />
            </div>
            <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:22 }}>
              <p style={{ fontWeight:800, fontSize:15, marginBottom:16 }}>💬 Messages</p>
              <MessagePreview />
            </div>
            <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:22 }}>
              <p style={{ fontWeight:800, fontSize:15, marginBottom:16 }}>📚 My Groups</p>
              {STUDY_GROUPS.slice(0,3).map(g => (
                <div key={g.id} style={{ display:'flex', gap:10, padding:'10px 0', borderBottom:`1px solid ${colors.border}`, alignItems:'center' }}>
                  <img src={g.image} alt={g.name} style={{ width:44, height:44, borderRadius:10, objectFit:'cover' }} />
                  <div style={{ flex:1 }}>
                    <p style={{ fontWeight:700, fontSize:13.5 }}>{g.name}</p>
                    <p style={{ fontSize:11.5, color:colors.text3 }}>👥 {g.members} · {g.schedule}</p>
                  </div>
                  <span style={{ fontSize:11, color: g.active?'#00c9a7':'#7aa5c5', fontWeight:700 }}>{g.active?'Active':'Paused'}</span>
                </div>
              ))}
            </div>
            <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:22 }}>
              <p style={{ fontWeight:800, fontSize:15, marginBottom:16 }}>🎫 Upcoming Events</p>
              {EVENTS.slice(0,3).map(e => {
                const d = new Date(e.date);
                return (
                  <div key={e.id} style={{ display:'flex', gap:10, padding:'10px 0', borderBottom:`1px solid ${colors.border}`, alignItems:'center' }}>
                    <div style={{ background:'rgba(0,201,167,.18)', color:'#00c9a7', borderRadius:10, padding:'8px 12px', textAlign:'center', minWidth:44 }}>
                      <div style={{ fontWeight:800, fontSize:18, lineHeight:1 }}>{d.getDate()}</div>
                      <div style={{ fontSize:9, textTransform:'uppercase' }}>{d.toLocaleString('en',{month:'short'})}</div>
                    </div>
                    <div style={{ flex:1 }}>
                      <p style={{ fontWeight:700, fontSize:13.5 }}>{e.title}</p>
                      <p style={{ fontSize:11.5, color:colors.text3 }}>📍 {e.venue}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}