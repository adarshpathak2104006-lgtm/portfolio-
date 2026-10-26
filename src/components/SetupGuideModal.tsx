import React, { useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { X, Code, FileText, Image, Sliders, ExternalLink } from 'lucide-react';

interface SetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SetupGuideModal: React.FC<SetupGuideModalProps> = ({ isOpen, onClose }) => {
  const { labels } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-[#0D162B] text-slate-900 dark:text-[#F0FDF4] border border-slate-200 dark:border-[#1E2E4A] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#38BDF8]">
          <Sliders className="w-5 h-5" />
          <span className="text-xs font-semibold tracking-wider uppercase font-mono">Developer & Customization Guide</span>
        </div>

        <h2 id="setup-guide-title" className="font-display text-2xl font-bold mb-4">
          How to Customize Assets & Profile Data
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 font-sans-clean leading-relaxed mb-6">
          All content across English and Hindi, contact links, availability status, and media paths are centralized in 
          <code className="mx-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#070B16] text-xs font-mono text-[#34D399]">
            /src/data/portfolioData.ts
          </code>.
        </p>

        <div className="space-y-6">
          {/* Step 1: Portrait */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#070B16] border border-slate-200 dark:border-[#1E2E4A] space-y-2">
            <h3 className="font-display font-semibold text-sm flex items-center gap-2 text-slate-900 dark:text-[#F0FDF4]">
              <Image className="w-4 h-4 text-[#38BDF8]" />
              1. Adding a Headshot or Portrait Photo
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans-clean">
              Place your image file in <code className="font-mono text-[11px] text-[#34D399]">/public/portrait.jpg</code>, then update 
              <code className="font-mono text-[11px] text-[#34D399]"> portraitPath: '/portrait.jpg'</code> in <code className="font-mono text-[11px]">portfolioConfig</code>. 
              When left blank, the app renders the bespoke creative developer geometric insignia frame.
            </p>
          </div>

          {/* Step 2: Resume PDF */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#070B16] border border-slate-200 dark:border-[#1E2E4A] space-y-2">
            <h3 className="font-display font-semibold text-sm flex items-center gap-2 text-slate-900 dark:text-[#F0FDF4]">
              <FileText className="w-4 h-4 text-[#34D399]" />
              2. Updating or Replacing the Resume Asset
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans-clean">
              The verified resume is currently served from <code className="font-mono text-[11px] text-[#38BDF8]">{portfolioConfig.resumeAssetPath}</code>.
              To provide a custom PDF version, drop your file into <code className="font-mono text-[11px]">/public/resume.pdf</code> and update 
              <code className="font-mono text-[11px] text-[#34D399]"> resumeAssetPath: '/resume.pdf'</code> in <code className="font-mono text-[11px]">portfolioData.ts</code>.
            </p>
          </div>

          {/* Step 3: Social & Links */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#070B16] border border-slate-200 dark:border-[#1E2E4A] space-y-2">
            <h3 className="font-display font-semibold text-sm flex items-center gap-2 text-slate-900 dark:text-[#F0FDF4]">
              <Code className="w-4 h-4 text-[#38BDF8]" />
              3. Updating Social Links & Availability
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans-clean">
              Modify the <code className="font-mono text-[11px] text-[#34D399]">social</code> object and <code className="font-mono text-[11px] text-[#34D399]">isOpenToOpportunities: true/false</code> in <code className="font-mono text-[11px]">portfolioData.ts</code>.
              The availability badge in the hero updates instantly across both themes.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-[#1E2E4A] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#059669] dark:from-[#38BDF8] dark:to-[#34D399] text-white dark:text-[#070B16] font-semibold text-xs transition-all shadow-sm hover:brightness-110"
          >
            {labels.close}
          </button>
        </div>
      </div>
    </div>
  );
};
