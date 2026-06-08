import React, { useState, useCallback, useEffect, lazy, Suspense } from 'react';
import './App.css';
import Layout from './components/Layout.jsx';
import Preloader from './components/Preloader.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';

// Lazy-load below-the-fold sections to reduce initial JS parse/eval
const ProjectsSection = lazy(() => import('./sections/ProjectsSection.jsx'));
const AchievementsSection = lazy(() => import('./sections/AchievementsSection.jsx'));
const ContactSection = lazy(() => import('./sections/ContactSection.jsx'));

// Invisible fallback that preserves layout space to prevent CLS
const SectionFallback = () => (
  <div style={{ minHeight: '400px' }} aria-hidden="true" />
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    window.dispatchEvent(new Event('resize'));
  }, [isLoaded]);

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

          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>

          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <Suspense fallback={<SectionFallback />}>
            <AchievementsSection />
          </Suspense>

          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </Layout>
      </div>
    </>
  );
};

export default App;
