import { GraduationCap, Briefcase, FileText } from 'lucide-react';
import styles from './Resume.module.css';

const EDUCATION = [
  {
    title: 'Bachelor of Technology – Computer Science',
    org: 'Shri Mata Vaishno Devi University Katra',
    period: '2024 – 2028',
    desc: 'Applying core computer science principles to real-world software engineering. Deeply focused on mastering data structures, optimizing algorithms, and architecting scalable web applications.',
  },
  {
    title: 'Higher Secondary Education (PCM)',
    org: 'GN National Public School Gorakhnath GKP',
    period: '2022 – 2024',
    desc: 'Physics, Chemistry, and Mathematics with strong academic performance.',
  },
];

const EXPERIENCE = [
  {
    title: 'Founder & Full Stack Developer',
    org: 'GetIntern.in',
    period: '2026 – Present',
    desc: 'Built and launched an MSME-registered virtual internship platform. Manages task automation, certificate generation.',
  },
  {
    title: 'Freelance MERN Developer',
    org: 'Self-Employed',
    period: '2026 – Present',
    desc: 'Designed and developed responsive, high-performance static websites to help local businesses establish a professional digital presence.',
  },
  {
    title: 'Open Source Contributor',
    org: 'GitHub',
    period: '2026 – Present',
    desc: 'Contributing to open-source MERN ecosystem tools.',
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
            href="https://drive.google.com/file/d/16xM56eVytGk2GkrN8FNnWeB6NXQQUsaf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
            id="hero-view-cv-btn"
          >
            <FileText size={16} aria-hidden="true" />
            View CV
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
