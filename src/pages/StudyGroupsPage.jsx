import { useState }     from 'react';
import { useTheme }     from '../context/ThemeContext';
import StudyGroupCard   from '../components/StudyGroupCard';
import SearchBar        from '../components/SearchBar';
import FilterPanel      from '../components/FilterPanel';
import Modal            from '../components/Modal';
import Sidebar          from '../components/Sidebar';
import { STUDY_GROUPS } from '../utils/data';

export default function StudyGroupsPage({ route, navigate, toast }) {
  const { colors }          = useTheme();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [open,   setOpen]   = useState(false);
  const [form,   setForm]   = useState({ name:'', subject:'', tags:'' });

  const filtered = STUDY_GROUPS.filter(g => {
    const m = !search || [g.name, g.subject, ...g.tags].some(x => x.toLowerCase().includes(search.toLowerCase()));
    return m && (filter==='All' || (filter==='Active'&&g.active) || (filter==='Paused'&&!g.active));
  });

  const inp = { background:colors.bg3, border:`1.5px solid ${colors.border}`, borderRadius:10, padding:'11px 14px', color:colors.text, fontSize:14, outline:'none', width:'100%' };

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26, alignItems:'flex-start' }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12, marginBottom:24 }}>
            <div>
              <h1 style={{ fontWeight:800, fontSize:'clamp(1.4rem,3vw,2rem)' }}>Study Groups</h1>
              <p style={{ color:'#7aa5c5', fontSize:14, marginTop:4 }}>Structured groups. Real accountability. Faster growth.</p>
            </div>
            <button onClick={() => setOpen(true)} style={{ padding:'10px 20px', background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:10, fontWeight:700, fontSize:14, cursor:'pointer' }}>+ Create Group</button>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:22 }}>
            <SearchBar value={search} onChange={setSearch} placeholder="Search groups..." />
            <FilterPanel options={['All','Active','Paused']} selected={filter} onSelect={setFilter} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:16 }}>
            {filtered.map(g => <StudyGroupCard key={g.id} group={g} onJoin={n => toast(`Joined "${n}"!`, 'success')} />)}
          </div>
        </main>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Create Study Group">
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          <div><label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Group Name</label><input value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="e.g. Distributed Systems Deep Dive" style={inp} /></div>
          <div><label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Subject</label><input value={form.subject} onChange={e => setForm({...form,subject:e.target.value})} placeholder="e.g. Consensus Algorithms" style={inp} /></div>
          <div><label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Tags (comma separated)</label><input value={form.tags} onChange={e => setForm({...form,tags:e.target.value})} placeholder="Algorithms, Go, Research" style={inp} /></div>
          <button onClick={() => { toast(`"${form.name}" created!`, 'success'); setOpen(false); setForm({name:'',subject:'',tags:''}); }} style={{ padding:'12px', background:'linear-gradient(135deg,#00c9a7,#f59e0b)', color:'#0c1520', border:'none', borderRadius:10, fontWeight:800, fontSize:14, cursor:'pointer' }}>Create Group</button>
        </div>
      </Modal>
    </div>
  );
}