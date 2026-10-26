import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { X, Download, ZoomIn, ZoomOut, RotateCcw, ExternalLink, Printer, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { labels, t } = useLanguage();
  const [zoomLevel, setZoomLevel] = useState(1);

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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = portfolioConfig.resumeAssetPath;
    link.download = portfolioConfig.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open(portfolioConfig.resumeAssetPath, '_blank');
    if (printWindow) {
      printWindow.focus();
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-viewer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-[#0D162B] text-slate-900 dark:text-[#F0FDF4] border border-slate-200 dark:border-[#1E2E4A] rounded-3xl max-w-4xl w-full h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#1E2E4A] bg-slate-50 dark:bg-[#0D162B]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
            <div>
              <h2 id="resume-viewer-title" className="font-display font-bold text-base sm:text-lg">
                {portfolioConfig.primaryName} · {t({ en: 'Official Verified Resume', hi: 'आधिकारिक सत्यापित बायोडाटा' })}
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                <CheckCircle className="w-3 h-3 text-[#34D399]" />
                <span>Source: Primary uploaded credentials · BBA CSJMU</span>
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-200/70 dark:bg-[#142244] rounded-full px-2 py-1">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
                title="Zoom Out"
                className="p-1 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-1 min-w-[3rem] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(1.8, z + 0.15))}
                title="Zoom In"
                className="p-1 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                title="Reset Zoom"
                className="p-1 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Print action */}
            <button
              type="button"
              onClick={handlePrint}
              title="Print Resume"
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#38BDF8] text-slate-700 dark:text-slate-300 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Direct Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#059669] dark:from-[#38BDF8] dark:to-[#34D399] text-white dark:text-[#070B16] font-semibold text-xs transition-all shadow-sm hover:brightness-110"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{labels.downloadResume}</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content: High-Resolution Resume Document Preview */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start bg-slate-100 dark:bg-[#070B16]">
          <div
            className="transition-transform duration-200 origin-top shadow-2xl rounded-lg bg-white overflow-hidden max-w-2xl border border-slate-300 dark:border-slate-700"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={portfolioConfig.resumeAssetPath}
              alt="Official Resume of Adarsh Pathak"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-[#1E2E4A] bg-slate-50 dark:bg-[#0D162B] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span>{portfolioConfig.resumeFileName} · Image Document Asset</span>
          <a
            href={portfolioConfig.resumeAssetPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0284C7] dark:text-[#38BDF8] hover:text-[#34D399] flex items-center gap-1 font-sans"
          >
            <span>Open in raw tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
