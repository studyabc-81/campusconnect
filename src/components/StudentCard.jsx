import { useState }   from 'react';
import { useTheme }   from '../context/ThemeContext';
import BookmarkButton from './BookMarkButton';

const SKILL_COLORS = ['#00c9a7','#f59e0b','#e879f9','#38bdf8','#22d3a5'];

export default function StudentCard({ student, navigate, onFollow }) {
  const { colors }    = useTheme();
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={() => navigate && navigate('/profile')}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: colors.card,
        border: `1px solid ${hov ? 'rgba(0,201,167,.4)' : colors.border}`,
        borderRadius: 18, padding: 20,
        display: 'flex', flexDirection: 'column', gap: 14,
        cursor: 'pointer',
        transform: hov ? 'translateY(-3px)' : 'none',
        boxShadow: hov ? colors.shadowHov : colors.shadow,
        transition: 'all .22s',
      }}
    >
      {/* Top row */}
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <div style={{ display:'flex', gap:12, alignItems:'center' }}>
          <img
            src={student.avatar}
            alt={student.name}
            onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${student.name}&background=00c9a7&color=0c1520`; }}
            style={{ width:52, height:52, borderRadius:'50%', objectFit:'cover', border:'2.5px solid rgba(0,201,167,.4)' }}
          />
          <div>
            <p style={{ fontWeight:800, fontSize:15 }}>{student.name}</p>
            <p style={{ fontSize:12.5, color:'#7aa5c5', marginTop:1 }}>{student.major}</p>
            <p style={{ fontSize:11.5, color:'#3d6480', marginTop:1 }}>{student.year} · {student.college}</p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4 }}>
          <span style={{ color:'#f59e0b', fontSize:13, fontWeight:800 }}>★ {student.rating}</span>
          <BookmarkButton id={student.id} type="student" />
        </div>
      </div>

      {/* Skills */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
        {student.skills.map((skill, i) => (
          <span key={skill} style={{
            background: SKILL_COLORS[i % SKILL_COLORS.length] + '14',
            color: SKILL_COLORS[i % SKILL_COLORS.length],
            border: `1px solid ${SKILL_COLORS[i % SKILL_COLORS.length]}2a`,
            borderRadius: 7, padding: '3px 10px', fontSize: 11.5,
            fontFamily: 'monospace',
          }}>
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:10, borderTop:`1px solid ${colors.border}` }}>
        <div style={{ display:'flex', gap:14 }}>
          <span style={{ fontSize:12, color:'#3d6480' }}>👥 {student.followers}</span>
          <span style={{ fontSize:12, color:'#3d6480' }}>📝 {student.posts}</span>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onFollow && onFollow(student.name); }}
          style={{ padding:'5px 14px', background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:8, fontWeight:700, fontSize:12, cursor:'pointer' }}
        >
          + Follow
        </button>
      </div>
    </div>
  );
}