import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Lightweight parallax hook using GSAP ScrollTrigger scrub.
 * Creates a smooth, scroll-linked vertical offset for an element.
 * Automatically disabled on mobile and reduced-motion.
 *
 * @param {Object} options
 * @param {number} options.speed  Parallax intensity (default: 0.3). Higher = more movement.
 * @param {string} options.direction 'up' or 'down' (default: 'up').
 * @returns {React.RefObject}
 */
const useParallax = (options = {}) => {
  const ref = useRef(null);
  const { speed = 0.3, direction = 'up' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Skip on mobile — parallax is a paint-heavy effect
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const yOffset = direction === 'up' ? -(speed * 100) : speed * 100;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: yOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8, // Smooth interpolation
        },
      });
    });

    return () => ctx.revert();
  }, [speed, direction]);

  return ref;
};

export default useParallax;
