import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';

export default function ResumePage() {
  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav-height)' }}>
      <Resume />
      <Contact />
    </main>
  );
}
