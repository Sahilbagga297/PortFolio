import React from 'react';
import useInView from '../hooks/useInView';

/**
 * Animated section separator — gradient line that grows from center on scroll.
 * Uses lightweight IntersectionObserver, no GSAP overhead.
 */
const AnimatedDivider = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 py-2">
      <div
        className={`w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent transition-transform duration-1000 ease-out origin-center ${
          isInView ? 'scale-x-100' : 'scale-x-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
      />
    </div>
  );
};

export default React.memo(AnimatedDivider);
