import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

export default function HomePage() {
  return (
    <main id="main-content" aria-label="Home page content">
      <Hero />
      <Services />
      <Experience />
      <Projects limitTo={4} />
      <Contact />
    </main>
  );
}
