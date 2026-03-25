// Component 4 — SearchBar
// Unit 1.3 — JSX inline styling and attributes
// Unit 1.5 — Functional component with props

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  const { colors }          = useTheme();
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ position:'relative' }}>
      <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:colors.text3, fontSize:15, pointerEvents:'none' }}>
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width:'100%',
          background:colors.bg3,
          border:`1.5px solid ${focused ? '#00c9a7' : colors.border}`,
          borderRadius:12, padding:'11px 16px 11px 42px',
          color:colors.text, fontSize:14, outline:'none',
          transition:'border-color .2s',
          boxShadow: focused ? '0 0 0 3px rgba(0,201,167,.12)' : 'none',
        }}
      />
    </div>
  );
}