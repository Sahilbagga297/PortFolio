import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '../components/SectionWrapper';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      const line = timelineRef.current.querySelector('.timeline-line-fill');

      // Animate timeline line
      if (line) {
        gsap.fromTo(line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 60%',
              scrub: 1,
            },
          }
        );
      }

      // Animate each timeline item
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sahil_resume.pdf';
    link.download = 'Sahil_resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      type: 'work',
      title: 'Data Science Intern',
      subtitle: 'Celebal Technologies, Jaipur',
      text: 'Worked on data science projects, analytics, and machine learning workflows.',
    },
    {
      type: 'work',
      title: 'MERN Stack Intern',
      subtitle: 'T.C.E Education | Jun 2025 – Aug 2025',
      text: 'Worked on full-stack MERN applications and backend APIs.',
    },
    {
      type: 'work',
      title: 'Backend Developer',
      subtitle: 'VyapGo | May 2025 – Oct 2025',
      text: 'Built scalable backend systems for payment and inventory management.',
    },
  ];

  const education = [
    {
      type: 'education',
      title: 'Intermediate (10+2)',
      subtitle: 'Sir Padampat Singhania Education Centre | 2021 – 2023',
      text: 'Intermediate of Science (PCM)',
    },
    {
      type: 'education',
      title: 'B.Tech – Information Technology',
      subtitle: 'Jaipur Engineering College and Research Centre | 2023 – 2027',
      text: 'Bachelor of Technology in Information Technology.',
    },
  ];

  const TimelineCard = ({ item, index }) => (
    <div className="timeline-item bg-gray-800/50 rounded-xl p-5 border-l-4 border-gray-500 hover:bg-gray-800/70 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.type === 'work' ? 'bg-gray-400' : 'bg-gray-500'}`} />
        <div>
          <h4 className="font-bold text-gray-200 text-lg">{item.title}</h4>
          <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
          <p className="text-gray-400 mt-3">{item.text}</p>
        </div>
      </div>
    </div>
  );

  return (
    <SectionWrapper id="experience">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4">
          Experience & Education
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full" />
      </div>

      <div ref={timelineRef} className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gray-800 lg:-translate-x-px hidden lg:block">
          <div className="timeline-line-fill absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-300 origin-top" />
        </div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {/* Experience */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50" />
              <div className="relative p-6 sm:p-10 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Experience
                </h3>
                {experiences.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50" />
              <div className="relative p-6 sm:p-10 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  Education
                </h3>
                {education.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="pt-12 text-center">
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-600 text-gray-200 bg-gray-900/60 hover:bg-gray-100 hover:text-black transition-all duration-300"
          >
            <Download className="w-6 h-6" />
            Download Resume
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
