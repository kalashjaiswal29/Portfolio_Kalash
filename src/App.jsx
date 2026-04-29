import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage    from './pages/HomePage';
import AboutPage   from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ResumePage  from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 9999,
          padding: '8px 16px',
          background: 'var(--color-accent)',
          color: '#fff',
          borderRadius: '0 0 8px 8px',
          fontWeight: 600,
        }}
        onFocus={e => { e.target.style.left = '50%'; e.target.style.transform = 'translateX(-50%)'; }}
        onBlur={e => { e.target.style.left = '-9999px'; e.target.style.transform = ''; }}
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/"        element={<HomePage    />} />
        <Route path="/about"   element={<AboutPage   />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/resume"  element={<ResumePage  />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <main
              id="main-content"
              style={{
                paddingTop: 'var(--nav-height)',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '4rem' }}>🔍</span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                404
              </h1>
              <p style={{ color: 'var(--color-text-muted)' }}>
                This page doesn't exist yet.
              </p>
              <a
                href="/"
                style={{
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, var(--color-accent), #ea580c)',
                  color: '#fff',
                  fontWeight: 600,
                  display: 'inline-flex',
                }}
              >
                Go Home
              </a>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
