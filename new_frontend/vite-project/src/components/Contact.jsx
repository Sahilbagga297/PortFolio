import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden glow-cyan"
        >
          {/* Background gradient */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-accent/3 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-cyan-accent/10 text-cyan-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-accent/20">
              <MessageSquare size={16} />
              Let's Connect
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to build something{' '}
              <span className="gradient-text">amazing?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              I'm currently looking for new opportunities and collaborations. 
              Let's schedule a call to discuss your project and bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:sahilbagga297@gmail.com"
                className="group flex items-center gap-2 bg-gradient-to-r from-cyan-accent to-cyan-accent-dark text-dark-950 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-accent/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail size={18} />
                Get In Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-bagga-22327b295/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold text-gray-300 hover:text-white hover:border-cyan-accent/30 transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
