import { Layers, Server, Zap } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'fullstack',
    num: '01',
    icon: Layers,
    title: 'Full-Stack Development',
    desc: 'Building responsive, complete web applications from the ground up. Integrating dynamic React frontends with robust Node.js backends to deliver seamless user experiences.',
    tags: ['React', 'Node.js', 'REST APIs'],
    glowColor: 'rgba(249,115,22,0.25)',
    iconBg: 'rgba(249,115,22,0.12)',
    iconBorder: 'rgba(249,115,22,0.3)',
    iconColor: '#F97316',          /* --color-accent */
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
    iconColor: '#A78BFA',          /* --color-purple-light */
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
  const sectionRef = useScrollReveal();

  return (
    <section
      className={`${styles.section} section-padding`}
      id="services"
      aria-label="My Services"
      ref={sectionRef}
    >
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className="container">
        <header className={styles.header} data-reveal data-reveal-delay="1">
          <span className={styles.badge}>What I Do</span>
          <h2 className={styles.title}>
            My <span className={styles.titleAccent}>Services</span>
          </h2>
          <p className={styles.subtitle}>
            Building robust digital products from concept to production.          </p>
        </header>

        <div className={styles.grid}>
          {SERVICES.map(({ id, num, icon: Icon, title, desc, tags, glowColor, iconBg, iconBorder, iconColor }, idx) => (
            <article
              key={id}
              className={styles.card}
              aria-label={`Service: ${title}`}
              data-reveal="scale"
              data-reveal-delay={String(idx + 2)}
            >
              <div
                className={styles.cardGlow}
                style={{ '--glow-color': glowColor }}
                aria-hidden="true"
              />
              <span className={styles.cardNum} aria-hidden="true">{num}</span>
              <div
                className={styles.iconWrap}
                style={{
                  background: iconBg,
                  border: `1px solid ${iconBorder}`,
                  color: iconColor,
                }}
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
