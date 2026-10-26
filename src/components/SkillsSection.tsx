import React, { useState } from 'react';
import { skillsData, skillsCategories } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  FileSpreadsheet,
  BrainCircuit,
  Cpu,
  Megaphone,
  Palette,
  Presentation,
  FileText,
  LineChart,
  Compass,
  CheckCircle2,
} from 'lucide-react';

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  BrainCircuit,
  Cpu,
  Megaphone,
  Palette,
  Presentation,
  FileText,
  LineChart,
  Compass,
};

export const SkillsSection: React.FC = () => {
  const { t, labels } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 border-t border-slate-200/60 dark:border-[#1E2E4A]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0284C7] dark:text-[#38BDF8]">
              03. {labels.skillsTitle}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F0FDF4] mt-2">
              {t({ en: 'Competencies & Tools', hi: 'कौशल एवं तकनीकी टूल्स' })}
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-sans-clean">
            {labels.skillsSubtitle}
          </p>
        </div>

        {/* Category Filter Tabs (Segmented control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] rounded-2xl w-fit mb-12">
          {skillsCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-[#142244] text-[#0284C7] dark:text-[#34D399] shadow-sm font-semibold border border-[#34D399]/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#F0FDF4]'
                }`}
              >
                {t(cat.label)}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || BrainCircuit;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] hover:border-[#34D399]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon & Verification Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 dark:bg-[#38BDF8]/15 border border-slate-200 dark:border-[#1E2E4A] text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center transition-transform group-hover:scale-105">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                      Verified
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-[#F0FDF4] mb-2">
                    {skill.name}
                  </h3>

                  {/* Skill Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans-clean leading-relaxed mb-4">
                    {t(skill.description)}
                  </p>
                </div>

                {/* Practical Context / Training Credential */}
                <div className="pt-3 border-t border-slate-100 dark:border-[#1E2E4A]/80">
                  <p className="text-[11px] text-[#0284C7] dark:text-[#34D399] font-editorial italic">
                    {t(skill.context)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Behavioral Capabilities banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-display font-bold text-base text-slate-900 dark:text-[#F0FDF4]">
              {t({ en: 'Behavioral & Collaborative Strengths', hi: 'व्यावहारिक एवं सहयोगात्मक कौशल' })}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans-clean mt-1">
              {t({
                en: 'Demonstrated through academic symposiums, team case competitions, and field evaluations.',
                hi: 'अकादमिक संगोष्ठियों, टीम प्रतियोगिताओं और फील्ड मूल्यांकन के माध्यम से प्रदर्शित।',
              })}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-700 dark:text-slate-300 font-sans-clean">
            <span>Analytical Thinking</span>
            <span aria-hidden="true" className="text-[#34D399]">·</span>
            <span>Problem Solving</span>
            <span aria-hidden="true" className="text-[#34D399]">·</span>
            <span>Adaptability</span>
            <span aria-hidden="true" className="text-[#34D399]">·</span>
            <span>Teamwork</span>
            <span aria-hidden="true" className="text-[#34D399]">·</span>
            <span>Presentation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
