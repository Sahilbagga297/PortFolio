import { useState, useEffect, useRef } from 'react';

const useScrollSpy = (sectionIds, options = {}) => {
  const { offset = 100, threshold = 0.3 } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    // Set initial section from URL hash
    handleHashChange();

    const observerCallback = (entries) => {
      // Find the entry that is most visible
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Pick the one with the highest intersection ratio
        const mostVisible = visibleEntries.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        
        const id = mostVisible.target.id;
        if (id && id !== activeSection) {
          setActiveSection(id);
          // Update URL hash without adding to history stack
          window.history.replaceState(null, '', `#${id}`);
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      rootMargin: `-${offset}px 0px -40% 0px`,
      threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
    });

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionIds, offset, threshold]);

  return activeSection;
};

export default useScrollSpy;
