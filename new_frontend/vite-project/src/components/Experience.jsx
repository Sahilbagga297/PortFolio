import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'MERN Stack Intern',
    company: 'T.C.E Education',
    period: 'Jun 2025 – Aug 2025',
    description:
      'Worked on full-stack MERN applications and backend APIs, gaining hands-on experience with React, Node.js, Express, and MongoDB.',
  },
  {
    type: 'work',
    title: 'Backend Developer',
    company: 'VyapGo',
    period: 'May 2025 – Oct 2025',
    description:
      'Built scalable backend systems for payment and inventory management. Designed RESTful APIs and implemented database optimization strategies.',
  },
];

const education = [
  {
    title: 'B.Tech – Information Technology',
    institution: 'Jaipur Engineering College and Research Centre',
    period: '2023 – 2027',
    description: 'Bachelor of Technology in Information Technology.',
  },
  {
    title: 'Intermediate (10+2)',
    institution: 'Sir Padampat Singhania Education Centre',
    period: '2021 – 2023',
    description: 'Intermediate of Science (PCM).',
  },
];

const TimelineCard = ({ item, index, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 pb-8 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-10 bottom-0 w-px bg-gradient-to-b from-cyan-accent/40 to-dark-700 group-last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-dark-800 border-2 border-cyan-accent/40 flex items-center justify-center group-hover:border-cyan-accent group-hover:shadow-lg group-hover:shadow-cyan-accent/20 transition-all duration-300">
        <div className="w-2 h-2 rounded-full bg-cyan-accent" />
      </div>

      {/* Card */}
      <div className="glass rounded-2xl p-5 ml-4 hover:border-cyan-accent/20 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h4 className="font-bold text-white text-lg group-hover:text-cyan-accent transition-colors duration-300">
              {item.title}
            </h4>
            <p className="text-cyan-accent/80 font-medium text-sm mt-0.5">
              {item.company || item.institution}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium bg-dark-700/50 px-3 py-1.5 rounded-lg shrink-0">
            <Calendar size={12} />
            {item.period}
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-accent font-medium text-sm tracking-widest uppercase mb-3">
            My path so far
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Journey & Growth</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-accent to-cyan-accent-dark mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-cyan-accent/10 text-cyan-accent">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Work Experience</h3>
            </motion.div>
            <div>
              {experiences.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} icon={Briefcase} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-cyan-accent/10 text-cyan-accent">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </motion.div>
            <div>
              {education.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} icon={GraduationCap} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
