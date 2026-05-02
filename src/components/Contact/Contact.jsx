import { useState } from 'react';
import { Send, Mail, MapPin, Code2, Users2, MessageSquare, Rocket } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

const SOCIALS = [
  { icon: Code2, href: 'https://github.com/kalashjaiswal', label: 'GitHub' },
  { icon: Users2, href: 'https://linkedin.com/in/kalashjaiswal', label: 'LinkedIn' },
  { icon: MessageSquare, href: 'https://twitter.com/kalashjaiswal', label: 'Twitter' },
];

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.footerInner}`}>
        <span className={styles.footerBrand} style={{ color: '#FAF3E1' }}>
          J<span className={styles.footerBrandAccent}>Kalash</span>
        </span>
        <p className={styles.footerCopy}>
          © {new Date().getFullYear()}{' '}
          <span className={styles.footerCopyAccent}>Kalash Jaiswal</span>. All rights reserved.
        </p>
        <div className={styles.footerSocials} aria-label="Social media links">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialBtn}
              aria-label={label}
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Contact() {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [ctaSent, setCtaSent] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const ctaRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setCtaSent(true); setEmail(''); }
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* ---- CTA Banner ---- */}
      <section
        className={`${styles.ctaSection} section-padding`}
        id="cta"
        aria-label="Project CTA"
        ref={ctaRef}
      >
        <div className={styles.ctaBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.ctaInner} data-reveal data-reveal-delay="1">
            <span className={styles.ctaEmoji} aria-hidden="true">🚀</span>
            <span className={styles.ctaBadge}>Let's Collaborate</span>
            <h2 className={styles.ctaTitle}>
              Have an{' '}
              <span className={styles.ctaTitleAccent}>Awesome Project</span>{' '}
              Idea?
            </h2>
            <p className={styles.ctaSubtitle}>
              Drop your email and I'll reach out to discuss how we can bring your idea to life.
              No spam — just great conversations.
            </p>
            {ctaSent ? (
              <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                ✓ Got it! I'll be in touch soon.
              </p>
            ) : (
              <form className={styles.emailForm} onSubmit={handleCtaSubmit} aria-label="Email signup form">
                <input
                  id="cta-email-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={styles.emailInput}
                  required
                  aria-label="Your email address"
                />
                <button type="submit" className={styles.emailSubmit} id="cta-submit-btn">
                  <Rocket size={15} aria-hidden="true" />
                  Let's Talk
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ---- Full Contact Form ---- */}
      <section
        className={`${styles.formSection} section-padding`}
        id="contact"
        aria-label="Contact Form"
        ref={formRef}
      >
        <div className={styles.formSectionBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.formGrid}>
            {/* Left info */}
            <div className={styles.formInfo} data-reveal="left" data-reveal-delay="1">
              <span className={styles.formInfoBadge}>Get In Touch</span>
              <h2 className={styles.formInfoTitle}>
                Let's Build{' '}
                <span className={styles.formInfoTitleAccent}>Something</span>{' '}
                Great
              </h2>
              <p className={styles.formInfoDesc}>
                Whether you have a full project, a freelance request, or just want to say hi —
                I'm open to conversations. Fill the form or reach out directly.
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><Mail size={16} aria-hidden="true" /></div>
                  <a href="mailto:kalash@getintern.in">kalash@getintern.in</a>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><MapPin size={16} aria-hidden="true" /></div>
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className={styles.formRightCol}>
              {formSent ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', padding: 'var(--space-12)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
                  <span style={{ fontSize: '3rem' }}>🎉</span>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-accent)' }}>
                    Message Sent!
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                    Thanks for reaching out. I'll reply within 24 hours.
                  </p>
                  <button onClick={() => setFormSent(false)} style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit' }}>
                    Send another →
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleFormSubmit} aria-label="Contact form" noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.formLabel} htmlFor="contact-name">Full Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className={styles.formInput}
                        required
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.formLabel} htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@example.com"
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formFieldStandalone}>
                    <label className={styles.formLabel} htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleFormChange}
                      placeholder="Project Collaboration"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  <div className={styles.formFieldStandalone}>
                    <label className={styles.formLabel} htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell me about your project idea..."
                      className={styles.formTextarea}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.formSubmit} id="contact-submit-btn">
                    <Send size={16} aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
