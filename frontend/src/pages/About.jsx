import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SahilBagga_Resumepwc.pdf';
    link.download = 'SahilBagga_Resumepwc.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 px-4 py-8 sm:px-8 lg:px-12 font-sans">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              About Me
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full" />
          </header>

          {/* About Section */}
          <Section title="My Journey & Passion">
            <div className="space-y-5 text-base sm:text-lg text-gray-400 leading-relaxed">
              <p className="first-letter:text-2xl first-letter:font-bold first-letter:text-white first-letter:mr-1">
                Hi, I’m Sahil Bagga, a Full Stack Web Developer passionate about building scalable,
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
          </Section>

          {/* Skills */}
          <Section title="Skills & Expertise">
            <div className="space-y-10">
              {/* Technical */}
              <SkillGroup
                title="Technical Skills"
                items={[
                  ["Programming Languages", "JavaScript, Python, Java, C++, TypeScript, C"],
                  ["Frontend", "React, Next.js, Tailwind CSS, Bootstrap"],
                  ["Backend", "Node.js, Express, Supabase"],
                  ["Databases", "MongoDB, MySQL, Firebase"],
                  ["Tools", "Git, Docker, AWS, GCP, Render, Vercel, OpenAI"],
                  ["UI/UX", "Figma"],
                ]}
              />

              {/* Soft Skills */}
              <SkillGroup
                title="Soft Skills"
                items={[
                  ["Communication", "Fluent in English & Hindi language"],
                  ["Teamwork", "Hackathons and collaborative projects"],
                  ["Problem Solving", "Strong analytical thinking"],
                  ["Adaptability", "Fast learner, tech-enthusiast"],
                  ["Leadership", "Led small teams & cross-team collaboration"],
                ]}
              />
            </div>
          </Section>

          {/* Experience & Education */}
          <Section title="Experience & Education">
            <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
              {/* Experience */}
              <div className="space-y-6">
                <Card
                  title="MERN Stack Intern"
                  subtitle="T.C.E Education | Jun 2025 – Aug 2025"
                  text="Worked on full-stack MERN applications and backend APIs."
                />
                <Card
                  title="Backend Developer"
                  subtitle="VyapGo | May 2025 – Oct 2025"
                  text="Built scalable backend systems for payment and inventory management."
                />
              </div>

              {/* Education */}
              <div className="space-y-6">
                <Card
                  title="Intermediate (10+2)"
                  subtitle="Sir Padampat Singhania Education Centre | 2021 – 2023"
                  text="Intermediate of Science (PCM)"
                />
                <Card
                  title="B.Tech – Information Technology"
                  subtitle="Jaipur Engineering College and Research Centre | 2023 – 2027"
                  text="Bachelor of Technology in Information Technology."
                />
              </div>
            </div>

            {/* Resume */}
            <div className="pt-12 text-center">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-600 text-gray-200 bg-gray-900/60 hover:bg-gray-100 hover:text-black transition-all"
              >
                <Download className="w-6 h-6" />
                Download Resume
              </button>
            </div>
          </Section>

          {/* Personal */}
          <Section title="Beyond the Code">
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              When I’m not coding, I enjoy swimming and badminton. I’m also a sci-fi reader and
              binge-watcher — creative stories often spark new technical ideas.
            </p>
          </Section>

        </div>
      </div>
    </div>
    </motion.div>
  );
};

/* ---------- Reusable Components ---------- */

const Section = ({ title, children }) => (
  <section className="relative">
    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50" />
    <div className="relative p-6 sm:p-10 space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-200">{title}</h2>
      {children}
    </div>
  </section>
);

const SkillGroup = ({ title, items }) => (
  <div>
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">{title}</h3>
    <div className="space-y-3">
      {items.map(([k, v], i) => (
        <div key={i} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
          <div className="font-semibold text-gray-200">{k}</div>
          <div className="text-gray-400">{v}</div>
        </div>
      ))}
    </div>
  </div>
);

const Card = ({ title, subtitle, text }) => (
  <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-gray-500">
    <h4 className="font-bold text-gray-200 text-lg">{title}</h4>
    <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    <p className="text-gray-400 mt-3">{text}</p>
  </div>
);

export default About;
