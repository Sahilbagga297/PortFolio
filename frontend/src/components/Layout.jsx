import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingDock from './FloatingDock.jsx';
import ScrollProgress from './ScrollProgress.jsx';
import BackToTop from './BackToTop.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

const Layout = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Animated Background Elements — disabled on mobile for 60FPS scrolling */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {isMobile ? (
          /* Mobile: Static, lightweight gradient orbs — no animations, no blur repainting */
          <>
            <div
              className="absolute w-[600px] h-[600px] bg-gradient-to-r from-gray-800/15 via-gray-700/10 to-gray-600/8 rounded-full"
              style={{ top: '-25%', left: '-15%' }}
            />
            <div
              className="absolute w-[500px] h-[500px] bg-gradient-to-r from-gray-700/10 via-gray-600/8 to-gray-500/5 rounded-full"
              style={{ bottom: '-20%', right: '-10%' }}
            />
          </>
        ) : (
          /* Desktop: Full animated decorative elements */
          <>
            <div
              className="layout-orb absolute w-[1000px] h-[1000px] bg-gradient-to-r from-gray-800/20 via-gray-700/15 to-gray-600/10 rounded-full blur-3xl"
              style={{ top: '-25%', left: '-15%', animation: 'float 8s ease-in-out infinite' }}
            />
            <div
              className="layout-orb absolute w-[800px] h-[800px] bg-gradient-to-r from-gray-700/15 via-gray-600/12 to-gray-500/8 rounded-full blur-3xl"
              style={{ bottom: '-20%', right: '-10%', animation: 'float-reverse 10s ease-in-out infinite' }}
            />
            <div
              className="layout-orb absolute w-[600px] h-[600px] bg-gradient-to-r from-gray-600/10 to-gray-500/8 rounded-full blur-2xl"
              style={{ top: '45%', right: '15%', animation: 'float 12s ease-in-out infinite' }}
            />
            <div
              className="layout-orb absolute w-[400px] h-[400px] bg-gradient-to-br from-white/5 to-gray-400/5 rounded-full blur-2xl"
              style={{ top: '20%', left: '30%', animation: 'pulse-soft 6s ease-in-out infinite' }}
            />
          </>
        )}
      </div>

      {/* Grid Pattern Overlay — desktop only (negligible visual impact on mobile) */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      )}

      {/* Animated Dots Pattern — desktop only (SVG <animate> causes continuous repaint) */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.5" fill="#6B7280" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="35" r="1" fill="#9CA3AF" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="70" r="1.2" fill="#4B5563" opacity="0.6">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>
      )}

      {/* Scanline Effect — desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)',
            }}
          />
        </div>
      )}

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <FloatingDock />
        <main className="w-full pt-24">
          {children}
        </main>
        <BackToTop />
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);