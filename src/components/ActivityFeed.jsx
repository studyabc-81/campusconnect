import { useTheme }      from '../context/ThemeContext';
import { ACTIVITY_FEED } from '../utils/data';

export default function ActivityFeed() {
  const { colors } = useTheme();

  return (
    <div style={{ display:'flex', flexDirection:'column' }}>
      {ACTIVITY_FEED.map((item, i) => (
        <div key={item.id} style={{ display:'flex', gap:12, padding:'12px 0', borderBottom: i < ACTIVITY_FEED.length-1 ? `1px solid ${colors.border}` : 'none' }}>
          <div style={{ position:'relative', flexShrink:0 }}>
            <img src={item.avatar} alt={item.user} style={{ width:38, height:38, borderRadius:'50%', objectFit:'cover' }} />
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontSize:13.5 }}>
              <strong>{item.user}</strong>{' '}
              <span style={{ color:colors.text2, fontWeight:400 }}>{item.action}</span>
            </p>
            <p style={{ fontSize:12.5, color:'#00c9a7', marginTop:2 }}>{item.item}</p>
            <p style={{ fontSize:11.5, color:colors.text3, marginTop:3 }}>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}