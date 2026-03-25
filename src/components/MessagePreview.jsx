// Component 15 — MessagePreview

import { useTheme } from '../context/ThemeContext';

const MSGS = [
  { id:1, name:'Meghna Pillai',    avatar:'https://i.pravatar.cc/150?img=47', msg:"Can you review the Figma handoff? I've updated tokens.", time:'3m',  unread:2 },
  { id:2, name:'Siddhanth Oberoi', avatar:'https://i.pravatar.cc/150?img=60', msg:'The Go scheduler doc is live on Notion!',               time:'1h',  unread:0 },
  { id:3, name:'Vikram Nandakumar',avatar:'https://i.pravatar.cc/150?img=67', msg:'OSS sprint this weekend — you joining?',                time:'4h',  unread:1 },
];

export default function MessagePreview() {
  const { colors } = useTheme();

  return (
    <div style={{ display:'flex', flexDirection:'column' }}>
      {MSGS.map((m, i) => (
        <div key={m.id} style={{ display:'flex', gap:11, padding:'12px 0', borderBottom: i < MSGS.length-1 ? `1px solid ${colors.border}` : 'none', cursor:'pointer', alignItems:'center' }}>
          <div style={{ position:'relative', flexShrink:0 }}>
            <img src={m.avatar} alt={m.name} style={{ width:42, height:42, borderRadius:'50%', objectFit:'cover' }} />
            <span style={{ position:'absolute', bottom:2, right:2, width:10, height:10, borderRadius:'50%', background:'#00c9a7', border:'2px solid #0c1520' }} />
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'flex', justifyContent:'space-between' }}>
              <span style={{ fontWeight:700, fontSize:14 }}>{m.name}</span>
              <span style={{ fontSize:11, color:colors.text3 }}>{m.time}</span>
            </div>
            <p style={{ fontSize:13, color:colors.text2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', marginTop:2 }}>{m.msg}</p>
          </div>
          {m.unread > 0 && (
            <span style={{ background:'#00c9a7', color:'#0c1520', borderRadius:'50%', width:20, height:20, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:800, flexShrink:0 }}>{m.unread}</span>
          )}
        </div>
      ))}
    </div>
  );
}