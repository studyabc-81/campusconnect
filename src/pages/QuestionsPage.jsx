import { useState }    from 'react';
import { useTheme }    from '../context/ThemeContext';
import { useAuth }     from '../context/AuthContext';
import QuestionCard    from '../components/QuestionCard';
import CommentSection  from '../components/CommentSection';
import SearchBar       from '../components/SearchBar';
import FilterPanel     from '../components/FilterPanel';
import Modal           from '../components/Modal';
import Sidebar         from '../components/Sidebar';
import { QUESTIONS }   from '../utils/data';
import LikeButton      from '../components/LikeButton';

export default function QuestionsPage({ route, navigate, toast }) {
  const { colors }          = useTheme();
  const { user }            = useAuth();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [askOpen,setAskOpen]= useState(false);
  const [selected,setSel]   = useState(null);
  const [form, setForm]     = useState({ title:'', body:'', tags:'' });

  const filtered = QUESTIONS.filter(q => {
    const m = !search || [q.title, ...q.tags].some(x => x.toLowerCase().includes(search.toLowerCase()));
    return m && (filter==='All' || (filter==='Solved'&&q.solved) || (filter==='Open'&&!q.solved));
  });

  const inp = { background:colors.bg3, border:`1.5px solid ${colors.border}`, borderRadius:10, padding:'11px 14px', color:colors.text, fontSize:14, outline:'none', width:'100%' };

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26, alignItems:'flex-start' }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1 }}>
          {selected ? (
            <div>
              <button onClick={() => setSel(null)} style={{ background:'transparent', border:'none', color:'#00c9a7', cursor:'pointer', fontSize:14, fontWeight:700, marginBottom:18 }}>← Back to questions</button>
              <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:18, padding:26, boxShadow:colors.shadow }}>
                <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:10 }}>
                  {selected.solved && <span style={{ background:'rgba(34,211,165,.15)', color:'#22d3a5', borderRadius:20, padding:'2px 10px', fontSize:11.5, fontWeight:700 }}>✓ Solved</span>}
                  {selected.tags.map(t => <span key={t} style={{ background:'rgba(56,189,248,.12)', color:'#38bdf8', borderRadius:7, padding:'2px 9px', fontSize:11.5, fontFamily:'monospace' }}>{t}</span>)}
                </div>
                <h2 style={{ fontWeight:800, fontSize:22, marginBottom:14, lineHeight:1.35 }}>{selected.title}</h2>
                <p style={{ fontSize:15, lineHeight:1.85, color:'#7aa5c5', marginBottom:18 }}>{selected.body}</p>
                <div style={{ display:'flex', alignItems:'center', gap:10, padding:'14px 0', borderTop:`1px solid ${colors.border}`, borderBottom:`1px solid ${colors.border}` }}>
                  <img src={selected.avatar} alt={selected.author} style={{ width:34, height:34, borderRadius:'50%' }} />
                  <div>
                    <p style={{ fontWeight:700, fontSize:14 }}>{selected.author}</p>
                    <p style={{ fontSize:12, color:colors.text3 }}>{selected.time} · 👁 {selected.views} views</p>
                  </div>
                  <LikeButton count={selected.votes} onLike={() => toast('Upvoted!', 'success')} />
                </div>
                <CommentSection questionId={selected.id} />
              </div>
            </div>
          ) : (
            <>
              <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12, marginBottom:24 }}>
                <div>
                  <h1 style={{ fontWeight:800, fontSize:'clamp(1.4rem,3vw,2rem)' }}>Q&A Forum</h1>
                  <p style={{ color:'#7aa5c5', fontSize:14, marginTop:4 }}>Ask questions, get expert answers.</p>
                </div>
                <button onClick={() => user ? setAskOpen(true) : toast('Login first!', 'warning')} style={{ padding:'10px 20px', background:'#38bdf8', color:'#0c1520', border:'none', borderRadius:10, fontWeight:700, fontSize:14, cursor:'pointer' }}>✏ Ask Question</button>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:22 }}>
                <SearchBar value={search} onChange={setSearch} placeholder="Search questions..." />
                <FilterPanel options={['All','Open','Solved']} selected={filter} onSelect={setFilter} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {filtered.map(q => <QuestionCard key={q.id} question={q} onClick={() => setSel(q)} />)}
              </div>
            </>
          )}
        </main>
      </div>
      <Modal open={askOpen} onClose={() => setAskOpen(false)} title="Ask a Question" maxWidth={600}>
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          <div><label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Title</label><input value={form.title} onChange={e => setForm({...form,title:e.target.value})} placeholder="Be specific. What is your problem?" style={inp} /></div>
          <div><label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Details</label><textarea value={form.body} onChange={e => setForm({...form,body:e.target.value})} placeholder="Explain the context, what you tried..." rows={4} style={{ ...inp, resize:'vertical', fontFamily:'inherit' }} /></div>
          <div><label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Tags</label><input value={form.tags} onChange={e => setForm({...form,tags:e.target.value})} placeholder="Go, ML, React..." style={inp} /></div>
          <button onClick={() => { toast('Question posted!', 'success'); setAskOpen(false); setForm({title:'',body:'',tags:''}); }} style={{ padding:'12px', background:'#38bdf8', color:'#0c1520', border:'none', borderRadius:10, fontWeight:800, fontSize:14, cursor:'pointer' }}>Post Question</button>
        </div>
      </Modal>
    </div>
  );
}