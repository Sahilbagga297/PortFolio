import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', target: '#home' },
    { name: 'About', target: '#about' },
    { name: 'Experience', target: '#experience' },
    { name: 'Projects', target: '#projects' },
    { name: 'Contact', target: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/Sahilbagga297' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-bagga-22327b295/' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:sahilbagga297@gmail.com' },
  ];

  const handleNavClick = (target) => {
    const el = document.querySelector(target);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900/60 text-gray-400 border-t border-gray-700/50 backdrop-blur-lg shadow-2xl relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Sahil Bagga</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building scalable, user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.target)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sahil Bagga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);