import { useState }  from 'react';
import EventCard     from '../components/EventCard';
import SearchBar     from '../components/SearchBar';
import FilterPanel   from '../components/FilterPanel';
import Sidebar       from '../components/Sidebar';
import { EVENTS }    from '../utils/data';

export default function EventsPage({ route, navigate, toast }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const cats = ['All','Hackathon','Workshop','Networking','Summit','Contest'];

  const filtered = EVENTS.filter(e => {
    const m = !search || [e.title, ...e.tags].some(x => x.toLowerCase().includes(search.toLowerCase()));
    return m && (filter==='All' || e.category===filter);
  });

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'30px 22px', display:'flex', gap:26, alignItems:'flex-start' }}>
        <Sidebar route={route} navigate={navigate} />
        <main style={{ flex:1 }}>
          <div style={{ marginBottom:24 }}>
            <h1 style={{ fontWeight:800, fontSize:'clamp(1.4rem,3vw,2rem)' }}>Campus Events</h1>
            <p style={{ color:'#7aa5c5', fontSize:14, marginTop:4 }}>Hackathons, summits, workshops — find events that shape your future.</p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:22 }}>
            <SearchBar value={search} onChange={setSearch} placeholder="Search events..." />
            <FilterPanel options={cats} selected={filter} onSelect={setFilter} label="Category" />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(285px,1fr))', gap:18 }}>
            {filtered.map(e => <EventCard key={e.id} event={e} onRegister={t => toast(`Registered for ${t}!`, 'success')} />)}
          </div>
        </main>
      </div>
    </div>
  );
}