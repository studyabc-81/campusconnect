import { useState }    from 'react';
import { useAuth }     from '../context/AuthContext';
import { useTheme }    from '../context/ThemeContext';
import QuestionCard    from '../components/QuestionCard';
import StudyGroupCard  from '../components/StudyGroupCard';
import EventCard       from '../components/EventCard';
import Sidebar         from '../components/Sidebar';
import { STUDENTS, QUESTIONS, STUDY_GROUPS, EVENTS } from '../utils/data';

const COLORS = ['#00c9a7','#f59e0b','#e879f9','#38bdf8','#22d3a5'];

export default function ProfilePage({ route, navigate, toast }) {
  const { user }      = useAuth();
  const { colors }    = useTheme();
  const [tab, setTab] = useState('posts');
  const pu            = user || STUDENTS[0];

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26, alignItems:'flex-start' }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1 }}>
          {/* Cover + Profile */}
          <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, overflow:'hidden', marginBottom:22 }}>
            <div style={{ height:160, background:'linear-gradient(135deg,rgba(0,201,167,.25),rgba(245,158,11,.15))', position:'relative' }}>
              <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(0,201,167,.1) 1px,transparent 1px)', backgroundSize:'20px 20px' }} />
            </div>
            <div style={{ padding:'0 28px 26px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:-46, flexWrap:'wrap', gap:12 }}>
                <img src={pu.avatar} alt={pu.name} style={{ width:88, height:88, borderRadius:'50%', border:`4px solid ${colors.card}`, objectFit:'cover', boxShadow:'0 0 0 3px rgba(0,201,167,.5)' }} />
                <div style={{ display:'flex', gap:10, paddingTop:44 }}>
                  <button onClick={() => toast('Message sent!', 'info')} style={{ padding:'8px 16px', background:'transparent', color:'#00c9a7', border:'1.5px solid rgba(0,201,167,.5)', borderRadius:9, fontWeight:700, fontSize:13, cursor:'pointer' }}>Message</button>
                  <button onClick={() => toast('Following!', 'success')} style={{ padding:'8px 16px', background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:9, fontWeight:700, fontSize:13, cursor:'pointer' }}>+ Follow</button>
                </div>
              </div>
              <div style={{ marginTop:14 }}>
                <h1 style={{ fontWeight:800, fontSize:24 }}>{pu.name}</h1>
                <p style={{ color:colors.text2, fontSize:14, marginTop:4 }}>{pu.major} · {pu.year} · {pu.college}</p>
                <p style={{ color:colors.text2, fontSize:14, marginTop:10, lineHeight:1.75, maxWidth:580 }}>{pu.bio}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:12 }}>
                  {pu.skills.map((s,i) => <span key={s} style={{ background:COLORS[i%COLORS.length]+'18', color:COLORS[i%COLORS.length], border:`1px solid ${COLORS[i%COLORS.length]}2a`, borderRadius:7, padding:'3px 10px', fontSize:11.5, fontFamily:'monospace' }}>{s}</span>)}
                </div>
              </div>
              <div style={{ display:'flex', gap:28, marginTop:18, paddingTop:18, borderTop:`1px solid ${colors.border}` }}>
                {[['followers',pu.followers],['following',pu.following||192],['posts',pu.posts],['rating',pu.rating]].map(([l,v]) => (
                  <div key={l}><div style={{ fontWeight:800, fontSize:20, color:'#00c9a7' }}>{v}</div><div style={{ fontSize:12, color:colors.text3, textTransform:'capitalize' }}>{l}</div></div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display:'flex', gap:4, borderBottom:`1px solid ${colors.border}`, marginBottom:20 }}>
            {[['posts','📝 Posts'],['groups','📚 Groups'],['events','🎫 Events']].map(([key,label]) => (
              <button key={key} onClick={() => setTab(key)} style={{ padding:'10px 18px', background:'transparent', border:'none', cursor:'pointer', fontWeight:tab===key?700:500, fontSize:14, color:tab===key?'#00c9a7':colors.text2, borderBottom:`2.5px solid ${tab===key?'#00c9a7':'transparent'}`, marginBottom:-1, transition:'all .18s' }}>{label}</button>
            ))}
          </div>

          {tab==='posts'  && <div style={{ display:'flex', flexDirection:'column', gap:12 }}>{QUESTIONS.slice(0,3).map(q => <QuestionCard key={q.id} question={q} />)}</div>}
          {tab==='groups' && <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:16 }}>{STUDY_GROUPS.slice(0,3).map(g => <StudyGroupCard key={g.id} group={g} />)}</div>}
          {tab==='events' && <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(285px,1fr))', gap:16 }}>{EVENTS.slice(0,3).map(e => <EventCard key={e.id} event={e} />)}</div>}
        </main>
      </div>
    </div>
  );
}