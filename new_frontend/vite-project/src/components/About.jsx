import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code, Palette, Globe } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'MERN Stack', desc: 'React, Node.js, Express, MongoDB' },
  { icon: Palette, label: 'UI/UX Design', desc: 'Figma, Tailwind, Modern Aesthetics' },
  { icon: Globe, label: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, CI/CD' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-accent font-medium text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-accent to-cyan-accent-dark mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-cyan-accent/10 text-cyan-accent">
                  <User size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">My Journey & Passion</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                I am a passionate developer who bridges the gap between design and technology. 
                My journey started with a curiosity for how things work on the web, which evolved 
                into a career building complex applications for clients worldwide.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in the React ecosystem, creating seamless user interfaces that are not 
                only beautiful but also performant. I believe in clean code, accessible design, and 
                continuous learning. I work extensively with the MERN stack, creating responsive 
                React frontends and secure backend APIs using Node.js and Express.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I also have foundational experience in Cloud Computing and DevOps, deploying 
                full-stack apps using AWS, Docker, Kubernetes, MongoDB Atlas, and CI/CD tools.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="glass rounded-2xl p-5 group hover:border-cyan-accent/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-cyan-accent/10 text-cyan-accent group-hover:bg-cyan-accent/20 transition-colors duration-300 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{label}</h4>
                    <p className="text-gray-500 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
