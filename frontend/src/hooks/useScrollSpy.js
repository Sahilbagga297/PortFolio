import { useState, useEffect, useRef } from 'react';

const useScrollSpy = (sectionIds, options = {}) => {
  const { offset = 100 } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const rafId = useRef(null);
  const replaceStateTimer = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    // Throttled via RAF — runs at most once per frame (~16ms)
    const updateActiveSection = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        let current = sectionIds[0];

        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element && element.getBoundingClientRect().top <= offset) {
            current = id;
          }
        }

        setActiveSection((prev) => {
          if (prev !== current) {
            // Debounce replaceState — expensive browser operation, delay until user stops scrolling
            clearTimeout(replaceStateTimer.current);
            replaceStateTimer.current = setTimeout(() => {
              window.history.replaceState(null, '', `#${current}`);
            }, 300);
            return current;
          }
          return prev;
        });

        rafId.current = null;
      });
    };

    handleHashChange();
    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', handleHashChange);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      clearTimeout(replaceStateTimer.current);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
