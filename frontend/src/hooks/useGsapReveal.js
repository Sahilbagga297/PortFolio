import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable hook to create scroll-triggered entry animations using GSAP & ScrollTrigger.
 * Automatically respects motion preferences and optimizes animations for low-end mobile hardware.
 * 
 * @param {Object} options Configuration parameters.
 * @param {string} options.animation Animation type ('fade-up', 'slide-in-left', 'slide-in-right', 'scale-in', 'stagger-children').
 * @param {number} options.duration Animation duration in seconds (default: 0.8).
 * @param {number} options.delay Animation start delay in seconds (default: 0).
 * @param {number} options.stagger Stagger duration for child elements (default: 0.12).
 * @param {Object} options.scrollTriggerOptions Overrides for ScrollTrigger settings.
 * @returns {React.RefObject} Ref to attach to the element.
 */
const useGsapReveal = (options = {}) => {
  const elementRef = useRef(null);
  const {
    animation = 'fade-up',
    duration = 0.8,
    delay = 0,
    stagger = 0.12,
    scrollTriggerOptions = {},
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check user's preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Instantly reveal element
      gsap.set(element, { opacity: 1, visibility: 'visible', y: 0, x: 0, scale: 1 });
      return;
    }

    // Hardware check: Detect low-memory or low-concurrency devices to prevent animation lag
    const isLowEndDevice =
      (typeof navigator !== 'undefined') && (
        (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
        /Mobi|Android|iPhone/i.test(navigator.userAgent) && window.innerWidth < 768 && (!navigator.deviceMemory || navigator.deviceMemory <= 4)
      );

    const triggerSettings = {
      trigger: element,
      start: 'top 88%',
      toggleActions: 'play none none none',
      ...scrollTriggerOptions,
    };

    let ctx = gsap.context(() => {
      // 1. Simplified animation mode for low-end mobile devices (60 FPS fallback)
      if (isLowEndDevice) {
        // Fall back to a lightweight, hardware-accelerated opacity animation (no layout repaint/reflow)
        gsap.set(element, { opacity: 0 });
        gsap.to(element, {
          opacity: 1,
          duration: Math.min(duration, 0.5), // Faster animations feel smoother on low-end
          delay,
          ease: 'sine.out',
          scrollTrigger: triggerSettings,
        });
        return;
      }

      // 2. Premium high-performance animations for capable devices
      if (animation === 'fade-up') {
        gsap.set(element, { opacity: 0, y: 25 });
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: triggerSettings,
        });
      } else if (animation === 'slide-in-left') {
        gsap.set(element, { opacity: 0, x: -35 });
        gsap.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: triggerSettings,
        });
      } else if (animation === 'slide-in-right') {
        gsap.set(element, { opacity: 0, x: 35 });
        gsap.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: triggerSettings,
        });
      } else if (animation === 'scale-in') {
        gsap.set(element, { opacity: 0, scale: 0.96 });
        gsap.to(element, {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: triggerSettings,
        });
      } else if (animation === 'stagger-children') {
        const children = element.children;
        if (children.length > 0) {
          gsap.set(children, { opacity: 0, y: 20 });
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'power2.out',
            scrollTrigger: triggerSettings,
          });
        }
      }
    });

    return () => {
      ctx.revert(); // Automatically reverts all tweens and cleans up ScrollTriggers
    };
  }, [animation, duration, delay, stagger, JSON.stringify(scrollTriggerOptions)]);

  return elementRef;
};

export default useGsapReveal;
