import { useState, useEffect } from 'react';

/**
 * Shared hook to detect mobile viewport (<768px).
 * Used to disable expensive visual effects (backdrop-blur, floating orbs, SVG animations)
 * on mobile devices for smooth 60 FPS scrolling.
 *
 * Uses matchMedia for efficient, debounce-free resize detection.
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial value from matchMedia (more reliable than innerWidth)
    setIsMobile(mql.matches);

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
