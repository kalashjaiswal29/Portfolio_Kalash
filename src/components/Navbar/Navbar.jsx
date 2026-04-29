import { useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',    to: '/'        },
  { label: 'About',   to: '/about'   },
  { label: 'Service', to: '/service' },
  { label: 'Resume',  to: '/resume'  },
  { label: 'Project', to: '/project' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const navigate = useNavigate();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar}${scrolled ? ' ' + styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
        <div className={`container ${styles.inner}`}>
          {/* Brand */}
          <button
            className={styles.brand}
            onClick={() => navigate('/')}
            aria-label="Go to home page"
          >
            <span className={styles.logoRing} aria-hidden="true">
              <span className={styles.logoRingCircle} />
              <span className={styles.logoInitials}>KJ</span>
            </span>
            <span className={styles.brandText}>
              J<span className={styles.brandAccent}>CREA</span>
            </span>
          </button>

          {/* Desktop Links */}
          <ul className={styles.navLinks} role="list">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink}${isActive ? ' ' + styles.active : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <NavLink to="/contact" className={styles.navCta} aria-label="Hire me page">
            <Briefcase size={15} aria-hidden="true" />
            Hire Me
          </NavLink>

          {/* Mobile hamburger */}
          <button
            className={`${styles.mobileToggle}${menuOpen ? ' ' + styles.open : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`${styles.mobileMenu}${menuOpen ? ' ' + styles.open : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.mobileNavLink}${isActive ? ' ' + styles.active : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
