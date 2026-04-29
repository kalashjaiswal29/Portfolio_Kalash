import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

export default function ProjectPage() {
  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav-height)' }}>
      <Projects />
      <Contact />
    </main>
  );
}
