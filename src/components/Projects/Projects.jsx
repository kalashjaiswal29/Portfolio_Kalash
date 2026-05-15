import { useState, useEffect, useCallback, useRef } from 'react';
import { Code2, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

/* ── Attendance slideshow images ─────────────────────────────── */
const ATTENDANCE_SLIDES = [
  '/Screenshot 2026-05-15 233955.webp',
  '/Screenshot 2026-05-15 234012.webp',
  '/Screenshot 2026-05-15 234033.webp',
];

/* ── BuddyChat slideshow images (1902×958 ≈ 2:1) ─────────────── */
const BUDDYCHAT_SLIDES = [
  '/Screenshot 2026-05-16 002625.webp',
  '/Screenshot 2026-05-16 002645.webp',
];

const PROJECTS = [
  {
    id: 'getintern',
    title: 'GetIntern.in',
    desc: 'MSME-registered virtual internship platform. Full task management',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    status: 'live',
    featured: true,
    gradient: 'linear-gradient(135deg, #1a1040 0%, #2d1b4e 50%, #1a0a2e 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: 'https://getintern.in',
    label: 'GetIntern',
    video: '/Screen Recording 2026-05-16 000534.mp4',
  },
  {
    id: 'airbnb-clone',
    title: 'Airbnb Clone',
    desc: 'Full-featured property listing platform with map integration, user auth, host/guest flows, and booking system.',
    tags: ['React', 'Node.js', 'MongoDB', 'Maps API'],
    status: 'complete',
    featured: false,
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #3b0f0f 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: null,
    label: 'Airbnb',
  },
  {
    id: 'smart-attendance',
    title: 'Smart AI Attendance',
    desc: 'AI-powered attendance system using computer vision, face recognition, and liveness detection. Socket.io for real-time updates.',
    tags: ['React', 'Python', 'FastAPI', 'Socket.io', 'OpenCV'],
    status: 'complete',
    featured: false,
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #0f3b1a 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: 'https://coa-project-updated-blush.vercel.app/student/login',
    label: 'AttendAI',
    slides: ATTENDANCE_SLIDES,
  },
  {
    id: 'buddy-chat',
    title: 'Buddy Chat',
    desc: 'Real-time P2P chat and video calling app using WebRTC and Socket.io. Supports rooms, messaging, and peer video sessions.',
    tags: ['React', 'Socket.io', 'WebRTC', 'Node.js'],
    status: 'wip',
    featured: false,
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1040 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: null,
    label: 'BuddyChat',
    slides: BUDDYCHAT_SLIDES,
  },
  {
    id: 'premium-auth',
    title: 'Premium Auth UI',
    desc: 'Production-ready authentication UI kit with dark mode, glassmorphism, animated transitions, and full JWT auth flow.',
    tags: ['React', 'CSS Modules', 'JWT', 'Node.js'],
    status: 'complete',
    featured: false,
    gradient: 'linear-gradient(135deg, #130a1a 0%, #2d1040 100%)',
    github: 'https://github.com/kalashjaiswal',
    demo: null,
    label: 'Auth UI',
  },
];

const STATUS_LABELS = { live: 'Live', wip: 'WIP', complete: 'Completed' };

/* ── Shared: pause when scrolled away OR tab is backgrounded ─── */
function useIsVisible(ref, threshold = 0.25) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver — is the element on screen?
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!document.hidden) setVisible(entry.isIntersecting);
      },
      { threshold }
    );
    io.observe(el);

    // Page Visibility API — did the user switch tabs / minimise?
    const onVisChange = () => {
      if (document.hidden) {
        setVisible(false);
      } else {
        // Re-evaluate intersection when tab becomes active again
        const entries = io.takeRecords();
        if (entries.length) setVisible(entries[entries.length - 1].isIntersecting);
      }
    };
    document.addEventListener('visibilitychange', onVisChange);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisChange);
    };
  }, [ref, threshold]);

  return visible;
}

