import React, { useState } from 'react';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const technicalSkills = {
    'Programming Languages': [
      { name: 'JavaScript', category: 'programming' },
      { name: 'Python', category: 'programming' },
      // { name: 'TypeScript', icon: '🔷', category: 'programming' },
      { name: 'Java', category: 'programming' },
      { name: 'C++', category: 'programming' },
    ],
    'Frontend Frameworks': [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      // { name: 'Vue.js',  icon: '💚', category: 'frontend' },
      // { name: 'Angular',  icon: '🅰️', category: 'frontend' },
      // { name: 'Svelte',  icon: '🧡', category: 'frontend' }
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Bootstrap', category: 'frontend' }
    ],
    'Backend Technologies': [
      { name: 'Node.js', category: 'backend' },
      { name: 'Express.js', category: 'backend' },
      // { name: 'Django', icon: '🎸', category: 'backend' },
      // { name: 'Flask', icon: '🌶️', category: 'backend' },
      // { name: 'Spring Boot', icon: '🍃', category: 'backend' },
      // { name: 'FastAPI', icon: '⚡', category: 'backend' }
    ],
    'Databases': [
      { name: 'MongoDB', category: 'database' },
      // { name: 'PostgreSQL', icon: '🐘', category: 'database' },
      { name: 'MySQL', category: 'database' },
      // { name: 'Redis', icon: '🔴', category: 'database' },
      { name: 'Firebase', category: 'database' },
      { name: 'Supabase', category: 'database' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', category: 'cloud' },
      { name: 'Docker', category: 'cloud' },
      { name: 'Kubernetes', category: 'cloud' },
      // { name: 'Azure', icon: '🌐', category: 'cloud' },
      { name: 'Google Cloud', category: 'cloud' },
      // { name: 'CI/CD', icon: '🔄', category: 'cloud' }
    ],
    'Tools & Software': [
      { name: 'Git', category: 'tools' },
      { name: 'VS Code', category: 'tools' },
      { name: 'Figma', category: 'tools' },
      { name: 'Cursor', category: 'tools' },
      { name: 'Postman', category: 'tools' },
      // { name: 'Webpack', icon: '📦', category: 'tools' }
    ]
  };


  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming', },
    { id: 'frontend', name: 'Frontend', },
    { id: 'backend', name: 'Backend', },
    { id: 'database', name: 'Database', },
    { id: 'cloud', name: 'Cloud & DevOps', },
    { id: 'tools', name: 'Tools', },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(technicalSkills).flat();
    } else {
      return Object.values(technicalSkills).flat().filter(skill => skill.category === activeCategory);
    }
  };

  const SkillBar = ({ skill }) => (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{skill.icon}</span>
          <span className="font-semibold text-amber-800">{skill.name}</span>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-amber-100/30 via-transparent to-orange-100/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 via-amber-50/50 to-orange-50/50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 p-4 sm:p-8 lg:p-12 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-800 mb-6 tracking-tight">
              My Skills
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise that drives successful project delivery
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-amber-700 hover:bg-white/80'
                    }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Content */}
          {/* Technical Skills Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-amber-800 mb-4">
                {activeCategory === 'all' ? 'Technical Skills Overview' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {activeCategory === 'all'
                  ? 'Comprehensive technical skills across multiple domains and technologies'
                  : `Specialized skills in ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()}`
                }
              </p>
            </div>

            {activeCategory === 'all' ? (
              /* All Technical Skills - Organized by Category */
              <div className="space-y-16">
                {Object.entries(technicalSkills).map(([categoryName, skills]) => (
                  <div key={categoryName} className="relative">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
                    <div className="relative p-8 sm:p-12">
                      <h3 className="text-3xl font-bold text-amber-800 mb-8 flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white font-bold">{categoryName.charAt(0)}</span>
                        </div>
                        {categoryName}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                          <SkillBar key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Filtered Technical Skills */
              <div className="relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
                <div className="relative p-8 sm:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredSkills().map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Skills Summary Stats */}
          {/* <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
            <div className="relative p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">Skills at a Glance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white font-bold">6</span>
                  </div>
                  <h3 className="font-semibold text-amber-800">Programming Languages</h3>
                  <p className="text-gray-600 text-sm">Expert Level</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white font-bold">10+</span>
                  </div>
                  <h3 className="font-semibold text-orange-800">Frameworks</h3>
                  <p className="text-gray-600 text-sm">Full Stack</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white font-bold">5</span>
                  </div>
                  <h3 className="font-semibold text-yellow-800">Cloud Platforms</h3>
                  <p className="text-gray-600 text-sm">DevOps Ready</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white font-bold">6</span>
                  </div>
                  <h3 className="font-semibold text-amber-800">Soft Skills</h3>
                  <p className="text-gray-600 text-sm">Leadership Ready</p>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;