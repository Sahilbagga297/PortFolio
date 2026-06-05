import { useRef, useEffect } from 'react';
import { FolderKanban, Briefcase, Code, GraduationCap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCountUp from '../hooks/useCountUp';
import SectionWrapper from '../components/SectionWrapper';

gsap.registerPlugin(ScrollTrigger);

const AchievementCard = ({ icon: Icon, number, label, detail, index }) => {
  const isNumeric = /^\d+/.test(number);
  const numericPart = isNumeric ? parseInt(number, 10) : null;
  const suffix = isNumeric ? number.replace(/^\d+/, '') : '';

  const { displayValue, elementRef } = useCountUp(numericPart || 0, {
    duration: 2000,
    suffix,
    startOnView: true,
  });

  return (
    <div
      ref={elementRef}
      className="achievement-card group relative overflow-hidden bg-gray-900/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-4 sm:p-5 hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-700/20"
    >
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-gray-600/10 to-gray-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-gray-800/80 rounded-xl text-gray-300 group-hover:text-white group-hover:bg-gray-700/80 transition-colors duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {isNumeric ? displayValue : number}
          </span>
        </div>
        <div>
          <p className="text-gray-200 font-semibold">{label}</p>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{detail}</p>
        </div>
      </div>
    </div>
  );
};

const AchievementsSection = () => {
  const gridRef = useRef(null);

  const achievements = [
    { icon: FolderKanban, number: '10+', label: 'Projects Built', detail: 'Full-stack web applications' },
    { icon: Briefcase, number: '2', label: 'Internships', detail: 'Data Science Intern @ Celebal Tech, Backend Developer @ VyapGo' },
    { icon: Code, number: '', label: 'OpenSource', detail: "OpenSource Contributor @ GSSoC'26" },
    { icon: GraduationCap, number: '2027', label: 'B.Tech IT', detail: 'Graduating student' },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current.querySelectorAll('.achievement-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="achievements" noAnimation>
      <div>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4">
            Achievements
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full" />
        </div>

        {/* Achievement Grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
