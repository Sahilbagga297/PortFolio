import { useState, useEffect, useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import gsap from 'gsap';

const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const skillsContainerRef = useRef(null);

  const technicalSkills = {
    'Programming Languages': [
      { name: 'JavaScript', category: 'programming' },
      { name: 'Python', category: 'programming' },
      { name: 'Java', category: 'programming' },
      { name: 'C++', category: 'programming' },
    ],
    'Frontend Frameworks': [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Bootstrap', category: 'frontend' },
    ],
    'Backend Technologies': [
      { name: 'Node.js', category: 'backend' },
      { name: 'Express.js', category: 'backend' },
    ],
    'Databases': [
      { name: 'MongoDB', category: 'database' },
      { name: 'MySQL', category: 'database' },
      { name: 'Firebase', category: 'database' },
      { name: 'Supabase', category: 'database' },
    ],
    'Cloud & DevOps': [
      { name: 'AWS', category: 'cloud' },
      { name: 'Docker', category: 'cloud' },
      { name: 'Kubernetes', category: 'cloud' },
      { name: 'Google Cloud', category: 'cloud' },
    ],
    'Tools & Software': [
      { name: 'Git', category: 'tools' },
      { name: 'VS Code', category: 'tools' },
      { name: 'Figma', category: 'tools' },
      { name: 'Cursor', category: 'tools' },
      { name: 'Postman', category: 'tools' },
    ],
  };

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'tools', name: 'Tools' },
  ];

  const softSkillsData = [
    ['Communication', 'Fluent in English & Hindi language'],
    ['Teamwork', 'Hackathons and collaborative projects'],
    ['Problem Solving', 'Strong analytical thinking'],
    ['Adaptability', 'Fast learner, tech-enthusiast'],
    ['Leadership', 'Led small teams & cross-team collaboration'],
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(technicalSkills).flat();
    }
    return Object.values(technicalSkills).flat().filter(skill => skill.category === activeCategory);
  };

  // Stagger reveal animation whenever activeCategory updates
  useEffect(() => {
    if (skillsContainerRef.current) {
      const cards = skillsContainerRef.current.querySelectorAll('.skill-card');
      if (cards.length > 0) {
        gsap.killTweensOf(cards);

        // Hardware capabilities check
        const isLowEndDevice =
          (typeof navigator !== 'undefined') && (
            (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
            (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
          );

        if (isLowEndDevice) {
          // 60FPS lightweight opacity animation
          gsap.fromTo(cards,
            { opacity: 0 },
            { opacity: 1, duration: 0.35, stagger: 0.03, ease: 'sine.out' }
          );
        } else {
          // Premium slide-up stagger animation
          gsap.fromTo(cards,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out' }
          );
        }
      }
    }
  }, [activeCategory]);

  const SkillBar = ({ skill }) => (
    <div className="skill-card bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-700/80 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] border border-gray-700/50 will-change-[transform,opacity]">
      <div className="flex items-center">
        <span className="font-semibold text-gray-200">{skill.name}</span>
      </div>
    </div>
  );

  return (
    <SectionWrapper id="about">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4">
          About Me
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full" />
      </div>

      {/* Bio */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50" />
        <div className="relative p-6 sm:p-10 space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-200">My Journey & Passion</h3>
          <div className="space-y-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            <p className="first-letter:text-2xl first-letter:font-bold first-letter:text-white first-letter:mr-1">
              Hi, I'm Sahil Bagga, a Full Stack Web Developer passionate about building scalable,
              user-friendly, and high-performance web applications.
            </p>
            <p>
              I work extensively with the MERN stack, creating responsive React frontends and
              secure backend APIs using Node.js and Express.
            </p>
            <p>
              I also have foundational experience in Cloud Computing and DevOps, deploying
              full-stack apps using AWS, Docker, Kubernetes, MongoDB Atlas, and CI/CD tools.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills & Tech Stack */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50" />
        <div className="relative p-6 sm:p-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl mb-4 border border-gray-600/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
              {activeCategory === 'all' ? 'Tech Stack' : categories.find(c => c.id === activeCategory)?.name}
            </h3>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-gray-200 to-white text-black shadow-lg'
                  : 'bg-gray-800/60 backdrop-blur-sm text-gray-400 hover:bg-gray-700/80 border border-gray-700/50'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid container */}
          <div ref={skillsContainerRef}>
            {activeCategory === 'all' ? (
              <div className="space-y-12">
                {Object.entries(technicalSkills).map(([categoryName, skills]) => (
                  <div key={categoryName}>
                    <h4 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{categoryName.charAt(0)}</span>
                      </div>
                      {categoryName}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skills.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getFilteredSkills().map((skill, index) => (
                  <SkillBar key={`${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50" />
        <div className="relative p-6 sm:p-10 space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-200">Soft Skills</h3>
          <div className="space-y-3">
            {softSkillsData.map(([k, v], i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                <div className="font-semibold text-gray-200">{k}</div>
                <div className="text-gray-400">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beyond the Code */}
      <div className="relative">
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50" />
        <div className="relative p-6 sm:p-10 space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-200">Beyond the Code</h3>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            When I'm not coding, I enjoy swimming and badminton. I'm also a sci-fi reader and
            binge-watcher — creative stories often spark new technical ideas.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
