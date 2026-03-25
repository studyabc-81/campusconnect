
// Unit 1.5 — Props: options, selected, onSelect

import { useTheme } from '../context/ThemeContext';

export default function FilterPanel({ options, selected, onSelect, label = 'Filter' }) {
  const { colors } = useTheme();

  return (
    <div>
      <p style={{ fontSize:12, color:colors.text3, marginBottom:8, fontWeight:700, textTransform:'uppercase', letterSpacing:.5 }}>
        {label}
      </p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
        {options.map(opt => (
          <button key={opt} onClick={() => onSelect(opt)} style={{
            padding:'6px 16px', borderRadius:20,
            border:`1.5px solid ${selected === opt ? '#00c9a7' : colors.border}`,
            background: selected === opt ? 'rgba(0,201,167,.15)' : 'transparent',
            color: selected === opt ? '#00c9a7' : colors.text2,
            fontSize:13, fontWeight: selected === opt ? 700 : 500,
            cursor:'pointer', transition:'all .18s',
          }}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}