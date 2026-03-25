// Component 19 — SettingsPanel
// Unit 2.3 — useContext to access and toggle theme

import { useTheme }        from '../context/ThemeContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function SettingsPanel({ onClose, onSave }) {
  const { isDark, toggleTheme, colors } = useTheme();
  const [emailNotif, setEmail]          = useLocalStorage('cc_email', true);
  const [pushNotif,  setPush]           = useLocalStorage('cc_push',  true);
  const [privacy,    setPrivacy]        = useLocalStorage('cc_priv',  'public');

  const Toggle = ({ value, onChange, label }) => (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:`1px solid ${colors.border}` }}>
      <span style={{ fontSize:14 }}>{label}</span>
      <div onClick={() => onChange(!value)} style={{ width:44, height:24, borderRadius:12, background: value ? '#00c9a7' : colors.bg4, position:'relative', cursor:'pointer', transition:'background .2s' }}>
        <div style={{ width:18, height:18, borderRadius:'50%', background: value ? '#0c1520' : '#7aa5c5', position:'absolute', top:3, left: value ? 23 : 3, transition:'left .2s' }} />
      </div>
    </div>
  );

  return (
    <div>
      <Toggle value={isDark}      onChange={toggleTheme} label="🌙 Dark Mode" />
      <Toggle value={emailNotif}  onChange={setEmail}    label="✉ Email Notifications" />
      <Toggle value={pushNotif}   onChange={setPush}     label="🔔 Push Notifications" />
      <div style={{ padding:'12px 0' }}>
        <p style={{ fontSize:13, marginBottom:8, fontWeight:600 }}>Profile Visibility</p>
        <div style={{ display:'flex', gap:8 }}>
          {['public','friends','private'].map(opt => (
            <button key={opt} onClick={() => setPrivacy(opt)} style={{ flex:1, padding:8, borderRadius:8, border:`1.5px solid ${privacy===opt?'#00c9a7':colors.border}`, background: privacy===opt?'rgba(0,201,167,.15)':'transparent', color: privacy===opt?'#00c9a7':colors.text2, fontSize:12.5, cursor:'pointer', fontWeight: privacy===opt?700:400, textTransform:'capitalize' }}>{opt}</button>
          ))}
        </div>
      </div>
      <button onClick={() => { if (onSave) onSave(); if (onClose) onClose(); }} style={{ width:'100%', padding:'12px', marginTop:14, background:'#00c9a7', color:'#0c1520', border:'none', borderRadius:10, fontWeight:800, fontSize:14, cursor:'pointer' }}>
        Save Changes
      </button>
    </div>
  );
}