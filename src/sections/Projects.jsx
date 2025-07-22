import './Projects.css';
import { motion } from 'framer-motion';

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const mainProjects = [
  {
    name: 'Ye Olde News Aggregator',
    link: 'https://newsagg.vercel.app/',
    description: 'Aggregates top headlines using the NewsAPI. Supports saving articles for later, filtering by category, and searching by keyword.'
  },
  {
    name: 'GitHub Sneak Peeks',
    link: 'https://wd-git-hub-user-finder-project.vercel.app/',
    description: 'Searches for GitHub profiles and displays repositories and activity.'
  },
  {
    name: 'Summon Country Facts',
    link: 'https://tripleyouuu.github.io/Summon-Country-Facts/',
    description: 'Provides basic facts and data for countries using REST Countries API. Includes a randomizer, and note-taking feature. Vanilla JavaScript implementation.'
  },
  {
    name: 'Card Flipping Memory Game',
    link: 'https://tripleyouuu.github.io/Card-Flipping-Memory-Game/',
    description: 'Interactive card matching game in JS with animated flips and timer tracking.'
  },
];

const hackathonProjects = [
  {
    name: 'LegalConnect',
    link: 'https://www.canva.com/design/DAGqszxcxEo/dMruaKhY3lIub6hP4EqRQA/view?utm_content=DAGqszxcxEo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdd49e47bef',
    description: 'LinkedIn-like platform connecting clients to lawyers and CAs, with service listings, bookings, and more. This project is not deployed as yet, but had a winning mock Shark Tank pitch.'
  },
];

const schoolProjects = [
  {
    name: 'COVID-19 Census Survey',
    link: 'https://drive.google.com/file/d/1DeFVAU7OwPacMwS-xGXQ4gpMxitLfHx7/view?usp=drive_link',
    description: 'Uses Python (primarily matplotlib) and MySQL (connector module) to collect and analyze COVID-related data, and display it through appropriate graphs.'
  },
  {
    name: 'GUVI AI Certification',
    link: 'https://drive.google.com/file/d/1UzWpdpkDG-JIb_NmCO27iYv02ynbbbKx/view?usp=sharing',
    description: 'Trained AI using Python to play rock-paper-scissors, and recognize masked vs unmasked faces for the pandemic.'
  },
];

const renderTimeline = (projects) =>
  projects.map((project, i) => (
    <motion.div
      className="timeline-item"
      key={i}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={itemVariants}
    >
      <div className="timeline-marker" />
      <div className="timeline-content">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-title"
        >
          {project.name}
        </a>
        <p className="project-desc">{project.description}</p>
      </div>
    </motion.div>
  ));

export default function Projects() {
  return (
    <div className="section projects">
      <div className="projects-intro">
        <h2 className="mobile-projects-heading">My Projects</h2>
        <p>Though I've only had any effective education in CS for a short time, I've thoroughly enjoyed building and working on projects from time to time. Be it an assignment focusing on execution of a small idea, or working with teams to come up with something impactful for the future, it's a thrill all the same to take something from a few abstract thoughts to a tangible piece of work.</p>
      </div>

      <div className="projects-grid">
        <motion.div
          className="column"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={blockVariants}
        >
          <h3><span className="highlight">Development</span></h3>
          <div className="timeline">{renderTimeline(mainProjects)}</div>
        </motion.div>

        <motion.div
          className="column"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={blockVariants}
        >
          <div>
            <h3><span className="highlight">Hackathon Work</span></h3>
            <div className="timeline">{renderTimeline(hackathonProjects)}</div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h3><span className="highlight">School Projects</span></h3>
            <div className="timeline">{renderTimeline(schoolProjects)}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
