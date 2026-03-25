// Component 20 — HeroSection
// Unit 2.1 — useState for rotating words
// Unit 2.2 — useEffect with setInterval (digital clock style)

import { useState, useEffect } from 'react';

export default function HeroSection({ navigate, user }) {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Build the Future', 'Find Study Partners', 'Join Hackathons', 'Share Knowledge'];

  // Unit 2.2 — useEffect with interval + cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer); 
  }, []);

  return (
    <div style={{ position:'relative', padding:'100px 24px 72px', textAlign:'center', overflow:'hidden' }}>
      {/* Background */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,201,167,.12) 0%, transparent 55%)' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(0,201,167,.07) 1px, transparent 1px)', backgroundSize:'28px 28px' }} />

      <div style={{ position:'relative', maxWidth:780, margin:'0 auto' }}>
        {/* Badge */}
        <span style={{ display:'inline-flex', background:'rgba(0,201,167,.15)', color:'#00c9a7', border:'1px solid rgba(0,201,167,.3)', borderRadius:20, padding:'4px 14px', fontSize:13, fontWeight:700, marginBottom:18 }}>
          ◆ 50,000+ students across 200+ colleges
        </span>

        {/* Heading — Unit 2.1 wordIndex state displayed */}
        <h1 style={{ fontSize:'clamp(2.2rem, 5.5vw, 4rem)', fontWeight:800, lineHeight:1.1, marginBottom:18 }}>
          Where exceptional students<br />
          <span style={{ background:'linear-gradient(120deg,#00c9a7 0%,#f59e0b 50%,#e879f9 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            {words[wordIndex]}
          </span>
        </h1>

        <p style={{ fontSize:17, color:'#7aa5c5', lineHeight:1.85, marginBottom:38, maxWidth:560, margin:'0 auto 38px' }}>
          CampusConnect connects you with talented peers for collaborations, study groups, events, and deep technical discussions.
        </p>

        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <button onClick={() => navigate(user ? '/explore' : '/login')} style={{ padding:'13px 30px', background:'linear-gradient(135deg,#00c9a7,#f59e0b)', color:'#0c1520', border:'none', borderRadius:12, fontWeight:800, fontSize:16, cursor:'pointer', boxShadow:'0 8px 32px rgba(0,201,167,.4)' }}>
            {user ? 'Explore Students' : 'Get Started Free'}
          </button>
          <button onClick={() => navigate('/about')} style={{ padding:'13px 30px', background:'transparent', color:'#38bdf8', border:'1.5px solid rgba(56,189,248,.5)', borderRadius:12, fontWeight:800, fontSize:16, cursor:'pointer' }}>
            How It Works
          </button>
        </div>

        {/* Stats */}
        <div style={{ display:'flex', gap:16, justifyContent:'center', marginTop:56, flexWrap:'wrap' }}>
          {[['50K+','Students'],['200+','Colleges'],['1.2K+','Study Groups'],['800+','Events']].map(([num, label]) => (
            <div key={label} style={{ background:'rgba(255,255,255,.04)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,.07)', borderRadius:14, padding:'16px 24px', textAlign:'center' }}>
              <div style={{ fontSize:24, fontWeight:800, background:'linear-gradient(120deg,#00c9a7,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{num}</div>
              <div style={{ fontSize:12, color:'#7aa5c5', marginTop:3 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}