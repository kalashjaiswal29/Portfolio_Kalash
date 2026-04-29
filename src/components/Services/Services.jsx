import { Layers, Server, Zap } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'fullstack',
    num: '01',
    icon: Layers,
    title: 'Full-Stack Architecture',
    desc: 'Designing scalable, production-ready web applications with React on the frontend and Node.js on the backend. Clean code, modular structure, and solid DevOps pipelines.',
    tags: ['React', 'Node.js', 'REST APIs', 'Architecture'],
    glowColor: 'rgba(249,115,22,0.25)',
    iconBg: 'rgba(249,115,22,0.12)',
    iconBorder: 'rgba(249,115,22,0.3)',
    iconColor: 'var(--color-accent)',
  },
  {
    id: 'backend',
    num: '02',
    icon: Server,
    title: 'Backend & APIs',
    desc: 'Building robust, secured REST APIs with Express.js and MongoDB. Auth systems, role-based access, data validation, and optimized query performance.',
    tags: ['Express.js', 'MongoDB', 'JWT', 'Security'],
    glowColor: 'rgba(139,92,246,0.25)',
    iconBg: 'rgba(139,92,246,0.12)',
    iconBorder: 'rgba(139,92,246,0.3)',
    iconColor: 'var(--color-purple-light)',
  },
  {
    id: 'realtime',
    num: '03',
    icon: Zap,
    title: 'Real-Time Systems',
    desc: 'Engineering real-time features using Socket.io and WebRTC — from live chat and notifications to peer-to-peer video calls and collaborative tools.',
    tags: ['Socket.io', 'WebRTC', 'Real-Time', 'P2P'],
    glowColor: 'rgba(34,197,94,0.2)',
    iconBg: 'rgba(34,197,94,0.1)',
    iconBorder: 'rgba(34,197,94,0.3)',
    iconColor: '#4ade80',
  },
];

export default function Services() {
  return (
    <section className={`${styles.section} section-padding`} id="services" aria-label="My Services">
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className="container">
        <header className={styles.header}>
          <span className={styles.badge}>What I Do</span>
          <h2 className={styles.title}>
            My <span className={styles.titleAccent}>Services</span>
          </h2>
          <p className={styles.subtitle}>
            End-to-end solutions from architecture to deployment.
          </p>
        </header>

        <div className={styles.grid}>
          {SERVICES.map(({ id, num, icon: Icon, title, desc, tags, glowColor, iconBg, iconBorder, iconColor }) => (
            <article
              key={id}
              className={styles.card}
              aria-label={`Service: ${title}`}
            >
              <div
                className={styles.cardGlow}
                style={{ '--glow-color': glowColor }}
                aria-hidden="true"
              />
              <span className={styles.cardNum} aria-hidden="true">{num}</span>
              <div
                className={styles.iconWrap}
                style={{ '--icon-bg': iconBg, '--icon-border': iconBorder, '--icon-color': iconColor }}
              >
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <div className={styles.tags} aria-label={`Technologies: ${tags.join(', ')}`}>
                {tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
