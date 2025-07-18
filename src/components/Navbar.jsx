import { useEffect, useState } from 'react';
import './Navbar.css';

const sections = ['landing', 'tech-skills', 'education', 'projects', 'interests'];

export default function Navbar() {
  const [active, setActive] = useState('landing');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const keyMap = {
      l: 'landing',
      t: 'tech-skills',
      e: 'education',
      p: 'projects',
      i: 'interests',
    };

    const handleKeyPress = (e) => {
      const sectionId = keyMap[e.key.toLowerCase()];
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <nav className="navbar">
      {sections.map(id => {
        const text = id.replace('-', ' ');
        const firstChar = text[0];
        const rest = text.slice(1);
        return (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
          >
            <span className="underline">{firstChar}</span>{rest}
          </a>
        );
      })}
    </nav>
  );
}
