import React from 'react';
import { ExternalLink, Github, Code, Palette, Zap, Star } from 'lucide-react';
import pharmaImg from '../assets/Screenshot 2025-12-30 204444.png';
import pollsenseimg from '../assets/Screenshot 2025-09-04 004121.png';
import nidhisetuimg from '../assets/Screenshot 2025-12-30 210502.png';
import Buildbazarimg from '../assets/Screenshot 2025-12-30 210813.png';
import portfolioimg from '../assets/Screenshot 2025-12-30 211557.png';
const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Pharma Pulse",
      description: "A full stack interactive web application developed to ease the work of Medical Representatives in the process of dataset management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "ExcelJs"],
      image: pharmaImg,
      github: "https://github.com/Sahilbagga297/Pharma-Pulse",
      live: "https://pharma-pulse-lur3.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Pollusense",
      description: "A full stack web application developed for real time Air Quality monitoring and alert system when AQI reaches a threshold.",
      technologies: ["React", "MongoDB", "Nodejs", "Express", "IOT", "Socket.io", "World-Air-Quality-Index API"],
      image: pollsenseimg,
      github: "https://github.com/Sahilbagga297/Pollusense",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Nidhi Setu",
      description: "A full stack web application developed to help the retired Senior Citizens to easily claim their Pension",
      technologies: ["React", "Mongo Database", "FaceApi", "CSS3", "Geolocation"],
      image: nidhisetuimg,
      github: "https://github.com/Sahilbagga297/NidhiSetu",
      live: "https://nidhi-setu-two.vercel.app/",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A full stack web application developed with motive of showcasing my technical skills.",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      image: portfolioimg,
      github: "https://github.com/Sahilbagga297/PortFolio",
      live: "https://port-folio-num7.vercel.app/",
      featured: false
    },
    {
      id: 5,
      title: "Build Bazar X",
      description: "A full stack E Commerce Website developed for the purpose of buying or Building wooden furniture.",
      technologies: ["React", "Nodejs", "MongoDB", "Express", "JavaScript"],
      image: Buildbazarimg,
      github: "https://github.com/Sahilbagga297/BuildBazaarX",
      live: "https://build-bazaar-x.vercel.app/",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              My <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Explore my latest projects and creative solutions. Each project represents a unique challenge
              and showcases my skills in modern web development.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <Star className="w-8 h-8 text-amber-500 mr-3" />
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} onClick={() => window.open(project.live, '_blank')} className="cursor-pointer group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
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
                            className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300 flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <Code className="w-8 h-8 text-orange-500 mr-3" />
              All Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} onClick={() => window.open(project.live, '_blank')} className="cursor-pointer group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-orange-100">
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
                            className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition-colors duration-300 flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 py-12 md:py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start a Project?</h2>
          <p className="text-amber-100 mb-8 text-lg">
            Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-50 transition-colors duration-300 shadow-xl">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;  