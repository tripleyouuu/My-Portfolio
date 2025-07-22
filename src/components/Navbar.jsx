import { useEffect, useState } from 'react';
import './Navbar.css';

const sections = ['landing', 'tech-skills', 'education', 'projects', 'interests'];

export default function Navbar() {
  const [active, setActive] = useState('landing');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setClicked(id);
    setTimeout(() => setClicked(null), 300);
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="navbar desktop-nav">
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

      <div className="mobile-bar" onClick={() => setIsModalOpen(true)}>
        {sections.map((id, i) => (
          <span
            key={i}
            className={`dot ${active === id ? 'dot-active' : ''}`}
          />
        ))}
      </div>

      {isModalOpen ? (
        <>
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)} />
          <div className="modal-nav">
            {sections.map(id => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`modal-link ${clicked === id ? 'clicked' : ''} ${active === id ? 'modal-active' : ''}`}
              >
                {id.replace('-', ' ')}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
