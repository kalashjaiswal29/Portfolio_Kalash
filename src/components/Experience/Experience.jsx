import styles from './Experience.module.css';

const EXPERIENCE = [
  {
    id: 'getintern-founder',
    role: 'Founder & Full Stack Developer',
    company: 'GetIntern.in',
    live: true,
    period: '2023 – Present',
    desc: 'Built and launched GetIntern.in — an MSME-registered virtual internship platform from scratch. Designed end-to-end architecture, led product decisions, and scaled to real users.',
    highlights: [
      'Architected the entire platform from DB schema to deployment on a VPS.',
      'Built an automated internship task management system with real-time status tracking.',
      'Engineered a certificate generation engine — PDF certificates auto-generated upon task completion.',
      'Implemented role-based auth (admin / intern) with JWT and refresh tokens.',
      'Handled MSME registration and compliance documentation independently.',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'PDF Generation'],
  },
  {
    id: 'freelance',
    role: 'Freelance MERN Developer',
    company: 'Self-Employed',
    live: false,
    period: '2022 – Present',
    desc: 'Delivered custom web applications and REST API backends for clients ranging from startups to SMEs. Focused on clean code, documentation, and performance.',
    highlights: [
      'Developed and delivered 5+ client projects end-to-end.',
      'Built Auth UI kits and reusable React component libraries.',
      'Set up CI/CD pipelines for automated deployments on Vercel and Render.',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Vercel', 'GitHub Actions'],
  },
];

export default function Experience() {
  return (
    <section className={`${styles.section} section-padding`} id="experience" aria-label="Experience">
      <div className="container">
        <header className={styles.header}>
          <span className={styles.badge}>My Journey</span>
          <h2 className={styles.title}>
            Work <span className={styles.titleAccent}>Experience</span>
          </h2>
        </header>

        <ol className={styles.timeline}>
          {EXPERIENCE.map(({ id, role, company, live, period, desc, highlights, skills }) => (
            <li key={id} className={styles.item}>
              {/* Timeline dot */}
              <div className={styles.dotCol} aria-hidden="true">
                <div className={styles.dot}>
                  <div className={styles.dotInner} />
                </div>
              </div>

              {/* Card */}
              <article className={styles.card} aria-label={`${role} at ${company}`}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{role}</h3>
                    <div className={styles.companyWrap}>
                      <span className={styles.company}>{company}</span>
                      {live && (
                        <span className={styles.liveBadge}>
                          <span className={styles.liveDot} aria-hidden="true" />
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                  <span className={styles.period}>{period}</span>
                </div>

                <p className={styles.desc}>{desc}</p>

                <ul className={styles.highlights} aria-label="Key achievements">
                  {highlights.map((h, i) => (
                    <li key={i} className={styles.highlight}>
                      <span className={styles.highlightDot} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={styles.skillTags} aria-label={`Skills: ${skills.join(', ')}`}>
                  {skills.map(s => (
                    <span key={s} className={styles.skillTag}>{s}</span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
