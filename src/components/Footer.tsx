import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Heart, Sliders, Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
  onOpenGuideModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuideModal }) => {
  const { t, labels } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-[#1E2E4A]/80 bg-slate-50 dark:bg-[#070B16] text-slate-600 dark:text-slate-400 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-[#1E2E4A]">
          
          {/* Brand Signature */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm tracking-widest bg-gradient-to-br from-[#38BDF8] to-[#34D399] text-[#070B16] shadow-sm">
                {portfolioConfig.monogram}
              </span>
              <div>
                <p className="font-display font-bold text-base text-slate-900 dark:text-[#F0FDF4]">
                  {portfolioConfig.primaryName}
                </p>
                <p className="text-xs text-[#0284C7] dark:text-[#38BDF8] font-editorial italic">
                  {t({ en: 'Technology · AI Research · Business Operations', hi: 'प्रौद्योगिकी · एआई अनुसंधान · व्यावसायिक संचालन' })}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans-clean leading-relaxed">
              {t(portfolioConfig.shortBio)}
            </p>
          </div>

          {/* Actions: Social links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${portfolioConfig.social.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full border border-slate-300 dark:border-slate-800 hover:border-[#38BDF8] text-slate-700 dark:text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              {portfolioConfig.social.linkedin && (
                <a
                  href={portfolioConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-full border border-slate-300 dark:border-slate-800 hover:border-[#38BDF8] text-slate-700 dark:text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {portfolioConfig.social.github && (
                <a
                  href={portfolioConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-full border border-slate-300 dark:border-slate-800 hover:border-[#34D399] text-slate-700 dark:text-slate-300 hover:text-[#34D399] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-300 dark:border-[#1E2E4A] hover:border-[#38BDF8] text-slate-800 dark:text-slate-200 text-xs font-medium hover:text-[#38BDF8] transition-colors"
            >
              <span>{labels.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans-clean">
          <p>© {currentYear} {portfolioConfig.primaryName}. All verified academic & professional credentials reserved.</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenGuideModal}
              className="hover:text-[#34D399] transition-colors flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{labels.configGuide}</span>
            </button>
            <span aria-hidden="true">·</span>
            <span>Kanpur, UP</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
