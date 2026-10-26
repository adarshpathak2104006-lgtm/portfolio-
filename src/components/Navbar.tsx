import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { navigationItems, portfolioConfig } from '../data/portfolioData';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navigationItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Primary Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-5 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 max-w-5xl w-full border ${
            scrolled
              ? 'bg-[#0D162B]/90 dark:bg-[#0D162B]/90 backdrop-blur-md border-[#1E2E4A] shadow-xl shadow-cyan-950/20 text-[#F0FDF4]'
              : 'bg-[#FFFFFF]/90 dark:bg-[#0D162B]/85 backdrop-blur-md border-[#D1E7DD] dark:border-[#1E2E4A] shadow-lg text-[#0F172A] dark:text-[#F0FDF4]'
          }`}
        >
          {/* Brand Wordmark / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] rounded-full px-1"
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm tracking-widest bg-gradient-to-br from-[#38BDF8] to-[#34D399] text-[#070B16] shadow-sm">
              {portfolioConfig.monogram}
            </span>
            <span className="font-display font-semibold tracking-wide text-xs sm:text-sm hidden sm:inline text-inherit group-hover:text-[#34D399] transition-colors">
              {portfolioConfig.primaryName}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-xs tracking-wide py-1.5 px-3 transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#34D399] ${
                    isActive
                      ? 'text-[#34D399] dark:text-[#34D399] font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-[#38BDF8]'
                  }`}
                >
                  {t(item.label)}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#38BDF8] to-[#34D399] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Utilities: Language Toggle, Theme Toggle, Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={`Switch language. Current: ${language === 'en' ? 'English' : 'Hindi'}`}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#34D399] text-slate-700 dark:text-slate-300 hover:text-[#34D399] dark:hover:text-[#34D399] transition-colors focus-visible:ring-2 focus-visible:ring-[#34D399]"
            >
              <Globe className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="font-semibold">{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-1.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#38BDF8] text-slate-700 dark:text-slate-300 hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#34D399]" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-1.5 lg:hidden rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-[#34D399] focus-visible:ring-2 focus-visible:ring-[#34D399]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-30 lg:hidden bg-black/75 backdrop-blur-sm flex flex-col justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#0D162B] text-[#F0FDF4] border-t border-[#1E2E4A] rounded-t-3xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#1E2E4A]">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs bg-gradient-to-br from-[#38BDF8] to-[#34D399] text-[#070B16]">
                  {portfolioConfig.monogram}
                </span>
                <span className="font-display text-sm font-semibold tracking-wide">
                  {portfolioConfig.primaryName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#34D399]/15 text-[#34D399] font-medium'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {t(item.label)}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#1E2E4A] flex items-center justify-between text-xs text-slate-400">
              <span>{portfolioConfig.social.location.en}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="px-2.5 py-1 rounded bg-[#142244] text-[#34D399]"
                >
                  {language === 'en' ? 'हिन्दी में देखें' : 'View in English'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
