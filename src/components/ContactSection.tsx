import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, labels } = useLanguage();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200/60 dark:border-[#1E2E4A]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0284C7] dark:text-[#38BDF8]">
              07. {labels.contactTitle}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F0FDF4] mt-2">
              {t({ en: 'Let’s Connect Directly', hi: 'सीधे संपर्क करें' })}
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-sans-clean">
            {labels.contactSubtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Email Card */}
          <div className="p-7 rounded-3xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] hover:border-[#38BDF8]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1 font-mono">
                {t({ en: 'Direct Email', hi: 'सीधा ईमेल' })}
              </p>
              <h3 className="font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-[#F0FDF4] break-all mb-4">
                {portfolioConfig.social.email}
              </h3>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-[#1E2E4A]/80">
              <a
                href={`mailto:${portfolioConfig.social.email}`}
                className="flex-1 py-2 px-3 text-center text-xs font-semibold rounded-xl bg-gradient-to-r from-[#0284C7] to-[#059669] dark:from-[#38BDF8] dark:to-[#34D399] text-white dark:text-[#070B16] hover:brightness-110 transition-all shadow-sm"
              >
                {t({ en: 'Compose Mail', hi: 'मेल भेजें' })}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(portfolioConfig.social.email, 'email')}
                title={labels.copyEmail}
                className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#34D399] text-slate-700 dark:text-slate-300 transition-colors"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-[#34D399]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-7 rounded-3xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] hover:border-[#34D399]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#34D399]/10 text-[#059669] dark:text-[#34D399] flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1 font-mono">
                {t({ en: 'Direct Phone', hi: 'फ़ोन नंबर' })}
              </p>
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-[#F0FDF4] mb-4 font-mono">
                {portfolioConfig.social.phone}
              </h3>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-[#1E2E4A]/80">
              <a
                href={`tel:${portfolioConfig.social.phone}`}
                className="flex-1 py-2 px-3 text-center text-xs font-semibold rounded-xl bg-gradient-to-r from-[#0284C7] to-[#059669] dark:from-[#38BDF8] dark:to-[#34D399] text-white dark:text-[#070B16] hover:brightness-110 transition-all shadow-sm"
              >
                {labels.callNow}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(portfolioConfig.social.phone, 'phone')}
                title="Copy Phone"
                className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#34D399] text-slate-700 dark:text-slate-300 transition-colors"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-[#34D399]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-7 rounded-3xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] hover:border-[#34D399]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#34D399]/10 text-[#34D399] flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1 font-mono">
                WhatsApp Messaging
              </p>
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-[#F0FDF4] mb-4">
                Fast Response
              </h3>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-[#1E2E4A]/80">
              <a
                href={portfolioConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-2 px-3 text-center text-xs font-semibold rounded-xl bg-[#059669] hover:bg-[#10B981] text-white transition-colors shadow-sm"
              >
                {labels.whatsAppChat}
              </a>
            </div>
          </div>

        </div>

        {/* Additional verified contact details banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D162B] border border-slate-200 dark:border-[#1E2E4A] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-sans-clean">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#38BDF8]" />
              <span>{t(portfolioConfig.social.location)}</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-400">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#34D399]" />
              <span className="font-mono">Standard Time: IST (UTC+5:30)</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-400">·</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span>{t(portfolioConfig.availabilityNote)}</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            {portfolioConfig.social.linkedin && (
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#38BDF8] text-slate-700 dark:text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {portfolioConfig.social.github && (
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#34D399] text-slate-700 dark:text-slate-300 hover:text-[#34D399] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
