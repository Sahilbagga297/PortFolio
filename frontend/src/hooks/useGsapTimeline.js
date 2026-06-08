import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Reusable React hook to create scoped, self-cleaning GSAP timelines.
 * Automatically wraps all animations inside a gsap.context to prevent leaks and ease unmount cleanup.
 * 
 * @param {Function} callback Callback function receiving (timeline, containerElement) to define the animation steps.
 * @param {Array} dependencies React dependency array to trigger timeline recreation if needed.
 * @returns {React.RefObject} Ref to attach to the container element scope.
 */
const useGsapTimeline = (callback, dependencies = []) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check user's preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      callback(tl, container);
    }, container);

    return () => {
      ctx.revert(); // Automatically kills the timeline and resets DOM elements
    };
  }, dependencies);

  return containerRef;
};

export default useGsapTimeline;
