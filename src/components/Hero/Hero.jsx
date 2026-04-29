import { useEffect, useRef, useState, useCallback } from 'react';
import { Code2, Users2, MessageSquare, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

/* ---- Swirl symbol definitions ---- */
const SWIRL_SYMBOLS = [
  { char: '♥', x: 72, y: 18, size: '1.6rem', dur: '9s',  delay: '0s'   },
  { char: '★', x: 85, y: 42, size: '1.2rem', dur: '11s', delay: '-2s'  },
  { char: '✦', x: 60, y: 70, size: '1.8rem', dur: '7s',  delay: '-4s'  },
  { char: '◆', x: 90, y: 65, size: '1rem',   dur: '13s', delay: '-1s'  },
  { char: '✿', x: 65, y: 30, size: '1.4rem', dur: '10s', delay: '-5s'  },
  { char: '☽', x: 78, y: 80, size: '1.5rem', dur: '8s',  delay: '-3s'  },
  { char: '❋', x: 55, y: 55, size: '1.1rem', dur: '12s', delay: '-1.5s'},
  { char: '⊕', x: 92, y: 28, size: '1.3rem', dur: '9.5s',delay: '-6s'  },
  { char: '♦', x: 68, y: 88, size: '0.9rem', dur: '14s', delay: '-2.5s'},
  { char: '✶', x: 82, y: 55, size: '1.7rem', dur: '8.5s',delay: '-7s'  },
];

const SOCIALS = [
  { icon: Code2,        href: 'https://github.com/kalashjaiswal',    label: 'GitHub'   },
  { icon: Users2,       href: 'https://linkedin.com/in/kalashjaiswal', label: 'LinkedIn' },
  { icon: MessageSquare,href: 'https://twitter.com/kalashjaiswal',   label: 'Twitter'  },
];

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0); // 0 = top, 1 = fully scrolled
  const rafRef   = useRef(null);
  const heroRef  = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return; // already queued
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const hero = heroRef.current;
      if (!hero) return;
      const scrollY    = window.scrollY;
      const threshold  = hero.offsetHeight * 0.45; // transition happens over 45% of hero height
      const progress   = Math.min(1, Math.max(0, scrollY / threshold));
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

  // Derived opacities
  const ghostOpacity = Math.max(0, 1 - scrollProgress * 2);   // fades out first
  const swirlOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.3) * 2.5)); // fades in after 30% scroll

  return (
    <section className={styles.hero} ref={heroRef} id="hero" aria-label="Hero section">
      {/* --- Background Layer: Ghost Name --- */}
      <div
        className={styles.bgGhostName}
        aria-hidden="true"
        style={{ opacity: ghostOpacity }}
      >
        <span className={styles.ghostNameText}>KALASH JAISWAL</span>
      </div>

      {/* --- Background Layer: Swirl Texture --- */}
      <div
        className={styles.bgSwirl}
        aria-hidden="true"
        style={{ opacity: swirlOpacity }}
      >
        <div className={styles.swirlGradient} />
        <div className={styles.swirlCanvas}>
          {SWIRL_SYMBOLS.map((s, i) => (
            <span
              key={i}
              className={styles.swirlSymbol}
              style={{
                left:       `${s.x}%`,
                top:        `${s.y}%`,
                fontSize:   s.size,
                '--duration': s.dur,
                '--delay':    s.delay,
              }}
            >
              {s.char}
            </span>
          ))}
        </div>
      </div>

      {/* --- Subtle noise overlay --- */}
      <div className={styles.noise} aria-hidden="true" />

      {/* --- Main Content --- */}
      <div className={styles.content}>
        <div className={`container ${styles.inner}`}>
          {/* Left: Text Column */}
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
              Building robust backend architectures and seamless user experiences.
              From idea to production — I craft digital products that scale.
            </p>

            <div className={styles.ctaRow}>
              <Link to="/project" className={styles.btnPrimary} id="hero-portfolio-btn">
                <ExternalLink size={16} aria-hidden="true" />
                Portfolio
              </Link>
              <Link to="/contact" className={styles.btnOutline} id="hero-hire-btn">
                Hire Me
              </Link>
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
              <div className={styles.stat}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Yrs Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>1</span>
                <span className={styles.statLabel}>Startup Founded</span>
              </div>
            </div>
          </div>

          {/* Right: Profile Column */}
          <div className={styles.profileCol}>
            <div className={styles.profileFrame} aria-label="Profile photo">
              <div className={styles.profileOrb} aria-hidden="true" />
              <div className={styles.profileRingOuter} aria-hidden="true" />
              <div className={styles.profileRingInner} aria-hidden="true" />
              <div className={styles.profileImgWrap}>
                <div className={styles.profileFallback} aria-hidden="true">KJ</div>
              </div>
              <div className={styles.profileBadge} aria-label="Currently building status">
                <span className={styles.badgeDot} aria-hidden="true" />
                <span className={styles.badgeText}>Building GetIntern.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
