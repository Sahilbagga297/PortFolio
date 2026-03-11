import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Pharma Pulse',
    description:
      'A full stack interactive web application developed to ease the work of Medical Representatives in the process of dataset management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'ExcelJs'],
    image: '/projects/pharma-pulse.png',
    github: 'https://github.com/Sahilbagga297/Pharma-Pulse',
    live: 'https://pharma-pulse-lur3.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Pollusense',
    description:
      'A full stack web application for real-time Air Quality monitoring and alert system when AQI reaches a threshold.',
    technologies: ['React', 'MongoDB', 'Node.js', 'Express', 'Socket.io'],
    image: '/projects/pollusense.png',
    github: 'https://github.com/Sahilbagga297/Pollusense',
    live: 'https://pollusense.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Nidhi Setu',
    description:
      'A full stack web application to help retired Senior Citizens easily claim their Pension with face recognition.',
    technologies: ['React', 'MongoDB', 'FaceApi', 'CSS3', 'Geolocation'],
    image: '/projects/nidhi-setu.png',
    github: 'https://github.com/Sahilbagga297/NidhiSetu',
    live: 'https://nidhi-setu-two.vercel.app/',
    featured: false,
  },
  {
    id: 4,
    title: 'Build Bazar X',
    description:
      'A full stack E-Commerce Website for buying or building wooden furniture with a complete product catalog.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/build-bazar.png',
    github: 'https://github.com/Sahilbagga297/BuildBazaarX',
    live: 'https://build-bazaar-x.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A full stack web application developed to showcase technical skills with modern design and animations.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
    image: '/projects/portfolio.png',
    github: 'https://github.com/Sahilbagga297/PortFolio',
    live: 'https://port-folio-num7.vercel.app/',
    featured: false,
  },
];

const ProjectCard = ({ project, index, featured }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group glass rounded-2xl overflow-hidden hover:border-cyan-accent/20 transition-all duration-500 ${
        featured ? '' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-56' : 'h-44'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-dark-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-dark-800 transition-colors duration-300 border border-white/10"
          >
            <Github size={16} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-cyan-accent text-dark-950 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-accent-light transition-colors duration-300"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-cyan-accent/20 backdrop-blur-sm text-cyan-accent px-3 py-1 rounded-full text-xs font-semibold border border-cyan-accent/30">
            <Star size={12} className="fill-current" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className={`font-bold text-white mb-2 group-hover:text-cyan-accent transition-colors duration-300 ${featured ? 'text-xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <p className={`text-gray-400 mb-4 leading-relaxed ${featured ? 'text-sm' : 'text-sm line-clamp-2'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-dark-700/60 text-gray-400 rounded-lg text-xs font-medium border border-dark-600/50"
            >
              {tech}
            </span>
          ))}
          {!featured && project.technologies.length > 3 && (
            <span className="px-2.5 py-1 bg-dark-700/60 text-gray-500 rounded-lg text-xs font-medium border border-dark-600/50">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-accent font-medium text-sm tracking-widest uppercase mb-3">
            My recent works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-accent to-cyan-accent-dark mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent works across different industries and tech stacks.
          </p>
        </motion.div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>

        {/* Other projects */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl font-semibold text-gray-300 mb-6"
        >
          Other Projects
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
