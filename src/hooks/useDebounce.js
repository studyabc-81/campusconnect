// Custom Hook — delays search so it doesn't fire on every keypress
import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer); // cleanup — Unit 2.2
  }, [value, delay]);

  return debounced;
}