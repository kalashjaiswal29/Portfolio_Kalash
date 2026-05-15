import { useEffect, useRef, useState, useCallback } from 'react';
import { Code2, Users2, Mail, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const SOCIALS = [
  { icon: Code2, href: 'https://github.com/kalashjaiswal29', label: 'GitHub' },
  { icon: Users2, href: 'https://www.linkedin.com/in/kalash-jaiswal-15bb6b323/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kalashjaiswal57@gmail.com', label: 'Email' },
];

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(null);
  const heroRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const hero = heroRef.current;
      if (!hero) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.55)));
      setScrollProgress(progress);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  /* Aurora morphs from warm orange-right / purple-left → centered purple as we scroll */
  const auroraStyle = {
    '--aurora-a-x': `${75 - scrollProgress * 25}%`,   // orange orb drifts left
    '--aurora-a-op': `${0.22 - scrollProgress * 0.08}`, // dims slightly
    '--aurora-b-x': `${25 + scrollProgress * 25}%`,   // purple orb drifts right
    '--aurora-b-op': `${0.12 + scrollProgress * 0.06}`, // brightens slightly
    '--grid-op': `${0.04 - scrollProgress * 0.02}`, // grid fades
  };

  return (
    <section className={styles.hero} ref={heroRef} id="hero" aria-label="Hero section">

      {/* ── Aurora background ─────────────────────────────────── */}
      <div className={styles.aurora} aria-hidden="true" style={auroraStyle}>
        <div className={styles.auroraOrbA} />
        <div className={styles.auroraOrbB} />
        <div className={styles.dotGrid} />
      </div>

      {/* ── Noise grain ───────────────────────────────────────── */}
      <div className={styles.noise} aria-hidden="true" />

      {/* ── Main content ──────────────────────────────────────── */}
      <div className={styles.content}>
        <div className={`container ${styles.inner}`}>

          {/* Left: Text column */}
          <div className={styles.textCol}>
            <span className={styles.greetBadge}>
              <span className={styles.greetDot} aria-hidden="true" />
              Available for opportunities
            </span>

            <div className={styles.headline}>
              <h1 className={styles.h1}>
                Hi, I'm{' '}
                <span className={styles.h1Accent}>Kalash Jaiswal.</span>
              </h1>
              <p className={styles.h2Role}>Full Stack MERN Developer.</p>
            </div>

            <p className={styles.tagline}>
              Crafting engaging frontend UIs and architecting robust backend systems. From concept to production, I build scalable digital products that deliver seamless user experiences.</p>

            <div className={styles.ctaRow}>
              <Link to="/project" className={styles.btnPrimary} id="hero-portfolio-btn">
                <ExternalLink size={16} aria-hidden="true" />
                Portfolio
              </Link>

              <a
                href="https://drive.google.com/file/d/16xM56eVytGk2GkrN8FNnWeB6NXQQUsaf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
                id="hero-view-cv-btn"
              >
                <FileText size={16} aria-hidden="true" />
                View CV
              </a>
            </div>

            <div className={styles.socialStrip} aria-label="Social media links">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={label}
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className={styles.statsRow} aria-label="Key stats">
              {/* <div className={styles.stat}>
                <span className={styles.statNum}>1+</span>
                <span className={styles.statLabel}>Yrs Experience</span>
              </div> */}
              <div className={styles.stat}>
                <span className={styles.statNum}>3+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>1</span>
                <span className={styles.statLabel}>Startup Founded</span>
              </div>
            </div>
          </div>

          {/* Right: Profile column */}
          <div className={styles.profileCol}>
            <div className={styles.profileFrame} aria-label="Profile photo">
              <div className={styles.profileOrb} aria-hidden="true" />
              <div className={styles.profileRingOuter} aria-hidden="true" />
              <div className={styles.profileRingInner} aria-hidden="true" />
              <div className={styles.profileImgWrap}>
                <img
                  src="/Kalash.jpeg"
                  alt="Kalash Jaiswal"
                  className={styles.profileImg}
                />
              </div>
              <div className={styles.profileBadge} aria-label="Currently building status">
                <span className={styles.badgeDot} aria-hidden="true" />
                <span className={styles.badgeText}>Building GetIntern.in</span>
              </div>
            </div>
          </div>

        </div>
      </div>



    </section>
  );
}
