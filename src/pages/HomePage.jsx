import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import StudentCard from '../components/StudentCard';
import EventCard   from '../components/EventCard';
import { STUDENTS, EVENTS } from '../utils/data';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../App';

const FEATURES = [
  { icon:'🔍', title:'Smart Matchmaking',    desc:'AI-powered partner suggestions based on your skills, goals and learning style.',  color:'#00c9a7' },
  { icon:'📚', title:'Focused Study Groups', desc:'Join research-grade groups with structured sessions and accountability.',          color:'#f59e0b' },
  { icon:'🎫', title:'Curated Events',       desc:'Hackathons, summits, career fairs — every event vetted for quality.',             color:'#e879f9' },
  { icon:'❓', title:'Expert Q&A Forum',     desc:'Ask hard questions, get answers from experts. Like Stack Overflow for campus.',   color:'#38bdf8' },
  { icon:'👤', title:'Pro Portfolio',        desc:'Showcase projects and achievements that stand out to top companies.',             color:'#22d3a5' },
  { icon:'📊', title:'Analytics Dashboard', desc:'Track learning velocity, engagement and community impact.',                       color:'#fb923c' },
];

export default function HomePage({ navigate, toast }) {
  const { user } = useAuth();
  return (
    <div>
      <HeroSection navigate={navigate} user={user} />
      <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 24px 80px' }}>

        {/* Features */}
        <div style={{ marginBottom:60 }}>
          <h2 style={{ fontSize:'clamp(1.5rem,3vw,2rem)', fontWeight:800, marginBottom:24 }}>Built for serious learners</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:16 }}>
            {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>

        {/* Students */}
        <div style={{ marginBottom:60 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
            <h2 style={{ fontWeight:800, fontSize:'clamp(1.4rem,3vw,2rem)' }}>Trending Collaborators</h2>
            <button onClick={() => navigate('/explore')} style={{ padding:'7px 16px', background:'transparent', color:'#00c9a7', border:'1.5px solid rgba(0,201,167,.4)', borderRadius:9, fontWeight:700, fontSize:13, cursor:'pointer' }}>View all →</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(255px,1fr))', gap:16 }}>
            {STUDENTS.slice(0,4).map(s => <StudentCard key={s.id} student={s} navigate={navigate} onFollow={name => toast(`Following ${name}!`, 'success')} />)}
          </div>
        </div>

        {/* Events */}
        <div style={{ marginBottom:60 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
            <h2 style={{ fontWeight:800, fontSize:'clamp(1.4rem,3vw,2rem)' }}>Featured Events</h2>
            <button onClick={() => navigate('/events')} style={{ padding:'7px 16px', background:'transparent', color:'#00c9a7', border:'1.5px solid rgba(0,201,167,.4)', borderRadius:9, fontWeight:700, fontSize:13, cursor:'pointer' }}>All events →</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(285px,1fr))', gap:16 }}>
            {EVENTS.filter(e => e.featured).map(e => <EventCard key={e.id} event={e} onRegister={title => toast(`Registered for ${title}!`, 'success')} />)}
          </div>
        </div>

        {/* CTA */}
        <div style={{ borderRadius:24, padding:'56px 40px', textAlign:'center', background:'linear-gradient(135deg,rgba(0,201,167,.12),rgba(245,158,11,.08))', border:'1px solid rgba(0,201,167,.2)' }}>
          <h2 style={{ color:'#e2f0fb', fontSize:'clamp(1.5rem,3vw,2.3rem)', fontWeight:800, marginBottom:12 }}>Your network is your net worth.</h2>
          <p style={{ color:'#7aa5c5', fontSize:16, marginBottom:32 }}>Join 50,000+ students. Always free.</p>
          <button onClick={() => navigate('/login')} style={{ padding:'13px 36px', background:'linear-gradient(135deg,#00c9a7,#f59e0b)', color:'#0c1520', border:'none', borderRadius:12, fontWeight:800, fontSize:16, cursor:'pointer' }}>
            Join CampusConnect Free
          </button>
        </div>
      </div>
    </div>
  );
}