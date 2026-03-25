
// Unit 1.5 — Functional component with props (icon, title, desc, color)

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function FeatureCard({ icon, title, desc, color }) {
  const { colors }      = useTheme();
  const [hov, setHov]   = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:colors.card,
        border:`1px solid ${hov ? color+'55' : colors.border}`,
        borderRadius:18, padding:28, transition:'all .25s',
        boxShadow: hov ? `0 8px 36px ${color}22` : colors.shadow,
      }}
    >
      <div style={{ width:52, height:52, borderRadius:14, background:color+'1a', display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:18, border:`1px solid ${color}2a` }}>
        {icon}
      </div>
      <h3 style={{ fontWeight:700, fontSize:16, marginBottom:8 }}>{title}</h3>
      <p style={{ fontSize:13.5, color:colors.text2, lineHeight:1.75 }}>{desc}</p>
    </div>
  );
}