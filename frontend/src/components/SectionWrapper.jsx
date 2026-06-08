import useGsapReveal from '../hooks/useGsapReveal';

const SectionWrapper = ({ id, className = '', children, noAnimation = false }) => {
  // Apply GSAP scroll trigger animation to the section container (unless animated children are handled locally)
  const ref = useGsapReveal({
    animation: noAnimation ? 'none' : 'fade-up',
    duration: 0.8,
    scrollTriggerOptions: {
      start: 'top 88%',
    }
  });

  return (
    <section
      id={id}
      ref={noAnimation ? null : ref}
      className={`relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
