import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

export default function AboutPage() {
  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav-height)' }}>
      <About />
      <Contact />
    </main>
  );
}
