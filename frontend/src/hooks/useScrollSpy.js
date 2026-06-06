import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, options = {}) => {
  const { offset = 100 } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

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

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
