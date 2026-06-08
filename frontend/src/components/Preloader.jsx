import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsExiting(true);
        // Wait for exit animation to finish before calling onComplete
        setTimeout(() => {
          setIsLoading(false);
          onComplete?.();
        }, 500);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Max timeout of 3s
    const timeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        onComplete?.();
      }, 500);
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950"
      style={{
        animation: isExiting ? 'preloader-exit 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo / Initials */}
        <div
          className="relative"
          style={{ animation: 'preloader-logo-in 0.6s ease-out forwards' }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center border border-gray-600/50 shadow-2xl">
            <span className="text-3xl font-bold text-white tracking-tight">SB</span>
          </div>
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-gray-500/30 animate-ping" />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full"
            style={{ animation: 'preloader-bar 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
          />
        </div>

        <p
          className="text-gray-500 text-sm tracking-widest uppercase"
          style={{ animation: 'preloader-text-in 0.5s ease-out 0.3s both' }}
        >
          Loading
        </p>
      </div>
    </div>
  );
};

export default React.memo(Preloader);
