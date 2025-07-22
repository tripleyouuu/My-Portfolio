import './Landing.css';
import profile from '../assets/image.png';
import { useEffect, useState } from 'react';

export default function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.5,
        rootMargin: isMobile ? '0px 0px -20% 0px' : '0px',
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      const delay = el.getAttribute('data-delay') || 0;
      el.style.setProperty('--delay', `${delay}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div className="section landing">
      <div className="intro">
        <h1>Sai Sevithaa (Vitha)</h1>
        <p className="subtitle">PORTFOLIO</p>
        <div className="bio-info">
          <span>emailvitha@gmail.com</span>
          <div className="social-icons">
            <a href="https://github.com/tripleyouuu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/saisevithaa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/tripleyouuu13" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="image-wrapper">
          <img src={profile} alt="Sai Sevithaa" />
        </div>
        <div className="text">
          <p data-animate><strong>The description you came looking for:</strong></p>
          <p data-animate data-delay="100">
            I’m an aspiring tech savant, passionate about coding, and trying to make it big in this evolving industry. I'm about to begin Year 2 of my bachelor's in Computer Science.
          </p>
          <br/>
          <p data-animate data-delay="200"><strong>But here’s a little more:</strong></p>
          <p data-animate data-delay="300">
            At my core, I am a <span className="highlight">learner</span>— constantly seeking knowledge and refining my skills, technical and otherwise— with the hopes of one day building things I’m so proud of, I can’t stop talking about them.
          </p>
          <br/>
          <p data-animate data-delay="400">
            On my best days, I’m a confident, introverted logician. On the others, my head’s a little in the clouds. Either way, I like to believe I end each day improved by the tiniest bit. <span className="highlight">Keep scrolling</span>, to get to know me better!
          </p>
        </div>
      </div>
    </div>
  );
}
