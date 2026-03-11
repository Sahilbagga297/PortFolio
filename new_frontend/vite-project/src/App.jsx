import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30 transition-all duration-[3000ms] ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(32,211,238,0.04) 0%, transparent 70%)',
            transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`,
            top: '-20%',
            left: '-10%',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-[2500ms] ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(32,211,238,0.03) 0%, transparent 70%)',
            transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`,
            bottom: '-15%',
            right: '-5%',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#20d3ee" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
