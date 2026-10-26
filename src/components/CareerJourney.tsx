import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, MapPin, CheckCircle, Briefcase } from 'lucide-react';

export const CareerJourney: React.FC = () => {
  const { t, labels } = useLanguage();

  return (
    <section id="journey" className="py-24 border-t border-slate-200/60 dark:border-[#1E2E4A]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0284C7] dark:text-[#38BDF8]">
              02. {labels.journeyTitle}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F0FDF4] mt-2">
              {t({ en: 'Experience & Milestones', hi: 'व्यावसायिक अनुभव एवं पड़ाव' })}
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-sans-clean">
            {labels.journeySubtitle}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-slate-300 dark:border-[#1E2E4A] space-y-12 ml-2 sm:ml-4">
          {journeyMilestones.map((milestone, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#070B16] border-2 border-[#34D399] transition-transform group-hover:scale-125 group-hover:bg-[#34D399]" />

              {/* Card Container */}
              <div className="bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] rounded-2xl p-6 sm:p-8 hover:border-[#38BDF8]/50 transition-all duration-300 shadow-sm hover:shadow-md">
                
                {/* Header row: Role, dates, location */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-[#F0FDF4]">
                      {t(milestone.role)}
                    </h3>
                    <p className="text-sm font-semibold text-[#0284C7] dark:text-[#38BDF8] mt-0.5">
                      {t(milestone.organization)}
                    </p>
                  </div>

                  {/* Metadata: Period & Location (Unboxed text with quiet separators) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-sans-clean font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#34D399]" />
                      {milestone.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {t(milestone.location)}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Nature of experience */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 font-editorial italic">
                  <Briefcase className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{t(milestone.type)}</span>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2 mb-4">
                  {milestone.responsibilities.map((resp, i) => (
                    <p key={i} className="text-sm text-slate-600 dark:text-slate-300 font-sans-clean leading-relaxed">
                      {t(resp)}
                    </p>
                  ))}
                </div>

                {/* Verified Highlights */}
                {milestone.verifiedHighlights.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-[#1E2E4A]/80 space-y-1.5">
                    {milestone.verifiedHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                        <span>{t(hl)}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
