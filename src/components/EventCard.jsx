// Component 11 — EventCard

import { useTheme }   from '../context/ThemeContext';
import BookmarkButton from './BookMarkButton';

const CAT_COLOR = { Hackathon:'#00c9a7', Workshop:'#38bdf8', Networking:'#f59e0b', Summit:'#e879f9', Contest:'#22d3a5' };

export default function EventCard({ event, onRegister }) {
  const { colors } = useTheme();
  const date       = new Date(event.date);
  const pct        = Math.round((event.attendees / event.max) * 100);
  const catColor   = CAT_COLOR[event.category] || '#00c9a7';

  return (
    <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, overflow:'hidden', display:'flex', flexDirection:'column', boxShadow:colors.shadow }}>
      <div style={{ position:'relative', height:164, overflow:'hidden' }}>
        <img src={event.image} alt={event.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(12,21,32,.9) 40%,rgba(12,21,32,.1))' }} />
        {event.featured && (
          <span style={{ position:'absolute', top:10, left:10, background:'rgba(245,158,11,.2)', color:'#f59e0b', border:'1px solid rgba(245,158,11,.3)', borderRadius:20, padding:'3px 10px', fontSize:11.5, fontWeight:700 }}>
            ◆ Featured
          </span>
        )}
        <div style={{ position:'absolute', top:10, right:10 }}>
          <BookmarkButton id={event.id} type="event" />
        </div>
        
        <div style={{ position:'absolute', bottom:10, left:12, background:'rgba(0,201,167,.15)', backdropFilter:'blur(12px)', border:'1px solid rgba(0,201,167,.25)', borderRadius:10, padding:'7px 12px', textAlign:'center' }}>
          <div style={{ color:'#00c9a7', fontWeight:800, fontSize:20, lineHeight:1 }}>{date.getDate()}</div>
          <div style={{ color:'#7aa5c5', fontSize:9, textTransform:'uppercase', letterSpacing:1 }}>{date.toLocaleString('en',{ month:'short' })}</div>
        </div>
      </div>

      <div style={{ padding:'14px 16px', flex:1, display:'flex', flexDirection:'column', gap:8 }}>
        <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
          <span style={{ background:catColor+'1a', color:catColor, border:`1px solid ${catColor}33`, borderRadius:20, padding:'3px 10px', fontSize:11.5, fontWeight:700 }}>{event.category}</span>
          {event.tags.map(t => <span key={t} style={{ background:'rgba(56,189,248,.12)', color:'#38bdf8', border:'1px solid rgba(56,189,248,.2)', borderRadius:7, padding:'2px 9px', fontSize:11.5, fontFamily:'monospace' }}>{t}</span>)}
        </div>
        <p style={{ fontWeight:800, fontSize:14.5, lineHeight:1.4 }}>{event.title}</p>
        <div>
          <p style={{ fontSize:12, color:'#7aa5c5' }}>📍 {event.venue}</p>
          <p style={{ fontSize:12, color:'#7aa5c5' }}>🕐 {event.time} · 👥 {event.attendees}/{event.max}</p>
          <p style={{ fontSize:11.5, color:'#3d6480' }}>By {event.organizer}</p>
        </div>
        <div style={{ marginTop:'auto', paddingTop:8, display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ flex:1, height:4, background:'#1e3048', borderRadius:2 }}>
            <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#22d3a5,#00c9a7)', borderRadius:2 }} />
          </div>
          <button
            onClick={() => { if (onRegister) onRegister(event.title); }}
            style={{ padding:'6px 14px', background:'#22d3a5', color:'#0c1520', border:'none', borderRadius:8, fontWeight:700, fontSize:12, cursor:'pointer' }}
          >Register</button>
        </div>
      </div>
    </div>
  );
}