/* ── Slideshow sub-component ─────────────────────────────────── */
function ProjectSlideshow({ slides, gradient, label }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const rootRef = useRef(null);
  const visible = useIsVisible(rootRef);

  const goTo = useCallback(
    (idx) => {
      if (idx === active) return;
      setFading(true);
      setTimeout(() => {
        setActive(idx);
        setFading(false);
      }, 350);
    },
    [active]
  );

  /* Auto-advance every 3 s — only while the card is visible */
  useEffect(() => {
    if (!visible) return; // paused — nothing running
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 350);
    }, 3000);
    return () => clearInterval(id);
  }, [visible, slides.length]);

  return (
    <div className={styles.slideshow} ref={rootRef}>
      {/* Slides */}
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${label} screenshot ${i + 1}`}
          className={`${styles.slide} ${i === active ? styles.slideActive : ''} ${i === active && fading ? styles.slideFading : ''
            }`}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className={styles.slideshowOverlay} />

      {/* Dots */}
      <div className={styles.slideDots} role="tablist" aria-label="Slideshow navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}`}
            className={`${styles.slideDot} ${i === active ? styles.slideDotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Video preview sub-component ─────────────────────────────── */
function ProjectVideo({ src, label }) {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const visible = useIsVisible(wrapRef);

  /* Play/pause based on viewport visibility */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (visible) {
      video.play().catch(() => { }); // swallow autoplay-policy errors
    } else {
      video.pause();
    }
  }, [visible]);

  /* Additionally react to tab visibility changes */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onVisChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (visible) {
        video.play().catch(() => { });
      }
    };
    document.addEventListener('visibilitychange', onVisChange);
    return () => document.removeEventListener('visibilitychange', onVisChange);
  }, [visible]);

  return (
    <div className={styles.videoWrap} ref={wrapRef}>
      <video
        ref={videoRef}
        className={styles.videoEl}
        src={src}
        muted
        loop
        playsInline
        aria-label={`${label} demo video`}
      />
      {/* Dark overlay to harmonise the bright video with the dark card theme */}
      <div className={styles.videoOverlay} />
    </div>
  );
}

export default function Projects({ limitTo = null }) {
  const displayed = limitTo ? PROJECTS.slice(0, limitTo) : PROJECTS;
  const sectionRef = useScrollReveal();

  return (
    <section
      className={`${styles.section} section-padding`}
      id="projects"
      aria-label="Portfolio Projects"
      ref={sectionRef}
    >
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className="container">
        <header className={styles.header} data-reveal data-reveal-delay="1">
          <div className={styles.headerLeft}>
            <span className={styles.badge}>Selected Work</span>
            <h2 className={styles.title}>
              My <span className={styles.titleAccent}>Work</span>
            </h2>
          </div>
          <Link to="/project" className={styles.seeAllBtn} id="see-all-projects-btn">
            See All Projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </header>

        <div className={styles.grid}>
          {displayed.map(({ id, title, desc, tags, status, featured, gradient, github, demo, label, slides, video }, idx) => (
            <article
              key={id}
              className={`${styles.card}${featured ? ' ' + styles.featured : ''}`}
              aria-label={`Project: ${title}`}
              data-reveal
              data-reveal-delay={String(Math.min(idx + 2, 7))}
            >
              {/* Media */}
              <div
                className={`${styles.cardMedia}${slides ? ' ' + styles.cardMediaSlideshow
                  : video ? ' ' + styles.cardMediaVideo
                    : ''
                  }`}
              >
                {slides ? (
                  <ProjectSlideshow slides={slides} gradient={gradient} label={label} />
                ) : video ? (
                  <ProjectVideo src={video} label={label} />
                ) : (
                  <div
                    className={styles.cardMediaPlaceholder}
                    style={{ '--gradient': gradient }}
                  >
                    {label}
                  </div>
                )}

                <div className={styles.cardBadgeRow}>
                  <span className={styles.statusBadge} data-status={status}>
                    {STATUS_LABELS[status]}
                  </span>
                  <div className={styles.cardLinks}>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`GitHub repository for ${title}`}
                    >
                      <Code2 size={14} aria-hidden="true" />
                    </a>
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                        aria-label={`Live demo of ${title}`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
                <div className={styles.cardTags} aria-label={`Technologies: ${tags.join(', ')}`}>
                  {tags.map((t) => (
                    <span key={t} className={styles.cardTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
