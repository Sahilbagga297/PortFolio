import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Coffee } from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';
import gsap from 'gsap';

const SECTION_IDS = ['home', 'about', 'experience', 'projects', 'achievements', 'contact'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);
  const activeSection = useScrollSpy(SECTION_IDS, { offset: 100 });

  useEffect(() => {
    gsap.fromTo('.navbar-container',
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  const navItems = [
    { name: 'Home', target: '#home' },
    { name: 'About', target: '#about' },
    { name: 'Experience', target: '#experience' },
    { name: 'Projects', target: '#projects' },
    { name: 'Achievements', target: '#achievements' },
    { name: 'Contact', target: '#contact' },
  ];

  // Throttled scroll handler — only triggers setState when value actually changes
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolledRef.current) {
          isScrolledRef.current = scrolled;
          setIsScrolled(scrolled);
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = useCallback((target) => {
    const el = document.querySelector(target);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-container fixed top-0 w-full bg-transparent backdrop-blur-md px-4 sm:px-6 py-4 sm:py-6 z-50 shadow-lg rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div
          className={`bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl px-4 sm:px-8 py-3 sm:py-4 shadow-xl shadow-gray-900/20 transition-all duration-500 ${
            isScrolled ? 'bg-gray-900/80 border-gray-600/60' : ''
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const sectionId = item.target.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.target)}
                    className={`relative font-medium transition-all duration-300 group ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gray-400 to-white transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden bg-gray-800 p-2 rounded-lg"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu — animated with CSS transitions */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl shadow-black/50 py-4 px-6 sm:px-8">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const sectionId = item.target.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.target)}
                      className={`block w-full text-left font-medium transition-all duration-300 ${
                        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
