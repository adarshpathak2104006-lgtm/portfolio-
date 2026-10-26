import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, ZoomIn } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const { t, labels } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: { en: 'All Works', hi: 'सभी कार्य' } },
    { id: 'ai-data', label: { en: 'AI & Data Tools', hi: 'एआई व डेटा टूल्स' } },
    { id: 'operations', label: { en: 'Operations & Studies', hi: 'परिचालन व अध्ययन' } },
    { id: 'marketing', label: { en: 'Marketing & Strategy', hi: 'मार्केटिंग व रणनीति' } },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="py-24 border-t border-slate-200/60 dark:border-[#1E2E4A]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0284C7] dark:text-[#38BDF8]">
              04. {labels.projectsTitle}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F0FDF4] mt-2">
              {t({ en: 'Selected Works & Case Studies', hi: 'प्रमुख प्रोजेक्ट्स व केस स्टडीज़' })}
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-sans-clean">
            {labels.projectsSubtitle}
          </p>
        </div>

        {/* Filter Bar (Segmented button control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] rounded-2xl w-fit mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-[#142244] text-[#0284C7] dark:text-[#34D399] shadow-sm font-semibold border border-[#34D399]/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#F0FDF4]'
                }`}
              >
                {t(tab.label)}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] rounded-3xl overflow-hidden hover:border-[#38BDF8]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview with Hover Zoom */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.image}
                    alt={t(project.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-transparent to-transparent pointer-events-none" />

                  {/* Zoom indicator on hover */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-[#38BDF8]" />
                  </div>

                  {/* Category unboxed tag on image bottom */}
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-semibold tracking-wider text-[#34D399] uppercase font-mono">
                      {t(project.categoryLabel)}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3
                    className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-[#F0FDF4] group-hover:text-[#38BDF8] transition-colors cursor-pointer"
                    onClick={() => setActiveModalProject(project)}
                  >
                    {t(project.title)}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 font-sans-clean leading-relaxed">
                    {t(project.summary)}
                  </p>

                  {/* Unboxed Technology Tags (Zero-Pill discipline: pure text with dots) */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-sans-clean font-mono">
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
              </div>

              {/* Card Footer: View Case Study button */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-[#1E2E4A]/80 mt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:text-[#34D399] transition-colors pt-4 group/btn"
                >
                  <span>{labels.readMore}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                <span className="text-[11px] text-slate-400 font-editorial italic pt-4">
                  {project.featured ? 'Featured Case Study' : 'Observational Analysis'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
