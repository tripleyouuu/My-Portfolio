import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Landing from './sections/Landing';
import TechSkills from './sections/TechSkills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Interests from './sections/Interests';

export default function App() {
  useEffect(() => {
    const handleKeyScroll = (e) => {
      const scrollAmount = 80;
      if (e.key === 'ArrowDown') {
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyScroll);
    return () => window.removeEventListener('keydown', handleKeyScroll);
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <section id="landing"><Landing /></section>
        <section id="tech-skills"><TechSkills /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="interests"><Interests /></section>
      </main>
    </>
  );
}
