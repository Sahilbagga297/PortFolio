import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '2+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-accent/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-cyan-accent font-medium text-sm tracking-widest uppercase mb-4">
                Full Stack Developer & UI Designer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-400">Hi, I'm</span>
                <br />
                <span className="gradient-text text-glow-cyan">Sahil Bagga</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              Crafting premium digital experiences with a focus on performance, 
              scalability, and modern aesthetics. I specialize in the React ecosystem, 
              building complex applications that are beautiful and performant.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-4 text-center hover:border-cyan-accent/20 transition-all duration-300 group"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-accent transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 bg-gradient-to-r from-cyan-accent to-cyan-accent-dark text-dark-950 px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-accent/25 transition-all duration-300 hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <button
                onClick={handleDownloadResume}
                className="group flex items-center gap-2 glass px-7 py-3.5 rounded-xl font-semibold text-gray-300 hover:text-white hover:border-cyan-accent/30 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-3 pt-2"
            >
              {[
                { icon: Github, href: 'https://github.com/Sahilbagga297', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-bagga-22327b295/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:sahilbagga297@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass p-3 rounded-xl text-gray-400 hover:text-cyan-accent hover:border-cyan-accent/20 hover:shadow-lg hover:shadow-cyan-accent/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border border-cyan-accent/10 animate-pulse-glow" />
              <div className="absolute -inset-8 rounded-3xl border border-cyan-accent/5" />

              <div className="glass rounded-3xl p-6 glow-cyan">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-dark-600 relative">
                  <img
                    src="/profile.jpg"
                    alt="Sahil Bagga"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white">Sahil Bagga</h3>
                  <p className="text-cyan-accent text-sm font-medium">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
