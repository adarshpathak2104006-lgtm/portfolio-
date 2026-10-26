import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Award, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { t, labels } = useLanguage();

  return (
    <section id="achievements" className="py-24 border-t border-slate-200/60 dark:border-[#1E2E4A]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0284C7] dark:text-[#38BDF8]">
              05. {labels.achievementsTitle}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F0FDF4] mt-2">
              {t({ en: 'Verified Milestones & Impact', hi: 'सत्यापित उपलब्धियां एवं प्रभाव' })}
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-sans-clean">
            {labels.achievementsSubtitle}
          </p>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] hover:border-[#38BDF8]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-[#0284C7] dark:text-[#34D399] font-medium tracking-wide">
                    {t(item.category)}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-[#F0FDF4] mb-2 leading-snug">
                  {t(item.title)}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {t(item.issuer)}
                </p>

                {/* Factual Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans-clean leading-relaxed">
                  {t(item.description)}
                </p>
              </div>

              {/* Bottom verified indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-[#1E2E4A]/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-[#34D399] font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Resume Verified Record</span>
                </span>
                <Award className="w-4 h-4 text-slate-400 dark:text-slate-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Observational Spotlight */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#0D162B] via-[#0F1E3D] to-[#070B16] text-[#F0FDF4] border border-[#1E2E4A] relative overflow-hidden shadow-xl shadow-cyan-950/20">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#34D399] font-mono">
                <ShieldCheck className="w-4 h-4" />
                {t({ en: 'Fieldwork Spotlight', hi: 'औद्योगिक अध्ययन' })}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                {t({
                  en: 'Amul Industrial Automation & Supply Chain Observational Fieldwork',
                  hi: 'अमूल औद्योगिक स्वचालन एवं आपूर्ति श्रृंखला फील्ड अध्ययन',
                })}
              </h3>
              <p className="text-sm text-slate-300 font-editorial leading-relaxed max-w-2xl">
                {t({
                  en: 'Direct observational study evaluating how high-velocity conveyor sorting, thermal regulation, and clean automated packaging uphold strict food safety standards and multi-state inventory flow.',
                  hi: 'प्रत्यक्ष औद्योगिक अध्ययन, जिसमें उच्च-गति कन्वेयर छंटाई, तापमान नियंत्रण और स्वचालित पैकेजिंग द्वारा खाद्य सुरक्षा मानकों और अंतर-राज्यीय वितरण का मूल्यांकन किया गया।',
                })}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-4 rounded-2xl bg-[#070B16]/80 border border-[#38BDF8]/30 text-xs space-y-1 text-slate-300">
                <p className="text-[#38BDF8] font-semibold">Manufacturing Context</p>
                <p>Process Automation</p>
                <p>Quality Gates & Sensory Audits</p>
                <p>Cold-Chain Distribution Logistics</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
