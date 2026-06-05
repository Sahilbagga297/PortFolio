import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisContext } from '../context/LenisContext';
import SectionWrapper from '../components/SectionWrapper';

import pharmaImg from '../assets/Screenshot 2025-12-30 204444.png';
import pollsenseimg from '../assets/Screenshot 2025-09-04 004121.png';
import nidhisetuimg from '../assets/Screenshot 2025-12-30 210502.png';
import Buildbazarimg from '../assets/Screenshot 2025-12-30 210813.png';
import portfolioimg from '../assets/Screenshot 2025-12-30 211557.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const lenis = useLenisContext();
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Pharma Pulse',
      description: 'A full stack interactive web application developed to ease the work of Medical Representatives in the process of dataset management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'ExcelJs'],
      image: pharmaImg,
      github: 'https://github.com/Sahilbagga297/Pharma-Pulse',
      live: 'https://pharma-pulse-lur3.vercel.app/',
      featured: true,
    },
    {
      id: 2,
      title: 'Pollusense',
      description: 'A full stack web application developed for real time Air Quality monitoring and alert system when AQI reaches a threshold.',
      technologies: ['React', 'MongoDB', 'Nodejs', 'Express', 'IOT', 'Socket.io', 'World-Air-Quality-Index API'],
      image: pollsenseimg,
      github: 'https://github.com/Sahilbagga297/Pollusense',
      live: 'https://pollusense.vercel.app/',
      featured: true,
    },
    {
      id: 3,
      title: 'Nidhi Setu',
      description: 'A full stack web application developed to help the retired Senior Citizens to easily claim their Pension',
      technologies: ['React', 'Mongo Database', 'FaceApi', 'CSS3', 'Geolocation'],
      image: nidhisetuimg,
      github: 'https://github.com/Sahilbagga297/NidhiSetu',
      live: 'https://nidhi-setu-two.vercel.app/',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A full stack web application developed with motive of showcasing my technical skills.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      image: portfolioimg,
      github: 'https://github.com/Sahilbagga297/PortFolio',
      live: 'https://port-folio-num7.vercel.app/',
      featured: false,
    },
    {
      id: 5,
      title: 'Build Bazar X',
      description: 'A full stack E Commerce Website developed for the purpose of buying or Building wooden furniture.',
      technologies: ['React', 'Nodejs', 'MongoDB', 'Express', 'JavaScript'],
      image: Buildbazarimg,
      github: 'https://github.com/Sahilbagga297/BuildBazaarX',
      live: 'https://build-bazaar-x.vercel.app/',
      featured: false,
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !projectsRef.current) return;

    const ctx = gsap.context(() => {
      // Featured project parallax images
      const featuredCards = projectsRef.current.querySelectorAll('.project-featured');
      featuredCards.forEach((card) => {
        const img = card.querySelector('.project-image');
        if (img) {
          gsap.fromTo(img,
            { y: 40, scale: 1.1 },
            {
              y: -40,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          );
        }

        // Card content stagger
        const content = card.querySelector('.project-content');
        if (content) {
          gsap.fromTo(content.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                once: true,
              },
            }
          );
        }
      });

      // Regular project cards
      const regularCards = projectsRef.current.querySelectorAll('.project-regular');
      regularCards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (target) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    }
  };

  return (
    <SectionWrapper id="projects" noAnimation>
      <div ref={projectsRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my recent projects showcasing problem-solving skills and modern web development practices.
          </p>
          <p className="text-base sm:text-xl text-gray-500 max-w-3xl mx-auto mt-2">
            (Please note: Backend responses may be slow due to free-tier hosting on Render.)
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="w-8 h-8 text-gray-400 mr-3" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div
                key={project.id}
                className="project-featured group bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700/50 hover:border-gray-500/50 cursor-pointer"
                onClick={() => window.open(project.live, '_blank')}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="project-image w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${project.image})` }}
                    role="img"
                    aria-label={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300 flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-content p-6">
                  <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
            <Code className="w-8 h-8 text-gray-400 mr-3" />
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-regular group bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700/50 hover:border-gray-500/50 cursor-pointer"
                onClick={() => window.open(project.live, '_blank')}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                    role="img"
                    aria-label={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded text-sm hover:bg-white/30 transition-colors duration-300 flex items-center gap-1"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-gray-100 text-black px-3 py-1 rounded text-sm hover:bg-white transition-colors duration-300 flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-500 rounded text-xs border border-gray-700">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-t border-gray-800 rounded-3xl p-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-colors duration-300 shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
