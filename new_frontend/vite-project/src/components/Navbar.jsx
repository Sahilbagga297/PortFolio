import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'shadow-lg shadow-black/20' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-accent to-cyan-accent-dark flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-accent/20 group-hover:shadow-cyan-accent/40 transition-shadow duration-300">
              SB
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">
              Portfolio
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-accent'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-cyan-accent rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden glass rounded-2xl mt-2 overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-accent bg-cyan-accent/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
