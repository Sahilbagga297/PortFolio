import { useState, useEffect } from 'react';
import { useLenisContext } from '../context/LenisContext';

const useScrollSpy = (sectionIds, options = {}) => {
  const { offset = 100 } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const lenis = useLenisContext();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    const updateActiveSection = () => {
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveSection((prev) => {
        if (prev !== current) {
          window.history.replaceState(null, '', `#${current}`);
          return current;
        }
        return prev;
      });
    };

    handleHashChange();
    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    lenis?.on('scroll', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', handleHashChange);
      lenis?.off('scroll', updateActiveSection);
    };
  }, [sectionIds, offset, lenis]);

  return activeSection;
};

export default useScrollSpy;
