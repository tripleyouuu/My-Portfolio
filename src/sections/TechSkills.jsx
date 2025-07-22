import './TechSkills.css';
import logos from '../assets/tech-logos';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function TechSkills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  const categories = {
    Languages: [
      { name: 'Java', logo: logos.java },
      { name: 'Python', logo: logos.python },
      { name: 'Go (basic)', logo: logos.go },
    ],
    Frontend: [
      { name: 'HTML', logo: logos.html },
      { name: 'CSS', logo: logos.css },
      { name: 'JavaScript', logo: logos.js },
      { name: 'React.js', logo: logos.react },
      { name: 'TypeScript (basic)', logo: logos.ts },
      { name: 'Tailwind CSS', logo: logos.tailwind },
    ],
    'Backend & Database': [
      { name: 'Node.js (basic)', logo: logos.node },
      { name: 'MySQL', logo: logos.mysql },
    ],
    'General Tools': [
      { name: 'MS Office', logo: logos.office },
      { name: 'Canva', logo: logos.canva },
      { name: 'Figma (basic)', logo: logos.figma },
    ],
    'AI Tools': [
      { name: 'ChatGPT', logo: logos.chatgpt },
      { name: 'Perplexity', logo: logos.perplexity },
      { name: 'GitHub Copilot', logo: logos.copilot },
    ],
    'Operating Systems': [
      { name: 'Windows', logo: logos.windows },
      { name: 'macOS', logo: logos.macos },
      { name: 'Ubuntu (basic)', logo: logos.ubuntu },
      { name: 'Android', logo: logos.android },
      { name: 'iOS', logo: logos.ios },
      { name: 'iPadOS', logo: logos.ipados },
    ],
  };

  return (
    <div className="section tech-skills" ref={ref}>
      <div className="timeline">
        {Object.entries(categories).map(([category, skills], idx) => (
          <motion.div
            key={category}
            className="timeline-item"
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
            custom={idx}
            variants={categoryVariants}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>{category}</h3>
              <div className="skill-list">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill"
                    initial="hidden"
                    animate={visible ? 'visible' : 'hidden'}
                    custom={i}
                    variants={skillVariants}
                  >
                    {skill.logo && <img src={skill.logo} alt={skill.name} />}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
