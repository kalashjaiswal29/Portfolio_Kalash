import { Code2, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    id: 'getintern',
    title: 'GetIntern.in',
    desc: 'MSME-registered virtual internship platform. Full task management',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    status: 'live',
    featured: true,
    gradient: 'linear-gradient(135deg, #1a1040 0%, #2d1b4e 50%, #1a0a2e 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: 'https://getintern.in',
    label: 'GetIntern',
  },
  {
    id: 'airbnb-clone',
    title: 'Airbnb Clone',
    desc: 'Full-featured property listing platform with map integration, user auth, host/guest flows, and booking system.',
    tags: ['React', 'Node.js', 'MongoDB', 'Maps API'],
    status: 'complete',
    featured: false,
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #3b0f0f 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: null,
    label: 'Airbnb',
  },
  {
    id: 'smart-attendance',
    title: 'Smart AI Attendance',
    desc: 'AI-powered attendance system using computer vision, face recognition, and liveness detection. Socket.io for real-time updates.',
    tags: ['React', 'Python', 'FastAPI', 'Socket.io', 'OpenCV'],
    status: 'complete',
    featured: false,
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #0f3b1a 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: null,
    label: 'AttendAI',
  },
  {
    id: 'buddy-chat',
    title: 'Buddy Chat',
    desc: 'Real-time P2P chat and video calling app using WebRTC and Socket.io. Supports rooms, messaging, and peer video sessions.',
    tags: ['React', 'Socket.io', 'WebRTC', 'Node.js'],
    status: 'wip',
    featured: false,
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1040 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: null,
    label: 'BuddyChat',
  },
  {
    id: 'premium-auth',
    title: 'Premium Auth UI',
    desc: 'Production-ready authentication UI kit with dark mode, glassmorphism, animated transitions, and full JWT auth flow.',
    tags: ['React', 'CSS Modules', 'JWT', 'Node.js'],
    status: 'complete',
    featured: false,
    gradient: 'linear-gradient(135deg, #130a1a 0%, #2d1040 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: null,
    label: 'Auth UI',
  },
];

const STATUS_LABELS = { live: 'Live', wip: 'WIP', complete: 'Completed' };

export default function Projects({ limitTo = null }) {
  const displayed = limitTo ? PROJECTS.slice(0, limitTo) : PROJECTS;
  const sectionRef = useScrollReveal();

  return (
    <section
      className={`${styles.section} section-padding`}
      id="projects"
      aria-label="Portfolio Projects"
      ref={sectionRef}
    >
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className="container">
        <header className={styles.header} data-reveal data-reveal-delay="1">
          <div className={styles.headerLeft}>
            <span className={styles.badge}>Selected Work</span>
            <h2 className={styles.title}>
              My <span className={styles.titleAccent}>Work</span>
            </h2>
          </div>
          <Link to="/project" className={styles.seeAllBtn} id="see-all-projects-btn">
            See All Projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </header>

        <div className={styles.grid}>
          {displayed.map(({ id, title, desc, tags, status, featured, gradient, github, demo, label }, idx) => (
            <article
              key={id}
              className={`${styles.card}${featured ? ' ' + styles.featured : ''}`}
              aria-label={`Project: ${title}`}
              data-reveal
              data-reveal-delay={String(Math.min(idx + 2, 7))}
            >
              {/* Media */}
              <div className={styles.cardMedia}>
                <div
                  className={styles.cardMediaPlaceholder}
                  style={{ '--gradient': gradient }}
                >
                  {label}
                </div>
                <div className={styles.cardBadgeRow}>
                  <span className={styles.statusBadge} data-status={status}>
                    {STATUS_LABELS[status]}
                  </span>
                  <div className={styles.cardLinks}>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`GitHub repository for ${title}`}
                    >
                      <Code2 size={14} aria-hidden="true" />
                    </a>
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                        aria-label={`Live demo of ${title}`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
                <div className={styles.cardTags} aria-label={`Technologies: ${tags.join(', ')}`}>
                  {tags.map(t => (
                    <span key={t} className={styles.cardTag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
