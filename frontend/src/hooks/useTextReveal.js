import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered text reveal animation.
 * Splits text into words (or characters) and staggers them in.
 * Falls back to a simple fade on mobile / low-end devices.
 *
 * Usage: Attach the returned ref to a <h2>, <p>, or any text container.
 * The element's existing textContent (or innerHTML) will be split and animated.
 *
 * @param {Object} options
 * @param {'words'|'chars'} options.splitBy   How to split ('words' default).
 * @param {number}          options.duration  Per-element duration (default: 0.6).
 * @param {number}          options.stagger   Stagger between elements (default: 0.04).
 * @param {string}          options.from      Animation origin ('bottom', 'left', 'right', 'blur').
 * @returns {React.RefObject}
 */
const useTextReveal = (options = {}) => {
  const ref = useRef(null);
  const {
    splitBy = 'words',
    duration = 0.6,
    stagger = 0.04,
    from = 'bottom',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, visibility: 'visible' });
      return;
    }

    const isMobile = window.innerWidth < 768;
    const isLowEnd =
      typeof navigator !== 'undefined' &&
      ((navigator.deviceMemory && navigator.deviceMemory <= 4) ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4));

    // On mobile/low-end: simple fade-up instead of splitting
    if (isMobile || isLowEnd) {
      gsap.set(el, { opacity: 0 });
      const ctx = gsap.context(() => {
        gsap.to(el, {
          opacity: 1,
          duration: 0.5,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
      return () => ctx.revert();
    }

    // Split text into span-wrapped fragments
    const text = el.textContent;
    const fragments =
      splitBy === 'chars'
        ? text.split('')
        : text.split(/(\s+)/); // Preserve whitespace tokens

    // Build split HTML
    el.innerHTML = fragments
      .map((frag) => {
        if (/^\s+$/.test(frag)) {
          return frag; // Keep whitespace as-is
        }
        return `<span class="text-reveal-fragment" style="display:inline-block;overflow:hidden"><span class="text-reveal-inner" style="display:inline-block">${frag}</span></span>`;
      })
      .join('');

    const innerSpans = el.querySelectorAll('.text-reveal-inner');

    // Set initial state
    const fromVars = { opacity: 0 };
    if (from === 'bottom') fromVars.y = 20;
    else if (from === 'left') fromVars.x = -20;
    else if (from === 'right') fromVars.x = 20;
    else if (from === 'blur') {
      fromVars.y = 10;
      fromVars.filter = 'blur(4px)';
    }

    gsap.set(innerSpans, fromVars);

    const toVars = {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    };

    const ctx = gsap.context(() => {
      gsap.to(innerSpans, toVars);
    });

    return () => {
      ctx.revert();
      // Restore original text to avoid stale split DOM
      el.textContent = text;
    };
  }, [splitBy, duration, stagger, from]);

  return ref;
};

export default useTextReveal;
