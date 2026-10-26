import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Eye, Download, ArrowDownRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenGuideModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenGuideModal }) => {
  const { t, labels } = useLanguage();

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Direct download trigger of the uploaded resume asset
    const link = document.createElement('a');
    link.href = portfolioConfig.resumeAssetPath;
    link.download = portfolioConfig.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden"
    >
      {/* Nebula Blue and Aurora White Green ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#34D399]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, Badges, CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top row: Status & Location (Clean typography, no garish pills) */}
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-wide">
              {portfolioConfig.isOpenToOpportunities && (
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 text-[#059669] dark:text-[#34D399]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
                  </span>
                  <span className="font-medium">{t(portfolioConfig.availabilityNote)}</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{t(portfolioConfig.social.location)}</span>
              </div>
            </div>

            {/* Candidate Identity & Multidisciplinary Title */}
            <div>
              <p className="font-editorial italic text-lg sm:text-xl text-[#0284C7] dark:text-[#38BDF8] mb-2 flex items-center gap-2">
                <span>{portfolioConfig.primaryName}</span>
                <span className="w-6 h-[1px] bg-[#34D399]" />
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#F0FDF4] leading-[1.15]">
                {t(portfolioConfig.headline)}
              </h1>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans-clean leading-relaxed max-w-2xl">
              {t(portfolioConfig.tagline)}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans-clean leading-relaxed max-w-2xl">
              {t(portfolioConfig.shortBio)}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0284C7] to-[#059669] dark:from-[#38BDF8] dark:to-[#34D399] text-white dark:text-[#070B16] hover:brightness-110 font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-cyan-900/30 group"
              >
                <span>{labels.exploreWork}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#0D162B]/80 hover:border-[#34D399] dark:hover:border-[#34D399] text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors backdrop-blur-sm"
              >
                <Eye className="w-4 h-4 text-[#38BDF8]" />
                <span>{labels.viewResume}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#0D162B]/80 hover:border-[#34D399] dark:hover:border-[#34D399] text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-[#34D399]" />
                <span>{labels.downloadResume}</span>
              </button>
            </div>

            {/* Quick trust cues (unboxed typography with bullets) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                <span>IBM AI Fundamentals & NLP</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>BBA @ Allenhouse Business School</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                <span>HubSpot Digital Marketing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Tall portrait in rounded frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              {/* Subtle back decorative frame with cosmic nebula glow */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-[#38BDF8]/30 dark:border-[#38BDF8]/20 transition-transform duration-500 group-hover:scale-[1.02]" />

              {/* Portrait container with tall aspect ratio */}
              <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#0D162B] via-[#0F1A34] to-[#070B16] border border-slate-200 dark:border-[#1E2E4A] shadow-2xl shadow-cyan-950/30 flex flex-col items-center justify-between p-8 text-center">
                
                {portfolioConfig.portraitPath ? (
                  <img
                    src={portfolioConfig.portraitPath}
                    alt={portfolioConfig.primaryName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  // Bespoke Creative Developer Geometric Headshot Frame
                  <div className="w-full h-full flex flex-col justify-between items-center py-4">
                    {/* Top monogram insignia */}
                    <div className="w-full flex justify-between items-center text-xs tracking-widest text-[#38BDF8]/80 font-mono">
                      <span>EST. 2025</span>
                      <span>KANPUR, IN</span>
                    </div>

                    {/* Central monogram visual representation */}
                    <div className="relative flex flex-col items-center my-auto">
                      <div className="w-32 h-32 rounded-full border border-[#38BDF8]/40 flex items-center justify-center bg-gradient-to-br from-[#38BDF8]/15 to-[#34D399]/15 relative shadow-[0_0_50px_rgba(56,189,248,0.2)]">
                        <span className="font-display text-4xl font-bold tracking-wider text-[#F0FDF4]">
                          {portfolioConfig.monogram}
                        </span>
                        {/* Concentric subtle rings */}
                        <div className="absolute -inset-2 rounded-full border border-[#34D399]/25 border-dashed animate-spin-slow" />
                      </div>
                      
                      <p className="mt-4 font-display font-medium text-sm tracking-widest text-slate-200 uppercase">
                        {portfolioConfig.primaryName}
                      </p>
                      <p className="text-xs text-[#34D399] font-editorial italic mt-1">
                        Multidisciplinary Technologist
                      </p>
                    </div>

                    {/* Bottom replaceable indicator / config note */}
                    <div className="w-full pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Sparkles className="w-3 h-3 text-[#34D399]" />
                        <span>Verified Resume Identity</span>
                      </span>
                      <button
                        type="button"
                        onClick={onOpenGuideModal}
                        className="text-[#38BDF8] hover:underline"
                        title="View setup instructions"
                      >
                        Customize Frame
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Float badge at bottom */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#0D162B] text-slate-900 dark:text-[#F0FDF4] border border-slate-200 dark:border-[#1E2E4A] rounded-2xl py-2 px-4 shadow-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                <div className="text-xs">
                  <p className="font-semibold leading-tight">Allenhouse Business School</p>
                  <p className="text-slate-400 text-[11px]">CSJMU Affiliated · BBA</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
