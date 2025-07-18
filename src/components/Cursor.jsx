import { useEffect, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="cursor"
      style={{ left: pos.x + 'px', top: pos.y + 'px' }}
    />
  );
}
