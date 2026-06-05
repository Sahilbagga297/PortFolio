import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = ({ id, className = '', children, noAnimation = false }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (noAnimation) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const el = sectionRef.current;
    if (!el) return;

    // Animate direct children with stagger
    const children = el.querySelectorAll(':scope > *');

    gsap.set(children, { opacity: 0, y: 60 });

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [noAnimation]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
