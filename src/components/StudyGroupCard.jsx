// Component 10 — StudyGroupCard

import { useTheme } from '../context/ThemeContext';

export default function StudyGroupCard({ group, onJoin }) {
  const { colors } = useTheme();
  const pct        = Math.round((group.members / group.max) * 100);

  return (
    <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, overflow:'hidden', boxShadow:colors.shadow }}>
      <div style={{ position:'relative', height:148, overflow:'hidden' }}>
        <img src={group.image} alt={group.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(12,21,32,.92) 30%,rgba(12,21,32,.1))' }} />
        <span style={{
          position:'absolute', top:10, right:10,
          background: group.active ? 'rgba(0,201,167,.2)' : 'rgba(61,100,128,.2)',
          color: group.active ? '#00c9a7' : '#7aa5c5',
          border:`1px solid ${group.active ? '#00c9a733' : '#3d648033'}`,
          borderRadius:20, padding:'3px 10px', fontSize:11.5, fontWeight:700,
        }}>
          {group.active ? '● Active' : '○ Paused'}
        </span>
        <div style={{ position:'absolute', bottom:12, left:14 }}>
          <p style={{ color:'#e2f0fb', fontWeight:800, fontSize:15 }}>{group.name}</p>
          <p style={{ color:'#7aa5c5', fontSize:11.5, marginTop:2 }}>{group.subject}</p>
        </div>
      </div>

      <div style={{ padding:'14px 16px' }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:12 }}>
          {group.tags.map(t => (
            <span key={t} style={{ background:'rgba(56,189,248,.12)', color:'#38bdf8', border:'1px solid rgba(56,189,248,.2)', borderRadius:7, padding:'2px 9px', fontSize:11.5, fontFamily:'monospace' }}>{t}</span>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom:12 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
            <span style={{ fontSize:12, color:'#7aa5c5' }}>👥 {group.members}/{group.max}</span>
            <span style={{ fontSize:12, color:'#00c9a7', fontWeight:700 }}>{pct}%</span>
          </div>
          <div style={{ height:4, background:'#1e3048', borderRadius:2 }}>
            <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#00c9a7,#f59e0b)', borderRadius:2 }} />
          </div>
        </div>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <p style={{ fontSize:11.5, color:'#7aa5c5' }}>🕐 {group.schedule}</p>
            <p style={{ fontSize:11, color:'#3d6480', marginTop:2 }}>Host: {group.host}</p>
          </div>
          <button
            disabled={pct >= 100}
            onClick={() => { if (onJoin) onJoin(group.name); }}
            style={{ padding:'6px 14px', background: pct>=100?'#1e3048':'#00c9a7', color: pct>=100?'#7aa5c5':'#0c1520', border:'none', borderRadius:8, fontWeight:700, fontSize:12, cursor: pct>=100?'not-allowed':'pointer' }}
          >{pct >= 100 ? 'Full' : 'Join'}</button>
        </div>
      </div>
    </div>
  );
}