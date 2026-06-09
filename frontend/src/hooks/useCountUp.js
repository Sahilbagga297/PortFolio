import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered counting animation for numbers.
 * Uses IntersectionObserver to trigger and requestAnimationFrame for smooth 60fps counting.
 * Completely JavaScript-based, no GSAP dependency, ultra-lightweight.
 *
 * @param {number} end       The target number to count to.
 * @param {number} duration  Duration in ms (default: 1800).
 * @param {string} suffix    Optional suffix (e.g., '+', '%').
 * @returns {{ ref: React.RefObject, displayValue: string }}
 */
const useCountUp = (end, duration = 1800, suffix = '') => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState('0' + suffix);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion — show final value instantly
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(end + suffix);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * end);
            setDisplayValue(current + suffix);

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, suffix]);

  return { ref, displayValue };
};

export default useCountUp;
