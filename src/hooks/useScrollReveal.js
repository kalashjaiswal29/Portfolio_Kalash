import { useEffect, useRef } from 'react';

/**
 * Adds the CSS class `revealClass` to each element matched by `selector`
 * within `rootRef` once it enters the viewport.
 *
 * Usage:
 *   const sectionRef = useScrollReveal();
 *   <section ref={sectionRef} ...>
 *     <div data-reveal>...</div>     ← fades up (default)
 *     <div data-reveal="left">...</div>  ← slides from left
 *     <div data-reveal="right">...</div>
 *     <div data-reveal="scale">...</div>
 *   </section>
 */
export function useScrollReveal(selector = '[data-reveal]', threshold = 0.05) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = root.querySelectorAll(selector);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', /* trigger 40px before bottom edge */
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);

  return rootRef;
}
