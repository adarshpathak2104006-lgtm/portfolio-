import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

interface EducationCertificationsProps {
  onOpenResumeModal: () => void;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({ onOpenResumeModal }) => {
  const { t, labels } = useLanguage();

  const courseworkList = [
    { en: 'Business Finance', hi: 'बिजनेस फाइनेंस' },
    { en: 'Marketing Management', hi: 'मार्केटिंग मैनेजमेंट' },
    { en: 'Human Resource Management', hi: 'मानव संसाधन प्रबंधन' },
    { en: 'Business Environment & Ethics', hi: 'व्यावसायिक वातावरण व नैतिकता' },
    { en: 'Business Communication', hi: 'व्यावसायिक संचार' },
    { en: 'Office Management', hi: 'कार्यालय प्रबंधन' },
  ];

  return (
    <section id="credentials" className="py-24 border-t border-slate-200/60 dark:border-[#1E2E4A]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0284C7] dark:text-[#38BDF8]">
              06. {labels.educationTitle}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F0FDF4] mt-2">
              {t({ en: 'Academic & Certified Qualifications', hi: 'शैक्षणिक योग्यता एवं प्रमाणपत्र' })}
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-sans-clean">
            {labels.educationSubtitle}
          </p>
        </div>

        {/* 2-Column Split: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Formal Degrees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-[#1E2E4A]">
              <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-[#F0FDF4]">
                {t({ en: 'Formal Education', hi: 'औपचारिक शिक्षा' })}
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] shadow-sm hover:border-[#38BDF8]/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-2 text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                      {edu.period}
                    </span>
                    <span className="font-medium text-[#34D399]">
                      {t(edu.status)}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-[#F0FDF4] mb-1">
                    {t(edu.degree)}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {t(edu.institution)}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 dark:border-[#1E2E4A]/80 pt-3">
                    {edu.highlights.map((hl, i) => (
                      <p key={i} className="text-xs text-slate-500 dark:text-slate-400 font-sans-clean leading-relaxed flex items-start gap-1.5">
                        <span className="text-[#34D399] mt-0.5">•</span>
                        <span>{t(hl)}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Relevant Coursework Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#070B16] border border-slate-200 dark:border-[#1E2E4A] space-y-3">
              <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-[#F0FDF4] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#38BDF8]" />
                {t({ en: 'Relevant BBA Coursework', hi: 'प्रमुख बीबीए पाठ्यक्रम' })}
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-sans-clean">
                {courseworkList.map((course, i) => (
                  <React.Fragment key={i}>
                    <span>{t(course)}</span>
                    {i < courseworkList.length - 1 && (
                      <span aria-hidden="true" className="text-[#34D399]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Training & Professional Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#1E2E4A]">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#34D399]" />
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-[#F0FDF4]">
                  {t({ en: 'Training & Certifications', hi: 'प्रशिक्षण एवं प्रमाणन' })}
                </h3>
              </div>

              {/* View resume verification action */}
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:text-[#34D399] transition-colors flex items-center gap-1 font-mono"
              >
                <span>{labels.viewResume}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] shadow-sm hover:border-[#38BDF8]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-mono">
                      <span className="font-semibold text-[#38BDF8]">{cert.year}</span>
                      <span className="text-[#34D399]">{t(cert.status)}</span>
                    </div>

                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-[#F0FDF4] mb-1">
                      {t(cert.name)}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                      {t(cert.issuingOrg)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-[#1E2E4A]/80">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      {t({ en: 'Competencies', hi: 'दक्षताएं' })}
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-600 dark:text-slate-300 font-sans-clean font-mono">
                      {cert.skillsGained.map((skill, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span>{skill}</span>
                          {sIdx < cert.skillsGained.length - 1 && (
                            <span aria-hidden="true" className="text-[#34D399]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Seminars & Workshop Details Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A]">
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-[#F0FDF4] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                {t({ en: 'Specialized Workshops & Seminars (Allenhouse Business School)', hi: 'विशेष कार्यशालाएं व सेमिनार (एलनहाउस बिजनेस स्कूल)' })}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans-clean">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] mt-2 shrink-0" />
                  <span>
                    <strong>Fundamentals of Brand Building (2026)</strong>: Covered brand architecture, consumer perceptual mapping, and emotional resonance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
                  <span>
                    <strong>Fintech Club Seminar (2026)</strong>: Participated in deep dives examining digital lending mechanics, UPI transaction volume, and automated risk scoring.
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
