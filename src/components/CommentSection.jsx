import { useState, useEffect } from 'react';
import { useTheme }            from '../context/ThemeContext';
import { useAuth }             from '../context/AuthContext';
import { fetchComments }       from '../services/api';
import Loader                  from './Loader';

export default function CommentSection({ questionId = 1 }) {
  const { colors }                  = useTheme();
  const { user }                    = useAuth();
  const [comments,  setComments]    = useState([]);
  const [text,      setText]        = useState('');
  const [loading,   setLoading]     = useState(true);

  // Unit 2.2 + Faculty API — fetch comments on mount
  useEffect(() => {
    setLoading(true);
    fetchComments(questionId)
      .then(data => {
        setComments(data.slice(0, 3).map(c => ({
          id: c.id,
          author: c.name,
          avatar: `https://i.pravatar.cc/150?img=${c.id + 10}`,
          text: c.body,
          time: `${c.id}h ago`,
        })));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [questionId]);

  const postComment = () => {
    if (!text.trim()) return;
    setComments(prev => [...prev, {
      id: Date.now(),
      author: user?.name || 'Anonymous',
      avatar: user?.avatar || 'https://i.pravatar.cc/150?img=1',
      text,
      time: 'Just now',
    }]);
    setText('');
  };

  if (loading) return <Loader size={28} text="Loading comments..." />;

  return (
    <div style={{ marginTop:22 }}>
      <p style={{ fontWeight:800, fontSize:14, marginBottom:14 }}>💬 {comments.length} Comments</p>

      <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:16 }}>
        {comments.map(c => (
          <div key={c.id} style={{ display:'flex', gap:10 }}>
            <img src={c.avatar} alt={c.author} style={{ width:34, height:34, borderRadius:'50%', objectFit:'cover', flexShrink:0 }} />
            <div style={{ flex:1, background:colors.bg3, borderRadius:12, padding:'11px 14px', border:`1px solid ${colors.border}` }}>
              <div style={{ display:'flex', gap:8, marginBottom:5 }}>
                <span style={{ fontWeight:700, fontSize:13 }}>{c.author}</span>
                <span style={{ color:colors.text3, fontSize:12 }}>{c.time}</span>
              </div>
              <p style={{ fontSize:13.5, lineHeight:1.7, color:colors.text2 }}>{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display:'flex', gap:10 }}>
        <img src={user?.avatar || 'https://i.pravatar.cc/150?img=1'} alt="you" style={{ width:34, height:34, borderRadius:'50%', objectFit:'cover', flexShrink:0 }} />
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && postComment()}
          placeholder="Write a comment… (Enter to post)"
          style={{ flex:1, background:colors.bg3, border:`1.5px solid ${colors.border}`, borderRadius:11, padding:'9px 14px', color:colors.text, fontSize:13.5, outline:'none' }}
        />
        <button onClick={postComment} style={{ padding:'9px 18px', background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:10, fontWeight:700, fontSize:13, cursor:'pointer' }}>Post</button>
      </div>
    </div>
  );
}