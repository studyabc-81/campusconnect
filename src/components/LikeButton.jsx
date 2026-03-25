// Component 2 — LikeButton
// Unit 2.1 — useState hook

import { useState } from 'react';

export default function LikeButton({ count = 0, onLike }) {
  // Unit 2.1 — useState
  const [liked, setLiked] = useState(false);
  const [total, setTotal] = useState(count);

  const handleClick = (e) => {
    e.stopPropagation();
    setLiked(prev => !prev);
    setTotal(prev => liked ? prev - 1 : prev + 1);
    if (onLike) onLike();
  };

  return (
    <button onClick={handleClick} style={{
      display:'inline-flex', alignItems:'center', gap:5,
      background: liked ? 'rgba(251,113,133,.15)' : 'transparent',
      border:`1.5px solid ${liked ? '#fb7185' : '#1e3048'}`,
      borderRadius:8, padding:'5px 10px', cursor:'pointer',
      color: liked ? '#fb7185' : '#7aa5c5',
      fontSize:13, fontWeight:700, transition:'all .2s',
    }}>
      {liked ? '▲' : '△'} {total}
    </button>
  );
}