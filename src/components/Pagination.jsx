// Component 7 — Pagination
// Unit 1.5 — Props: currentPage, totalPages, onPageChange

import { useTheme } from '../context/ThemeContext';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const { colors } = useTheme();
  if (totalPages <= 1) return null;

  return (
    <div style={{ display:'flex', gap:6, justifyContent:'center', marginTop:28 }}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{ padding:'7px 15px', borderRadius:9, border:`1px solid ${colors.border}`, background:'transparent', color: currentPage===1 ? colors.text3 : colors.text, cursor: currentPage===1?'not-allowed':'pointer', fontSize:13 }}
      >← Prev</button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <button key={p} onClick={() => onPageChange(p)} style={{
          width:36, height:36, borderRadius:9,
          border:`1px solid ${p === currentPage ? '#00c9a7' : colors.border}`,
          background: p === currentPage ? '#00c9a7' : 'transparent',
          color: p === currentPage ? '#0c1520' : colors.text,
          fontWeight: p === currentPage ? 800 : 400,
          fontSize:13, cursor:'pointer', transition:'all .15s',
        }}>{p}</button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ padding:'7px 15px', borderRadius:9, border:`1px solid ${colors.border}`, background:'transparent', color: currentPage===totalPages?colors.text3:colors.text, cursor: currentPage===totalPages?'not-allowed':'pointer', fontSize:13 }}
      >Next →</button>
    </div>
  );
}