// Component 13 — ProfileCard
// Unit 1.5 — Functional component displaying props

import { useTheme } from '../context/ThemeContext';

const COLORS = ['#00c9a7','#f59e0b','#e879f9','#38bdf8','#22d3a5'];

export default function ProfileCard({ student, onFollow, onMessage }) {
  const { colors } = useTheme();

  return (
    <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:24, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:14, boxShadow:colors.shadow }}>
      <div style={{ position:'relative' }}>
        <img src={student.avatar} alt={student.name} style={{ width:86, height:86, borderRadius:'50%', objectFit:'cover', boxShadow:'0 0 0 3px rgba(0,201,167,.4)' }} />
        {student.online && <span style={{ position:'absolute', bottom:4, right:4, width:14, height:14, borderRadius:'50%', background:'#00c9a7', border:'2px solid #0c1520' }} />}
      </div>

      <div>
        <p style={{ fontWeight:800, fontSize:17 }}>{student.name}</p>
        <p style={{ color:colors.text2, fontSize:13.5, marginTop:2 }}>{student.major}</p>
        <p style={{ color:colors.text3, fontSize:11.5, marginTop:1 }}>{student.year} · {student.college}</p>
      </div>

      <div style={{ display:'flex', flexWrap:'wrap', gap:6, justifyContent:'center' }}>
        {student.skills.map((skill, i) => (
          <span key={skill} style={{ background:COLORS[i%COLORS.length]+'18', color:COLORS[i%COLORS.length], border:`1px solid ${COLORS[i%COLORS.length]}2a`, borderRadius:7, padding:'3px 10px', fontSize:11.5, fontFamily:'monospace' }}>
            {skill}
          </span>
        ))}
      </div>

      <div style={{ display:'flex', gap:20, borderTop:`1px solid ${colors.border}`, paddingTop:14, width:'100%', justifyContent:'center' }}>
        {[['followers', student.followers], ['following', student.following || 0], ['posts', student.posts]].map(([label, val]) => (
          <div key={label}>
            <div style={{ fontWeight:800, fontSize:16, color:'#00c9a7' }}>{val}</div>
            <div style={{ fontSize:11, color:colors.text3, textTransform:'capitalize' }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ display:'flex', gap:8, width:'100%' }}>
        <button onClick={onFollow} style={{ flex:1, padding:'9px', background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:10, fontWeight:700, fontSize:13.5, cursor:'pointer' }}>Follow</button>
        <button onClick={onMessage} style={{ flex:1, padding:'9px', background:'transparent', color:'#00c9a7', border:'1.5px solid rgba(0,201,167,.5)', borderRadius:10, fontWeight:700, fontSize:13.5, cursor:'pointer' }}>Message</button>
      </div>
    </div>
  );
}