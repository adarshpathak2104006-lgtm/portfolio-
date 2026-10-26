import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, labels } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-[#0D162B] text-slate-900 dark:text-[#F0FDF4] border border-slate-200 dark:border-[#1E2E4A] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-[#34D399]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image / Preview */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 rounded-t-3xl">
          <img
            src={project.image}
            alt={t(project.title)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D162B] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#34D399] font-mono">
              {t(project.categoryLabel)}
            </span>
            <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              {t(project.title)}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Summary & Overview */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-mono">
              {t({ en: 'Overview & Context', hi: 'विवरण एवं संदर्भ' })}
            </h3>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-editorial leading-relaxed">
              {t(project.fullDescription)}
            </p>
          </div>

          {/* Key Outcomes */}
          {project.keyOutcomes.length > 0 && (
            <div className="bg-slate-50 dark:bg-[#070B16] p-6 rounded-2xl border border-slate-200 dark:border-[#1E2E4A] space-y-3">
              <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-[#F0FDF4] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                {labels.keyOutcomes}
              </h4>
              <ul className="space-y-2">
                {project.keyOutcomes.map((outcome, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans-clean flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] shrink-0 mt-2" />
                    <span>{t(outcome)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies & Competencies */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-mono">
              <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
              {labels.technologiesUsed}
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium font-sans-clean font-mono">
              {project.technologies.map((tech, i) => (
                <React.Fragment key={i}>
                  <span>{tech}</span>
                  {i < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-[#34D399]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Action Links & Verified Note */}
          <div className="pt-6 border-t border-slate-200 dark:border-[#1E2E4A] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold py-2 px-4 rounded-full bg-gradient-to-r from-[#0284C7] to-[#059669] dark:from-[#38BDF8] dark:to-[#34D399] text-white dark:text-[#070B16] hover:brightness-110 transition-all"
                >
                  <span>{labels.viewProject}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}

              {project.sourceUrl ? (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold py-2 px-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#38BDF8] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{labels.viewSource}</span>
                </a>
              ) : null}

              {!project.liveUrl && !project.sourceUrl && (
                <span className="text-xs text-slate-400 italic">
                  {t({
                    en: 'Academic & observational casework based on verified training records.',
                    hi: 'सत्यापित प्रशिक्षण रिकॉर्ड पर आधारित अकादमिक एवं व्यावहारिक केस अध्ययन।',
                  })}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-medium text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {labels.close}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
