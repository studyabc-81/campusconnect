// Unit 2.5 — Login form with validation
import { useState } from 'react';
import { useAuth }  from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function LoginPage({ navigate, toast }) {
  const { login, isLoading } = useAuth();
  const { colors }           = useTheme();
  const [mode,  setMode]     = useState('login');
  const [email, setEmail]    = useState('');
  const [pass,  setPass]     = useState('');
  const [name,  setName]     = useState('');
  const [errors,setErrors]   = useState({});

  // Unit 2.5 — Validation
  const validate = () => {
    const e = {};
    if (!email.includes('@')) e.email    = 'Enter a valid email';
    if (pass.length < 6)      e.password = 'Minimum 6 characters';
    if (mode === 'register' && !name.trim()) e.name = 'Name is required';
    return e;
  };

  // Unit 2.5 — Handle form submit
  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    const ok = await login(email, pass);
    if (ok) { toast('Welcome back!', 'success'); navigate('/dashboard'); }
  };

  const inp = { background:colors.bg3, border:`1.5px solid ${colors.border}`, borderRadius:10, padding:'11px 14px', color:colors.text, fontSize:14, outline:'none', width:'100%', fontFamily:"'Outfit',sans-serif" };

  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'80px 20px 40px', background:'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,201,167,.08) 0%, transparent 55%)' }}>
      <div style={{ width:'100%', maxWidth:420 }}>
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <div style={{ width:56, height:56, borderRadius:16, background:'linear-gradient(135deg,#00c9a7,#f59e0b)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, margin:'0 auto 16px' }}>🎓</div>
          <h1 style={{ fontWeight:800, fontSize:26 }}>CampusConnect</h1>
          <p style={{ color:'#7aa5c5', fontSize:14, marginTop:7 }}>{mode==='login' ? 'Welcome back. Sign in to continue.' : 'Create your free account.'}</p>
        </div>

        <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:20, padding:32, boxShadow:colors.shadow }}>
          {/* Tabs */}
          <div style={{ display:'flex', borderBottom:`1px solid ${colors.border}`, marginBottom:24 }}>
            {[['login','Sign In'],['register','Register']].map(([m,l]) => (
              <button key={m} onClick={() => setMode(m)} style={{ flex:1, padding:10, background:'transparent', border:'none', cursor:'pointer', fontWeight:mode===m?800:500, fontSize:14, color:mode===m?'#00c9a7':colors.text2, borderBottom:`2.5px solid ${mode===m?'#00c9a7':'transparent'}`, marginBottom:-1 }}>{l}</button>
            ))}
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {mode === 'register' && (
              <div>
                <label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Full Name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Ishaan Kapoor" style={inp} />
                {errors.name && <p style={{ color:'#fb7185', fontSize:12, marginTop:4 }}>⚠ {errors.name}</p>}
              </div>
            )}
            <div>
              <label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@college.edu" style={inp} />
              {errors.email && <p style={{ color:'#fb7185', fontSize:12, marginTop:4 }}>⚠ {errors.email}</p>}
            </div>
            <div>
              <label style={{ fontSize:12.5, fontWeight:700, color:colors.text2, display:'block', marginBottom:6 }}>Password</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" style={inp} onKeyDown={e => e.key==='Enter' && handleSubmit()} />
              {errors.password && <p style={{ color:'#fb7185', fontSize:12, marginTop:4 }}>⚠ {errors.password}</p>}
            </div>
            <button disabled={isLoading} onClick={handleSubmit} style={{ width:'100%', padding:13, marginTop:4, background:'linear-gradient(135deg,#00c9a7,#f59e0b)', color:'#0c1520', border:'none', borderRadius:10, fontWeight:800, fontSize:15, cursor: isLoading?'not-allowed':'pointer', opacity: isLoading?.7:1 }}>
              {isLoading ? 'Signing in...' : mode==='login' ? 'Sign In →' : 'Create Account →'}
            </button>
            <p style={{ textAlign:'center', fontSize:13, color:colors.text3 }}>
              {mode==='login' ? 'New here? ' : 'Have an account? '}
              <span onClick={() => setMode(mode==='login'?'register':'login')} style={{ color:'#00c9a7', cursor:'pointer', fontWeight:700 }}>
                {mode==='login' ? 'Register' : 'Sign in'}
              </span>
            </p>
          </div>
        </div>
        <p style={{ textAlign:'center', fontSize:12, color:'#3d6480', marginTop:14 }}>Demo: any email + 6+ char password works</p>
      </div>
    </div>
  );
}