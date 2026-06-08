import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingDock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show dock after preloader
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sahil_resume.pdf';
    link.download = 'Sahil_resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const dockItems = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/Sahilbagga297',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahil-bagga-22327b295/',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:sahilbagga297@gmail.com',
    },
    {
      icon: <Download className="w-5 h-5" />,
      label: 'Resume',
      onClick: handleDownloadResume,
    },
  ];

  return (
    <div
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {/* Vertical line above */}
      <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-600 mx-auto" />

      {dockItems.map((item, index) => (
        item.onClick ? (
          <button
            key={index}
            onClick={item.onClick}
            aria-label={item.label}
            className="group relative p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700/50">
              {item.label}
            </span>
          </button>
        ) : (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="group relative p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700/50">
              {item.label}
            </span>
          </a>
        )
      ))}

      {/* Vertical line below */}
      <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent mx-auto" />
    </div>
  );
};

export default React.memo(FloatingDock);
