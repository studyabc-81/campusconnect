import { useTheme } from '../context/ThemeContext';

const TEAM = [
  { name:'Ishaan Kapoor',      role:'Founder & Lead Engineer', avatar:'https://i.pravatar.cc/150?img=65', college:'IIIT Hyderabad' },
  { name:'Meghna Pillai',      role:'Head of Design',          avatar:'https://i.pravatar.cc/150?img=47', college:'NID Ahmedabad'  },
  { name:'Siddhanth Oberoi',   role:'Infrastructure Engineer', avatar:'https://i.pravatar.cc/150?img=60', college:'IIT Kharagpur'  },
  { name:'Tanvi Krishnaswamy', role:'Research & Partnerships', avatar:'https://i.pravatar.cc/150?img=44', college:'IISc Bangalore' },
];

export default function AboutPage({ navigate }) {
  const { colors } = useTheme();
  return (
    <div>
      {/* Hero */}
      <div style={{ textAlign:'center', padding:'100px 24px 60px', background:'radial-gradient(ellipse 70% 55% at 50% 0%,rgba(0,201,167,.1) 0%,transparent 60%)' }}>
        <h1 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:800, marginBottom:16, lineHeight:1.1 }}>
          Not just a platform.<br />
          <span style={{ background:'linear-gradient(120deg,#00c9a7,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>A movement.</span>
        </h1>
        <p style={{ maxWidth:560, margin:'0 auto 36px', color:'#7aa5c5', fontSize:17, lineHeight:1.85 }}>
          CampusConnect started as a side-project in a hostel room. Today it's where India's most ambitious students find each other.
        </p>
        <button onClick={() => navigate('/login')} style={{ padding:'13px 30px', background:'linear-gradient(135deg,#00c9a7,#f59e0b)', color:'#0c1520', border:'none', borderRadius:12, fontWeight:800, fontSize:16, cursor:'pointer' }}>
          Join the Movement
        </button>
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px 80px' }}>
        {/* Mission */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center', marginBottom:72 }}>
          <div>
            <h2 style={{ fontWeight:800, fontSize:26, marginBottom:16, lineHeight:1.3 }}>Every student deserves an exceptional peer network</h2>
            <p style={{ color:'#7aa5c5', fontSize:15, lineHeight:1.85, marginBottom:14 }}>IIT and IISc students have incredible networks. But what about the brilliant engineer at a tier-3 college with no connections? CampusConnect levels that playing field.</p>
            <p style={{ color:'#7aa5c5', fontSize:15, lineHeight:1.85 }}>We connect talent with talent — regardless of institution, background, or network size.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            {[['🤝','Community First','Students help students'],['🚀','Zero Gatekeeping','Free for everyone'],['🔒','Privacy First','Your data stays yours'],['✦','Research-Grade','Built on evidence']].map(([icon,title,sub]) => (
              <div key={title} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:14, padding:18 }}>
                <div style={{ fontSize:22, marginBottom:8 }}>{icon}</div>
                <p style={{ fontWeight:700, fontSize:14, marginBottom:4 }}>{title}</p>
                <p style={{ fontSize:12, color:'#7aa5c5' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <h2 style={{ fontWeight:800, fontSize:'clamp(1.4rem,3vw,2rem)', marginBottom:24 }}>Meet the Team</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16, marginBottom:56 }}>
          {TEAM.map(m => (
            <div key={m.name} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:24, textAlign:'center' }}>
              <img src={m.avatar} alt={m.name} style={{ width:72, height:72, borderRadius:'50%', objectFit:'cover', margin:'0 auto 12px', boxShadow:'0 0 0 3px rgba(0,201,167,.4)' }} />
              <p style={{ fontWeight:800, fontSize:15 }}>{m.name}</p>
              <p style={{ color:'#7aa5c5', fontSize:13, marginTop:3 }}>{m.role}</p>
              <p style={{ color:'#3d6480', fontSize:12, marginTop:2 }}>{m.college}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <h2 style={{ fontWeight:800, fontSize:'clamp(1.2rem,2vw,1.6rem)', marginBottom:16 }}>Tech Stack</h2>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
          {[['React 18','#00c9a7'],['useState','#f59e0b'],['useEffect','#e879f9'],['useContext','#38bdf8'],['Custom Hooks','#22d3a5'],['Fetch API','#fb923c'],['localStorage','#00c9a7'],['Hash Router','#f59e0b']].map(([n,c]) => (
            <div key={n} style={{ background:c+'14', border:`1px solid ${c}2a`, borderRadius:10, padding:'8px 16px', fontSize:13.5, color:c, fontWeight:600 }}>{n}</div>
          ))}
        </div>
      </div>
    </div>
  );
}