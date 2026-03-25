import { useLocalStorage } from '../hooks/useLocalStorage';

export default function BookmarkButton({ id, type = 'item' }) {
  const [bookmarks, setBookmarks] = useLocalStorage('cc_bookmarks', []);
  const key    = `${type}-${id}`;
  const saved  = bookmarks.includes(key);

  const toggle = (e) => {
    e.stopPropagation();
    if (saved) setBookmarks(bookmarks.filter(b => b !== key));
    else setBookmarks([...bookmarks, key]);
  };

  return (
    <button onClick={toggle} style={{
      background:'transparent', border:'none', cursor:'pointer',
      color: saved ? '#f59e0b' : '#3d6480',
      fontSize:18, padding:4,
      transition:'color .2s, transform .15s',
      transform: saved ? 'scale(1.2)' : 'scale(1)',
    }}>
      {saved ? '◆' : '◇'}
    </button>
  );
}