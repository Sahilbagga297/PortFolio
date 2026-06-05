import React, { useState, useCallback } from 'react';
import './App.css';
import Layout from './components/Layout.jsx';
import Preloader from './components/Preloader.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import AchievementsSection from './sections/AchievementsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <div
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Layout>
          <HeroSection />

          {/* Section separator */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <AboutSection />

          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <ExperienceSection />

          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <ProjectsSection />

          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <AchievementsSection />

          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <ContactSection />
        </Layout>
      </div>
    </>
  );
};

export default App;
