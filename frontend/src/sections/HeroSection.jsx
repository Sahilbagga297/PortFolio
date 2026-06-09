import React from 'react';
import { ArrowRight, Download, Code, Palette, Zap, GitBranch, Star } from 'lucide-react';
import useGsapTimeline from '../hooks/useGsapTimeline';
import useParallax from '../hooks/useParallax';
import useIsMobile from '../hooks/useIsMobile';

const Sahil_Bagga_image = '/profile.jpg';

const HeroSection = () => {
  const isMobile = useIsMobile();

  const skills = [
    { icon: <Code className="w-6 h-6" />, label: 'Mern Stack Development', level: 'Advanced', stars: 5 },
    { icon: <Palette className="w-6 h-6" />, label: 'Generative AI', level: 'Intermediate', stars: 4 },
    { icon: <Zap className="w-6 h-6" />, label: 'Cloud Computing', level: 'Beginner', stars: 3 },
    { icon: <GitBranch className="w-6 h-6" />, label: 'Open Source Contribution', level: "GSSoC '26 Contributor", stars: 4 },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sahil_resume.pdf';
    link.download = 'Sahil_resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (target) => {
    const el = document.querySelector(target);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Parallax on the image column (desktop only, auto-disabled on mobile by the hook)
  const imageParallaxRef = useParallax({ speed: 0.15, direction: 'up' });

  // Scoped entrance timeline animation
  const containerRef = useGsapTimeline((tl) => {
    const isLowEndDevice =
      (typeof navigator !== 'undefined') && (
        (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      );

    if (isLowEndDevice) {
      // 60FPS lightweight fade-in for low-end mobile devices (bypassing heavy transforms)
      tl.fromTo('.hero-text-col', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.6, ease: 'sine.out' }
      )
      .fromTo('.hero-image-col', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.6, ease: 'sine.out' }, 
        '-=0.4'
      );
      return;
    }

    // Premium high-performance entrance orchestration with enhanced animations
    tl.fromTo('.hero-title-line', 
      { y: 50, opacity: 0, filter: 'blur(8px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-desc',
      { y: 30, opacity: 0, filter: 'blur(4px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo('.hero-skills-title',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.hero-skill-card',
      { y: 25, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.2)' },
      '-=0.3'
    )
    .fromTo('.hero-cta-btn',
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.6, ease: 'back.out(1.4)' },
      '-=0.4'
    )
    .fromTo('.hero-image-container',
      { scale: 0.9, opacity: 0, rotateY: -8, transformPerspective: 1000 },
      { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, ease: 'power3.out' },
      '-=1.4'
    );
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left Column - Text Content */}
          <div className="hero-text-col space-y-8 lg:space-y-10">
            <div className="hero-title-line">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
                <span className="text-gray-400">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative">
                  Sahil Bagga
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-600/10 to-gray-500/10 blur-2xl -z-10 rounded-3xl"></div>
                </span>
              </h1>
            </div>

            <div className="hero-desc">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed">
                  Mern-stack Developer passionate about creating{' '}
                  <span className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative">
                    visually appealing and user-friendly websites.
                  </span>
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-medium">
                  I specialize in building scalable web applications with modern technologies.
                  Although i am a Fresher, I transform complex problems into elegant,
                  user-friendly solutions that drive business growth and user satisfaction.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="hero-skills-title text-lg font-semibold text-gray-300 flex items-center space-x-2">
                <Star className="w-5 h-5 text-gray-400" />
                <span>Core Expertise</span>
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="hero-skill-card group bg-gray-900/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-4 hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gray-800/30 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-gray-300 group-hover:text-white transition-colors duration-300 p-2 bg-gray-800/80 rounded-xl group-hover:bg-gray-700/80">
                          {skill.icon}
                        </div>
                        <div>
                          <span className="text-gray-200 font-semibold text-lg">{skill.label}</span>
                          <p className="text-gray-400 text-sm">{skill.level}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < skill.stars ? 'text-gray-400 fill-current' : 'text-gray-700'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#projects')}
                className="hero-cta-btn group bg-gradient-to-r from-gray-200 to-white hover:from-white hover:to-gray-100 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl shadow-gray-800/50"
              >
                <span>View Projects</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="hero-cta-btn group bg-gray-900/80 backdrop-blur-sm border-2 border-gray-700/60 hover:border-gray-600/80 text-gray-200 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800/90 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl"
              >
                <Download className="w-6 h-6" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column - Profile Section with Parallax */}
          <div className="hero-image-col" ref={imageParallaxRef}>
            <div className="relative">
              {/* Floating decorative elements — disabled on mobile (animate-bounce/pulse trigger layout) */}
              {!isMobile && (
                <>
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-gray-500/30 to-gray-600/20 rounded-full blur-xl opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-gray-600/20 to-gray-700/15 rounded-full blur-xl opacity-40 animate-pulse"></div>
                </>
              )}

              {/* Flattened hero image container (7 levels → 4 levels) */}
              <div className="hero-image-container relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-700/50 shadow-2xl shadow-gray-900/40 mx-auto mt-10 lg:mt-0">
                <div className="aspect-square bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 rounded-3xl p-2 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex flex-col items-center justify-center overflow-hidden border-4 border-gray-700/50 p-4">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full mb-6 flex items-center justify-center shadow-2xl border-4 border-gray-700/50 overflow-hidden">
                      <img src={Sahil_Bagga_image} alt="Sahil Bagga" className="w-full h-full object-cover" loading="eager" />
                    </div>
                    <p className="text-gray-200 text-3xl sm:text-4xl md:text-6xl font-semibold">Sahil Bagga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
