// Footer
import { useTheme } from '../context/ThemeContext';

const COLS = [
  { title:'Platform',  links:['Home','Explore','Groups','Events','Q&A']      },
  { title:'Community', links:['About','Blog','Mentors','Newsletter','Forum'] },
  { title:'Support',   links:['Help','Contact','Privacy','Terms','Status']   },
];
const PM = { Home:'/', Explore:'/explore', Groups:'/groups', Events:'/events', 'Q&A':'/questions', About:'/about' };

export default function Footer({ navigate }) {
  const { colors } = useTheme();
  return (
    <footer style={{ background:colors.bg2, borderTop:`1px solid ${colors.border}`, marginTop:80 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'52px 24px 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40, marginBottom:40 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:32, height:32, borderRadius:9, background:'linear-gradient(135deg,#00c9a7,#f59e0b)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>🎓</div>
              <span style={{ fontWeight:800, fontSize:17, background:'linear-gradient(90deg,#00c9a7,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>CampusConnect</span>
            </div>
            <p style={{ fontSize:13.5, color:colors.text2, lineHeight:1.75, maxWidth:270 }}>The smart student community — connecting learners, builders and creators across India's top institutions.</p>
          </div>
          {COLS.map(col => (
            <div key={col.title}>
              <h4 style={{ fontWeight:700, fontSize:13.5, marginBottom:14 }}>{col.title}</h4>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {col.links.map(l => (
                  <span key={l} onClick={() => PM[l] && navigate(PM[l])} style={{ fontSize:13.5, color:colors.text2, cursor:PM[l]?'pointer':'default', transition:'color .15s' }}
                    onMouseEnter={e => e.target.style.color='#00c9a7'}
                    onMouseLeave={e => e.target.style.color=colors.text2}>{l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop:`1px solid ${colors.border}`, paddingTop:22, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
          <p style={{ fontSize:13, color:colors.text3 }}>© 2025 CampusConnect · Built for curious minds</p>
          <p style={{ fontSize:13, color:colors.text3 }}>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}