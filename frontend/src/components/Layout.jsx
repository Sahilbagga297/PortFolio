import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
            {/* Enhanced Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Gradient orbs with improved positioning */}
                <div
                    className="absolute w-[1000px] h-[1000px] bg-gradient-to-r from-gray-800/20 via-gray-700/15 to-gray-600/10 rounded-full blur-3xl transition-all duration-[3000ms] ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04 + scrollY * 0.15}px) rotate(${mousePosition.x * 0.015}deg)`,
                        top: '-25%',
                        left: '-15%',
                        animation: 'float 8s ease-in-out infinite'
                    }}
                />
                <div
                    className="absolute w-[800px] h-[800px] bg-gradient-to-r from-gray-700/15 via-gray-600/12 to-gray-500/8 rounded-full blur-3xl transition-all duration-[2500ms] ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03 - scrollY * 0.08}px) rotate(${mousePosition.x * -0.012}deg)`,
                        bottom: '-20%',
                        right: '-10%',
                        animation: 'float 10s ease-in-out infinite reverse'
                    }}
                />
                <div
                    className="absolute w-[600px] h-[600px] bg-gradient-to-r from-gray-600/10 to-gray-500/8 rounded-full blur-2xl transition-all duration-[2000ms] ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`,
                        top: '45%',
                        right: '15%',
                        animation: 'float 12s ease-in-out infinite'
                    }}
                />

                {/* Additional accent orbs */}
                <div
                    className="absolute w-[400px] h-[400px] bg-gradient-to-br from-white/5 to-gray-400/5 rounded-full blur-2xl"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                        top: '20%',
                        left: '30%',
                        animation: 'pulse 6s ease-in-out infinite'
                    }}
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Animated Dots Pattern */}
            <div className="absolute inset-0 opacity-20 z-0">
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

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)'
                    }}
                />
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 pt-24">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}
export default Layout;