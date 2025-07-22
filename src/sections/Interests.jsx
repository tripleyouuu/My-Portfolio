import './Interests.css';
import {
  Languages,
  Dice5,
  PenLine,
  MessageCircle,
  Music,
  Stars
} from 'lucide-react';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Interests() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const pointVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const categories = [
    {
      title: 'Music',
      icon: <Music />,
      points: [
        <>Self-taught <span className="highlight">western vocalist</span> and performer.</>,
        <>I can read <span className="highlight">sheet music</span>, and learn music theory from friends in the field.</>,
        <>Currently learning the <span className="highlight">piano</span> by myself.</>,
        <>I enjoy curating <span className="highlight">playlists</span>, and have one for every mood.</>,
      ],
    },
    {
      title: 'Languages',
      icon: <Languages />,
      points: [
        <>Besides English, I can speak, read and write in <span className="highlight">Hindi</span> & <span className="highlight">Tamil</span>.</>,
        <>I know a little bit of <span className="highlight">Sanskrit</span>, <span className="highlight">Greek</span>, and <span className="highlight">Latin</span> as well.</>,
        <>I have a 580+ day streak on Duolingo for <span className="highlight">Spanish</span> and <span className="highlight">Japanese</span>.</>,
      ],
    },
    {
      title: 'Communication',
      icon: <MessageCircle />,
      points: [
        <>I lead a <span className="highlight">public speaking</span> club and organize speech, vocabulary, and debate contests.</>,
        <>I’ve won a number of team <span className="highlight">debate</span> competitions over the last five years.</>,
        <>I’m more than happy to act as <span className="highlight">MC</span> or host at all kinds of events.</>,
      ],
    },
    {
      title: 'Arts',
      icon: <PenLine />,
      points: [
        <>Avid <span className="highlight">reader</span> – from Homeric epics to modern YA fiction to encyclopaedias.</>,
        <>I write <span className="highlight">poetry</span>, scripts, and more as a creative outlet.</>,
        <>Digital drawing and graphic <span className="highlight">design</span> combine my love of tech and art.</>,
      ],
    },
    {
      title: 'Games',
      icon: <Dice5 />,
      points: [
        <><span className="highlight">Video games</span> of various genres help me coordinate with friends.</>,
        <>I dabble in <span className="highlight">chess</span> (ELO ~1100), sudoku, and rubick’s cube.</>,
        <>Currently averaging 115 WPM in <span className="highlight">speed-typing</span> (top: 136).</>,
      ],
    },
    {
      title: 'Miscellaneous',
      icon: <Stars />,
      points: [
        <>Since learning to <span className="highlight">drive</span> a year ago I’ve adored being on the road.</>,
        <><span className="highlight">Baking</span> is a fulfilling pastime for me, especially cakes and hot chocolate.</>,
        <>I’ve recently discovered the joys of <span className="highlight">working out</span> and staying active.</>,
      ],
    },
  ];

  return (
    <div className="section interests" ref={ref}>
      <h2 className="mobile-interests-heading">My Interests</h2>
      <p className="interests-intro">
        When all is said and done, what I really am is an eager <span className="highlight">learner</span>. And there's a lot to learn outside of academics, at the risk of becoming a "jack of all trades". When I'm not coding, you can find me filling my hours with any of these:
      </p>

      <div className="interests-grid">
        {categories.map((cat, cardIdx) => (
          <motion.div
            className="interest-card"
            key={cardIdx}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
            custom={cardIdx}
            variants={cardVariants}
          >
            <div className="interest-card-header">
              <div className="icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
            </div>
            <ul>
              {cat.points.map((pt, pointIdx) => (
                <motion.li
                  key={pointIdx}
                  initial="hidden"
                  animate={visible ? 'visible' : 'hidden'}
                  custom={pointIdx}
                  variants={pointVariants}
                >
                  {pt}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
