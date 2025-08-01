import './Education.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import gallery1 from '../assets/edu/1.jpg';
import gallery4 from '../assets/edu/4.jpg';
import gallery5 from '../assets/edu/5.jpg';
import gallery10 from '../assets/edu/10.jpg';
import gallery11 from '../assets/edu/11.jpg';
import gallery12 from '../assets/edu/12.jpg';
import gallery13 from '../assets/edu/13.jpg';
import gallery14 from '../assets/edu/14.jpg';
import gallery16 from '../assets/edu/16.jpg';
import gallery17 from '../assets/edu/17.jpg';
import gallery18 from '../assets/edu/18.jpg';
import gallery19 from '../assets/edu/19.jpg';
import gallery20 from '../assets/edu/20.jpg';
import gallery22 from '../assets/edu/22.jpg';
import gallery23 from '../assets/edu/23.jpg';

const images = [
  { src: gallery1, caption: 'First Dev Class' },
  { src: gallery4, caption: 'Freshers Party +1' },
  { src: gallery5, caption: 'Game Dev Workshop' },
  { src: gallery11, caption: 'Early Morning Revision' },
  { src: gallery12, caption: 'First Event Organized' },
  { src: gallery13, caption: 'Crushed That Quiz' },
  { src: gallery14, caption: 'Global Cabinet Champs' },
  { src: gallery16, caption: 'Storytelling Contest' },
  { src: gallery17, caption: 'Won Mock Shark Tank' },
  { src: gallery18, caption: 'Video Shooting' },
  { src: gallery19, caption: 'Republic Day MC' },
  { src: gallery20, caption: 'Drama Direction' },
  { src: gallery22, caption: '"Club Paglu" Hoodie' },
  { src: gallery23, caption: 'Serious Business!' }
];

export default function Education() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const hasBeenVisible = useRef(false);

  const scrollByImage = (direction) => {
    const container = scrollRef.current;
    const image = container.querySelector('.image-wrapper');
    const amount = image ? image.clientWidth : 300;
    if (direction === 'left') container.scrollLeft -= amount;
    else container.scrollLeft += amount;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0.2) {
          hasBeenVisible.current = true;
          setVisible(true);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 1.5;

    const scrollOnce = () => {
      if (!hasBeenVisible.current) return;

      container.scrollLeft += scrollSpeed;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 1) {
        cancelAnimationFrame(animationRef.current);
        setTimeout(() => {
          container.scrollLeft = 0;
          animationRef.current = requestAnimationFrame(scrollOnce);
        }, 1000);
      } else {
        animationRef.current = requestAnimationFrame(scrollOnce);
      }
    };

    animationRef.current = requestAnimationFrame(scrollOnce);

    return () => cancelAnimationFrame(animationRef.current);
  }, [visible]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 1.0,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="section education" ref={sectionRef}>
      <div className="image-strip-container">
        <button className="scroll-btn left" onClick={() => scrollByImage('left')}>
          <ChevronLeft />
        </button>
        <div className="image-strip" ref={scrollRef}>
          {images.map((img, idx) => (
            <div className="image-wrapper" key={idx}>
              <img src={img.src} alt={`edu-${idx}`} />
              <div className="caption">{img.caption}</div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollByImage('right')}>
          <ChevronRight />
        </button>
      </div>

      <div className="edu-columns">
        <motion.div
          className="edu-block"
          initial="hidden"
          animate={hasBeenVisible.current ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeVariant}
        >
          <h3>Academics</h3>
          <p>
            I’m a student at <span className="highlight">Scaler School of Technology</span>, graduating in 2028. Its industry-focused curriculum and CS-focus have been a breath of fresh air.
          </p>
          <br />
          <p>
            In parallel, I’m pursuing <span className="highlight">a B.Sc. from BITS Pilani</span> (Class of 2027) and will complete an <span className="highlight">MS from Woolf University</span>, UK in 2028, both in Computer Science. An unconventional setup I'm happy to brag about!
          </p>
          <br />
          <p>
            In my <span className="highlight">first year</span>, I've covered Web Development, DSA, Operating Systems, Data Analytics, and foundational math for Machine Learning. I also attended <span className="highlight">technical workshops</span> (e.g., game development, visionOS) and served as a <span className="highlight">Teaching Assistant</span> for English III and Public Speaking.
          </p>
        </motion.div>
        <motion.div
          className="edu-block"
          initial="hidden"
          animate={hasBeenVisible.current ? 'visible' : 'hidden'}
          custom={1}
          variants={fadeVariant}
        >
          <h3>Extra-curriculars</h3>
          <p>
            In my first year, I've taken every opportunity I could make time for: chess, singing, rangolis, directing dramas and musicals, debates, parties, hackathons... you name it. Gotta <span className="highlight">develop myself</span>, not just software!
          </p>
          <br />
          <p>
            When club recruitments began, it was time for me to pick. After a brief stint with the Cultural Club, I identified a gap on campus and helped establish <span className="highlight">The Orators’ Society</span>, our dedicated ESL and Public Speaking club.
          </p>
          <br />
          <p>
            As <span className="highlight">President</span>, I’ve led the organization of various literary events, including vocabulary quizzes, global cabinet simulations, and short film contests. It’s been demanding work, but also some of the most rewarding I’ve ever done.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
