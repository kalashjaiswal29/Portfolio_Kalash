import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';

export default function ServicePage() {
  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav-height)' }}>
      <Services />
      <Contact />
    </main>
  );
}
