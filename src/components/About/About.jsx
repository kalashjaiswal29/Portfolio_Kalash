import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

const SKILLS = [
  { name: 'React JS', pct: '88%' },
  { name: 'Node.js / Express', pct: '85%' },
  { name: 'MongoDB / Databases', pct: '80%' },
  { name: 'RestAPI', pct: '72%' },
  { name: 'Socket.io / WebRTC', pct: '60%' },
  { name: 'Java / DSA', pct: '40%' },
  // { name: 'System Architecture', pct: '78%' },
];

const TECH = [
  'React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io',
  'WebRTC', 'Python', 'JWT', 'REST APIs',
  'Git', 'Vercel', 'Render', 'Linux', 'Java-DSA',
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className={`${styles.section} `}
      id="about"
      aria-label="About Me"
      ref={sectionRef}
    >
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className="container">
        <div className={styles.grid}>
          {/* Left visual */}
          <div className={styles.visual} aria-hidden="true" data-reveal="scale">
            {/* Profile frame — same treatment as Hero */}
            <div className={styles.profileFrame}>
              <div className={styles.profileOrb} />
              <div className={styles.profileRingOuter} />
              <div className={styles.profileRingInner} />
              <div className={styles.profileImgWrap}>
                <img
                  src="/Kalash.jpeg"
                  alt="Kalash Jaiswal"
                  className={styles.profileImg}
                />
              </div>
            </div>

            {/* Floating stats card */}
            <div className={styles.floatCard} data-reveal="right" data-reveal-delay="3">

              <div className={styles.floatStat}>
                <span className={styles.floatStatNum}>3+</span>
                <span className={styles.floatStatLabel}>Projects<br />Delivered</span>
              </div>
              <div className={styles.floatStat}>
                <span className={styles.floatStatNum}>1</span>
                <span className={styles.floatStatLabel}>Startup<br />Founded</span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className={styles.content}>
            <span className={styles.badge} data-reveal data-reveal-delay="1">About Me</span>
            <h1 className={styles.title} data-reveal data-reveal-delay="2">
              Passionate about building{' '}
              <span className={styles.titleAccent}>products</span>{' '}
              that matter.
            </h1>
            <p className={styles.desc} data-reveal data-reveal-delay="3">
              I'm Kalash Jaiswal, a Full Stack MERN Developer based in India. I founded{' '}
              <strong style={{ color: 'var(--color-accent)' }}>GetIntern.in</strong>, an MSME-registered
              virtual internship platform — designed, built, and launched it solo from scratch.
            </p>
            <p className={styles.desc} data-reveal data-reveal-delay="4">My strength lies in bridging backend robustness with smooth frontend experiences. I enjoy working on challenging logic & systems — real-time features, auth flows, and scalable API design. Currently, I'm actively leveling up my problem-solving skills by diving deep into Data Structures and Algorithms in Java.

              When I'm not building products, I'm probably thinking about code</p>

            <div className={styles.skillsWrap} data-reveal data-reveal-delay="5">
              <p className={styles.skillsTitle}>Core Proficiencies</p>
              <div className={styles.skillBars}>
                {SKILLS.map(({ name, pct }) => (
                  <div key={name} className={styles.skillBar}>
                    <div className={styles.skillBarHeader}>
                      <span className={styles.skillName}>{name}</span>
                      <span className={styles.skillPct}>{pct}</span>
                    </div>
                    <div className={styles.skillTrack}>
                      <div className={styles.skillFill} style={{ '--pct': pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal data-reveal-delay="6">
              <p className={styles.skillsTitle} style={{ marginBottom: 'var(--space-3)' }}>
                Tech Stack
              </p>
              <div className={styles.techGrid}>
                {TECH.map(t => (
                  <span key={t} className={styles.techChip}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
