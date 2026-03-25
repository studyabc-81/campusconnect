// Component 12 — QuestionCard

import { useTheme } from '../context/ThemeContext';
import LikeButton   from './LikeButton';

export default function QuestionCard({ question, onClick }) {
  const { colors } = useTheme();

  return (
    <div
      onClick={onClick}
      style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:20, cursor:onClick?'pointer':'default', boxShadow:colors.shadow }}
    >
      <div style={{ display:'flex', gap:16 }}>
        {/* Vote column */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, minWidth:54, flexShrink:0 }}>
          <div style={{ background: question.votes>80?'rgba(0,201,167,.12)':'#162335', color: question.votes>80?'#00c9a7':'#7aa5c5', borderRadius:9, padding:'7px 10px', textAlign:'center', border:`1px solid ${question.votes>80?'rgba(0,201,167,.25)':'#1e3048'}` }}>
            <div style={{ fontWeight:800, fontSize:16 }}>{question.votes}</div>
            <div style={{ fontSize:9, textTransform:'uppercase' }}>votes</div>
          </div>
          <div style={{ background: question.solved?'rgba(34,211,165,.12)':'#162335', color: question.solved?'#22d3a5':'#7aa5c5', borderRadius:9, padding:'5px 8px', textAlign:'center', border:`1px solid ${question.solved?'rgba(34,211,165,.25)':'#1e3048'}` }}>
            <div style={{ fontWeight:700, fontSize:14 }}>{question.answers}</div>
            <div style={{ fontSize:9, textTransform:'uppercase' }}>ans</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:8 }}>
            {question.solved && <span style={{ background:'rgba(34,211,165,.15)', color:'#22d3a5', border:'1px solid rgba(34,211,165,.3)', borderRadius:20, padding:'2px 10px', fontSize:11.5, fontWeight:700 }}>✓ Solved</span>}
            {question.tags.map(t => <span key={t} style={{ background:'rgba(56,189,248,.12)', color:'#38bdf8', border:'1px solid rgba(56,189,248,.2)', borderRadius:7, padding:'2px 9px', fontSize:11.5, fontFamily:'monospace' }}>{t}</span>)}
          </div>
          <p style={{ fontWeight:800, fontSize:15, marginBottom:6, lineHeight:1.4 }}>{question.title}</p>
          <p style={{ fontSize:13.5, color:'#7aa5c5', lineHeight:1.7, marginBottom:10 }}>{question.body}</p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <img src={question.avatar} alt={question.author} style={{ width:26, height:26, borderRadius:'50%', objectFit:'cover' }} />
              <span style={{ fontSize:12.5, color:'#3d6480' }}>{question.author} · {question.time}</span>
              <span style={{ fontSize:12, color:'#3d6480' }}>👁 {question.views}</span>
            </div>
            <LikeButton count={question.votes} />
          </div>
        </div>
      </div>
    </div>
  );
}