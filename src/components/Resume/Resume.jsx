import { GraduationCap, Briefcase, Download } from 'lucide-react';
import styles from './Resume.module.css';

const EDUCATION = [
  {
    title: 'Bachelor of Technology – Computer Science',
    org: 'Your University Name',
    period: '2021 – 2025',
    desc: 'Focused on software engineering, data structures, algorithms, and modern web technologies.',
  },
  {
    title: 'Higher Secondary Education (PCM)',
    org: 'Your School Name',
    period: '2019 – 2021',
    desc: 'Physics, Chemistry, and Mathematics with strong academic performance.',
  },
];

const EXPERIENCE = [
  {
    title: 'Founder & Full Stack Developer',
    org: 'GetIntern.in',
    period: '2023 – Present',
    desc: 'Built and launched an MSME-registered virtual internship platform. Manages task automation, certificate generation, and user roles.',
  },
  {
    title: 'Freelance MERN Developer',
    org: 'Self-Employed',
    period: '2022 – Present',
    desc: 'Delivered multiple client projects including REST APIs, React frontends, and full-stack applications.',
  },
  {
    title: 'Open Source Contributor',
    org: 'GitHub',
    period: '2022 – Present',
    desc: 'Contributing to open-source MERN ecosystem tools and building reusable React component libraries.',
  },
];

export default function Resume() {
  return (
    <section className={`${styles.section} section-padding`} id="resume" aria-label="Resume">
      <div className="container">
        <header className={styles.header}>
          <span className={styles.badge}>My Resume</span>
          <h1 className={styles.title}>
            Education &{' '}
            <span className={styles.titleAccent}>Experience</span>
          </h1>
          <a
            href="/resume.pdf"
            download
            className={styles.downloadBtn}
            id="resume-download-btn"
            aria-label="Download PDF resume"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </header>

        <div className={styles.grid}>
          {/* Education */}
          <div>
            <h2 className={styles.colTitle}>
              <span className={styles.colTitleIcon}><GraduationCap size={16} aria-hidden="true" /></span>
              Education
            </h2>
            <div className={styles.entries}>
              {EDUCATION.map(({ title, org, period, desc }) => (
                <div key={title} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <p className={styles.entryTitle}>{title}</p>
                      <p className={styles.entryOrg}>{org}</p>
                    </div>
                    <span className={styles.entryPeriod}>{period}</span>
                  </div>
                  <p className={styles.entryDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className={styles.colTitle}>
              <span className={styles.colTitleIcon}><Briefcase size={16} aria-hidden="true" /></span>
              Experience
            </h2>
            <div className={styles.entries}>
              {EXPERIENCE.map(({ title, org, period, desc }) => (
                <div key={title} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <p className={styles.entryTitle}>{title}</p>
                      <p className={styles.entryOrg}>{org}</p>
                    </div>
                    <span className={styles.entryPeriod}>{period}</span>
                  </div>
                  <p className={styles.entryDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
