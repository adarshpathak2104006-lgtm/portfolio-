import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { IntroMonogram } from './components/IntroMonogram';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CareerJourney } from './components/CareerJourney';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { SetupGuideModal } from './components/SetupGuideModal';

const PortfolioContent: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0FDF9] dark:bg-[#070B16] text-[#0F172A] dark:text-[#F0FDF4] transition-colors duration-300 selection:bg-[#34D399]/30">
      {/* Short, elegant monogram intro (skippable, accessible) */}
      {!introFinished && <IntroMonogram onComplete={() => setIntroFinished(true)} />}

      {/* Floating Capsule Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />
        <About />
        <CareerJourney />
        <SkillsSection />
        <ProjectsGallery />
        <AchievementsSection />
        <EducationCertifications
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <ContactSection />
      </main>

      {/* Premium Hybrid Footer */}
      <Footer onOpenGuideModal={() => setIsGuideModalOpen(true)} />

      {/* Interactive Resume Document Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Developer / Asset Customization Guide Modal */}
      <SetupGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
