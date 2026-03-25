// Unit 2.2 — useEffect API call + Unit 2.1 useState
import { useState, useEffect, useMemo } from 'react';
import { useTheme }    from '../context/ThemeContext';
import { useDebounce } from '../hooks/useDebounce';
import { fetchUsers }  from '../services/api';
import StudentCard     from '../components/StudentCard';
import SearchBar       from '../components/SearchBar';
import FilterPanel     from '../components/FilterPanel';
import Pagination      from '../components/Pagination';
import Loader          from '../components/Loader';
import Sidebar         from '../components/Sidebar';
import { STUDENTS }    from '../utils/data';

const PER = 6;

export default function ExplorePage({ route, navigate, toast }) {
  const { colors }                = useTheme();
  const [search,  setSearch]      = useState('');
  const [filter,  setFilter]      = useState('All');
  const [page,    setPage]        = useState(1);
  const [apiUsers,setApiUsers]    = useState([]);
  const [apiLoad, setApiLoad]     = useState(true);
  const dq                        = useDebounce(search, 350);
  const majors                    = ['All', ...new Set(STUDENTS.map(s => s.major))];

  // Unit 2.2 — useEffect API call
  useEffect(() => {
    fetchUsers()
      .then(d => { setApiUsers(d); setApiLoad(false); })
      .catch(() => setApiLoad(false));
  }, []);

  const filtered = useMemo(() => STUDENTS.filter(s => {
    const m = !dq || [s.name, s.major, s.college, ...s.skills].some(x => x.toLowerCase().includes(dq.toLowerCase()));
    return m && (filter === 'All' || s.major === filter);
  }), [dq, filter]);

  const totalPages = Math.ceil(filtered.length / PER);
  const paged      = filtered.slice((page-1)*PER, page*PER);

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26, alignItems:'flex-start' }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1, minWidth:0 }}>
          <div style={{ marginBottom:24 }}>
            <h1 style={{ fontWeight:800, fontSize:'clamp(1.5rem,3vw,2rem)' }}>Explore Students</h1>
            <p style={{ color:'#7aa5c5', fontSize:14, marginTop:4 }}>Discover researchers, builders and designers from India's best institutions.</p>
          </div>

          {/* Live API users preview */}
          <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:14, padding:16, marginBottom:20 }}>
            <p style={{ fontWeight:700, fontSize:13, marginBottom:10, color:'#00c9a7' }}>🌐 Live from API (JSONPlaceholder)</p>
            {apiLoad ? <Loader size={22} text="Fetching users..." /> : (
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                {apiUsers.slice(0,5).map(u => (
                  <div key={u.id} style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <img src={`https://i.pravatar.cc/150?img=${u.id+10}`} alt={u.name} style={{ width:28, height:28, borderRadius:'50%' }} />
                    <span style={{ fontSize:12, color:colors.text2 }}>{u.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:22 }}>
            <SearchBar value={search} onChange={setSearch} placeholder="Search by name, skill, college..." />
            <FilterPanel options={majors} selected={filter} onSelect={f => { setFilter(f); setPage(1); }} label="Filter by Major" />
          </div>

          {paged.length > 0
            ? <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(255px,1fr))', gap:16 }}>
                {paged.map(s => <StudentCard key={s.id} student={s} navigate={navigate} onFollow={n => toast(`Following ${n}!`, 'success')} />)}
              </div>
            : <div style={{ textAlign:'center', padding:'60px 20px', color:'#3d6480' }}><p style={{ fontSize:44 }}>🔍</p><p style={{ fontWeight:700, marginTop:10 }}>No students found</p></div>
          }
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </main>
      </div>
    </div>
  );
}