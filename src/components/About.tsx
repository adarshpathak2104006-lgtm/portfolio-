import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Binary, LineChart, Brain, Target, ShieldCheck, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const { t, labels } = useLanguage();

  const philosophyPillars = [
    {
      icon: Binary,
      title: {
        en: 'Data & Analytical Rigor',
        hi: 'डेटा एवं विश्लेषणात्मक सटीकता',
      },
      text: {
        en: 'Harnessing advanced MS Excel workflows, structured indexing, and data modeling to convert raw figures into strategic insights.',
        hi: 'कच्चे आंकड़ों को रणनीतिक अंतर्दृष्टि में बदलने के लिए उन्नत एमएस एक्सेल और डेटा मॉडलिंग का उपयोग।',
      },
    },
    {
      icon: Brain,
      title: {
        en: 'Applied AI & Automation',
        hi: 'व्यावहारिक एआई व स्वचालन',
      },
      text: {
        en: 'Grounded in IBM SkillsBuild AI & NLP fundamentals to expedite literature synthesis, prompt engineering, and research workflows.',
        hi: 'आईबीएम स्किल्सबिल्ड एआई और एनएलपी के आधार पर अनुसंधान, प्रॉम्प्ट इंजीनियरिंग और रिपोर्टिंग को तीव्र करना।',
      },
    },
    {
      icon: LineChart,
      title: {
        en: 'Business Finance & Strategy',
        hi: 'बिजनेस फाइनेंस व रणनीति',
      },
      text: {
        en: 'Analyzing capital dynamics, fintech trends, and operational efficiencies through structured BBA academic coursework.',
        hi: 'बीबीए पाठ्यक्रम के माध्यम से वित्तीय गतिशीलता, फिनटेक प्रवृत्तियों और परिचालन दक्षता का गहन विश्लेषण।',
      },
    },
    {
      icon: Target,
      title: {
        en: 'Inbound & Digital Reach',
        hi: 'इनबाउंड व डिजिटल पहुंच',
      },
      text: {
        en: 'Trained via HubSpot Academy and Allenhouse in customer journey mapping, brand positioning, and visual asset design.',
        hi: 'हबस्पॉट अकादमी और एलनहाउस से प्रशिक्षित, उपभोक्ता यात्रा मानचित्रण और ब्रांड संचार में पारंगत।',
      },
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-200/60 dark:border-[#1E2E4A]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0284C7] dark:text-[#38BDF8]">
              01. {labels.aboutTitle}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F0FDF4] mt-2">
              {portfolioConfig.primaryName}
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-sans-clean">
            {labels.aboutSubtitle}
          </p>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-editorial leading-relaxed">
            {portfolioConfig.fullBio.map((paragraph, index) => (
              <p key={index} className="first-letter:text-4xl first-letter:font-display first-letter:text-[#34D399] first-letter:mr-1">
                {t(paragraph)}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400 font-sans-clean">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                CSJMU Affiliated Scholar
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#38BDF8]" />
                Multidisciplinary Tech Focus
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                Hindi & English Fluency
              </span>
            </div>
          </div>

          {/* Quick Metrics / Key Truths Box */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="font-display text-base font-semibold text-slate-900 dark:text-[#F0FDF4] tracking-wide flex items-center justify-between">
              <span>{t({ en: 'Verified Foundational Strengths', hi: 'सत्यापित मुख्य योग्यताएं' })}</span>
              <span className="w-2 h-2 rounded-full bg-[#34D399]" />
            </h3>

            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-[#1E2E4A]/80 pb-3">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  {t({ en: 'Academic Institution', hi: 'शैक्षणिक संस्थान' })}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                  Allenhouse Business School (CSJMU)
                </p>
              </div>

              <div className="border-b border-slate-200 dark:border-[#1E2E4A]/80 pb-3">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  {t({ en: 'Degree & Year', hi: 'डिग्री व वर्ष' })}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                  BBA Undergraduate (2025 – 2028) · Year 2
                </p>
              </div>

              <div className="border-b border-slate-200 dark:border-[#1E2E4A]/80 pb-3">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  {t({ en: 'Key Disciplines', hi: 'प्रमुख विषय' })}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                  Finance · Marketing · HR · AI Tools · Operations
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  {t({ en: 'Core Behavioral Strengths', hi: 'व्यक्तिगत विशेषताएं' })}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                  Analytical Thinking · Adaptability · Teamwork · Presentation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] hover:border-[#38BDF8]/50 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 dark:bg-[#38BDF8]/15 text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-[#F0FDF4] mb-2">
                  {t(pillar.title)}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans-clean leading-relaxed">
                  {t(pillar.text)}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
