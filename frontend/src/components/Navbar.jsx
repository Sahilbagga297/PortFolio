import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Coffee } from 'lucide-react'; // Example icon, replace if needed
// Navbar Component (from your previous request, integrated here)
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md px-6 py-6 z-50 shadow-lg rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div
          className={`bg-white/80 backdrop-blur-lg border border-amber-200/50 rounded-2xl px-8 py-4 shadow-xl shadow-amber-100/200 transition-all duration-1000 shadow-lg shadow-amber-200/40
          }`}
        >
          <div className="flex justify-between items-center ">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-amber-800 hover:text-orange-600 transition-all duration-300 font-medium relative group ${
                      isActive ? "text-orange-600" : ""
                    }`
                  }
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              ))}
            </div>

            <button
              className="md:hidden bg-amber-100 p-2 rounded-lg"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg border border-amber-200/50 rounded-b-2xl shadow-xl shadow-amber-100/20 mt-2 py-4 px-8 absolute w-[calc(100%-3rem)] left-6 right-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-amber-800 hover:text-orange-600 transition-all duration-300 font-medium ${
                        isActive ? "text-orange-600" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// Main App component that sets up routing
