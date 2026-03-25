// Component 1 — Loader
// Unit 1.5 — Functional component with props
export default function Loader({ size = 36, text = '' }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12, padding:40 }}>
      <div style={{
        width:size, height:size, borderRadius:'50%',
        border:'3px solid rgba(0,201,167,.2)',
        borderTopColor:'#00c9a7',
        animation:'spin .8s linear infinite',
      }} />
      {text && <p style={{ color:'#7aa5c5', fontSize:14 }}>{text}</p>}
    </div>
  );
}