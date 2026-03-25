
// Faculty Topic — API calling with useEffect + useState

import { useState, useEffect } from 'react';
import { useTheme }   from '../context/ThemeContext';
import { fetchPosts } from '../services/api';

export default function DashboardStats() {
  const { colors }                    = useTheme();
  const [apiCount,  setApiCount]      = useState(0);
  const [apiLoad,   setApiLoad]       = useState(true);


  useEffect(() => {
    fetchPosts()
      .then(data => { setApiCount(data.length); setApiLoad(false); })
      .catch(() => setApiLoad(false));
  }, []);

  const stats = [
    { label:'Study Groups',   value:'4',                              icon:'📚', color:'#00c9a7', sub:'+1 this week'       },
    { label:'Events Joined',  value:'9',                              icon:'🎫', color:'#f59e0b', sub:'3 upcoming'         },
    { label:'Questions',      value:'17',                             icon:'❓', color:'#38bdf8', sub:'8 answered'         },
    { label:'Followers',      value:'347',                            icon:'👥', color:'#e879f9', sub:'+22 this month'     },
    { label:'API Posts',      value: apiLoad ? '...' : String(apiCount), icon:'🌐', color:'#22d3a5', sub:'Live from API'  },
  ];

  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:13 }}>
      {stats.map(s => (
        <div key={s.label} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:14, padding:'18px 16px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:14, right:14, width:34, height:34, borderRadius:10, background:s.color+'18', display:'flex', alignItems:'center', justifyContent:'center', fontSize:17 }}>{s.icon}</div>
          <p style={{ fontSize:11.5, color:colors.text2, marginBottom:4, textTransform:'uppercase', letterSpacing:.5 }}>{s.label}</p>
          <p style={{ fontSize:26, fontWeight:800, color:s.color, lineHeight:1 }}>{s.value}</p>
          <p style={{ fontSize:11, color:colors.text3, marginTop:5 }}>{s.sub}</p>
        </div>
      ))}
    </div>
  );
}