// Component 6 — Modal
// Unit 2.2 — useEffect to lock scroll

import { useEffect } from 'react';
import { useTheme }  from '../context/ThemeContext';

export default function Modal({ open, onClose, title, children, maxWidth = 520 }) {
  const { colors } = useTheme();

  // Unit 2.2 — useEffect side effect
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, background:'rgba(6,10,22,.78)',
      display:'flex', alignItems:'center', justifyContent:'center',
      zIndex:1000, padding:20, backdropFilter:'blur(6px)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:colors.card, borderRadius:20,
        width:'100%', maxWidth,
        boxShadow:'0 24px 80px rgba(0,0,0,.6)',
        border:'1px solid rgba(0,201,167,.15)',
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 24px 0' }}>
          <h3 style={{ fontSize:18, fontWeight:700 }}>{title}</h3>
          <button onClick={onClose} style={{ background:'transparent', border:'none', fontSize:20, cursor:'pointer', color:'#3d6480' }}>✕</button>
        </div>
        <div style={{ padding:'18px 24px 26px' }}>{children}</div>
      </div>
    </div>
  );
}