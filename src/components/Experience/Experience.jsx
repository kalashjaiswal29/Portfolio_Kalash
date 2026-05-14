import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Experience.module.css';

const EXPERIENCE = [
  {
    id: 'getintern-founder',
    role: 'Founder & Full Stack Developer',
    company: 'GetIntern.in',
    live: true,
    period: '2026 – Present',
    desc: 'Built and launched GetIntern.in — an MSME-registered virtual internship platform from scratch, scaled to real users.',
    highlights: [
      'Prototyped the complete UI/UX in Figma — establishing a cohesive brand identity — and engineered a responsive frontend using React.',
      'Built a streamlined data pipeline using Google Apps Script to seamlessly synchronize frontend user interactions with Google Sheets.',
      'Drove marketing efforts and facilitated beginner-friendly internship programs for 20+ students, including automated custom certificate generation.',
    ],
    skills: ['Figma', 'React', 'Google Apps Script', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'freelance',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    live: false,
    period: '2026 – Present',
    desc: 'Designed and developed responsive, high-performance websites to help local businesses establish a professional digital presence.',
    highlights: [
      'Successfully managed and delivered 2 distinct client projects from initial concept to live deployment.',
      'Crafted responsive, visually appealing landing pages to drive local customer engagement.',
      'Ensured optimal web performance and SEO best practices for local service businesses.',
    ],
    skills: ['React', 'Vercel', 'GitHub Actions'],
  },
];

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className={`${styles.section} section-padding`}
      id="experience"
      aria-label="Experience"
      ref={sectionRef}
    >
      <div className="container">
        <header className={styles.header} data-reveal data-reveal-delay="1">
          <span className={styles.badge}>My Journey</span>
          <h2 className={styles.title}>
            Work <span className={styles.titleAccent}>Experience</span>
          </h2>
        </header>

        <ol className={styles.timeline}>
          {EXPERIENCE.map(({ id, role, company, live, period, desc, highlights, skills }, idx) => (
            <li key={id} className={styles.item} data-reveal data-reveal-delay={String(idx + 2)}>

              {/* Timeline dot */}
              <div className={styles.dotCol} aria-hidden="true">
                <div className={styles.dot}>
                  <div className={styles.dotInner} />
                </div>
              </div>

              {/* Card */}
              <article className={styles.card} aria-label={`${role} at ${company}`}>

                {/* ── Top row: role + period ── */}
                <div className={styles.cardTop}>
                  <div className={styles.roleGroup}>
                    <h3 className={styles.role}>{role}</h3>
                    <div className={styles.companyWrap}>
                      <span className={styles.companyIcon} aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                          <rect x="1" y="3" width="8" height="6" rx="1" />
                          <path d="M3 3V2a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1" fill="none" />
                        </svg>
                      </span>
                      <span className={styles.company}>{company}</span>
                      {live && (
                        <span className={styles.liveBadge}>
                          <span className={styles.liveDot} aria-hidden="true" />
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                  <time className={styles.period} dateTime={period}>{period}</time>
                </div>

                {/* ── Divider ── */}
                <div className={styles.divider} aria-hidden="true" />

                {/* ── Description ── */}
                <p className={styles.desc}>{desc}</p>

                {/* ── Highlights ── */}
                <p className={styles.highlightsLabel}>Key Highlights</p>
                <ul className={styles.highlights} aria-label="Key achievements">
                  {highlights.map((h, i) => (
                    <li key={i} className={styles.highlight}>
                      <span className={styles.highlightIcon} aria-hidden="true">
                        <span className={styles.highlightArrow} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* ── Skills ── */}
                <div className={styles.skillsSection}>
                  <p className={styles.skillsLabel}>Tech Used</p>
                  <div className={styles.skillTags} aria-label={`Skills: ${skills.join(', ')}`}>
                    {skills.map(s => (
                      <span key={s} className={styles.skillTag}>{s}</span>
                    ))}
                  </div>
                </div>

              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
