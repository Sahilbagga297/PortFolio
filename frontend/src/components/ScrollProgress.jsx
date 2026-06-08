import React, { useEffect, useRef, useState } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef(null);
  const [supportsScrollTimeline, setSupportsScrollTimeline] = useState(false);

  useEffect(() => {
    // Safely check for CSS animation-timeline support
    try {
      setSupportsScrollTimeline(CSS.supports('animation-timeline', 'scroll()'));
    } catch {
      setSupportsScrollTimeline(false);
    }
  }, []);

  useEffect(() => {
    const el = progressRef.current;
    if (!el || supportsScrollTimeline) return;

    // JS fallback for browsers without animation-timeline support
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [supportsScrollTimeline]);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
      <div
        ref={progressRef}
        className={`h-full w-full bg-gradient-to-r from-gray-400 via-white to-gray-400 origin-left ${
          supportsScrollTimeline ? 'scroll-progress-bar' : ''
        }`}
        style={supportsScrollTimeline ? undefined : { transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default React.memo(ScrollProgress);
