import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface IntroMonogramProps {
  onComplete: () => void;
}

export const IntroMonogram: React.FC<IntroMonogramProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lineExpanded, setLineExpanded] = useState(false);
  const [textAppeared, setTextAppeared] = useState(false);
  const { labels } = useLanguage();

  const dismissIntro = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400);
  };

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      dismissIntro();
      return;
    }

    const t1 = setTimeout(() => setLineExpanded(true), 150);
    const t2 = setTimeout(() => setTextAppeared(true), 400);
    const t3 = setTimeout(() => {
      dismissIntro();
    }, 2000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        dismissIntro();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome Intro"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070B16] text-[#F0FDF4] transition-opacity duration-500 cursor-pointer"
      onClick={dismissIntro}
    >
      {/* Cosmic Nebula Blue and White Green ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.15),rgba(52,211,153,0.08),transparent_70%)] pointer-events-none" />

      {/* Monogram Capsule Display */}
      <div className="relative flex flex-col items-center justify-center px-6">
        <div className="flex items-center gap-4">
          <span
            className={`font-display text-5xl md:text-6xl tracking-widest text-[#F0FDF4] transition-all duration-700 ${
              textAppeared ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {portfolioConfig.monogram}
          </span>
          <span
            className={`text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#34D399] transition-all duration-700 delay-150 ${
              textAppeared ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
            }`}
          >
            Portfolio
          </span>
        </div>

        {/* Fine nebula blue into white green luminous hairline */}
        <div className="relative w-48 md:w-64 h-[1.5px] my-5 overflow-hidden bg-slate-800">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#38BDF8] to-[#34D399] transition-all duration-1000 ease-out ${
              lineExpanded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          />
        </div>

        <p
          className={`text-xs tracking-[0.25em] uppercase text-slate-400 font-sans-clean transition-all duration-700 delay-300 ${
            textAppeared ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {portfolioConfig.primaryName}
        </p>

        {/* Skip button for accessibility */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dismissIntro();
          }}
          className="mt-8 text-[11px] tracking-wider uppercase text-slate-500 hover:text-[#34D399] transition-colors py-1 px-3 rounded border border-slate-800 hover:border-[#38BDF8]/40"
        >
          {labels.skipIntro} · ESC
        </button>
      </div>
    </div>
  );
};
