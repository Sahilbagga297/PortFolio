import { useRef } from 'react';
import useInView from '../hooks/useInView';

const SectionWrapper = ({ id, className = '', children, noAnimation = false }) => {
  const [ref, isInView] = useInView({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}
    >
      <div className={`max-w-7xl mx-auto ${!noAnimation ? 'fade-up' : ''} ${isInView ? 'is-visible' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
