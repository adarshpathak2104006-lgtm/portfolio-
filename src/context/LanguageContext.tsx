import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, BilingualText } from '../types/portfolio';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (item: BilingualText | string) => string;
  labels: Record<string, string>;
}

const uiTranslations: Record<Language, Record<string, string>> = {
  en: {
    exploreWork: 'Explore My Work',
    viewResume: 'View Resume',
    downloadResume: 'Download Resume',
    openToWork: 'Open to Opportunities',
    contactMe: 'Get In Touch',
    copyEmail: 'Copy Email',
    copied: 'Copied to Clipboard!',
    callNow: 'Call Directly',
    whatsAppChat: 'Chat on WhatsApp',
    readMore: 'Read Full Case Study',
    close: 'Close',
    skipIntro: 'Skip Intro',
    backToTop: 'Back to Top',
    verifiedCred: 'Verified Credential',
    allProjects: 'All Projects',
    viewProject: 'View Project',
    viewSource: 'View Source',
    keyOutcomes: 'Key Highlights & Outcomes',
    technologiesUsed: 'Core Competencies',
    educationTitle: 'Academic & Professional Credentials',
    educationSubtitle: 'Verified coursework, certifications, and educational milestones.',
    projectsTitle: 'Curated Works & Field Studies',
    projectsSubtitle: 'Applied analytics, operations research, and strategic digital campaigns.',
    journeyTitle: 'Career & Academic Journey',
    journeySubtitle: 'Progressive milestones in business administration, AI research, and operations.',
    skillsTitle: 'Technical & Analytical Skills',
    skillsSubtitle: 'Pragmatic toolkit across data modeling, applied AI, and executive communication.',
    achievementsTitle: 'Milestones & Field Study',
    achievementsSubtitle: 'Demonstrated excellence across industrial visits, seminars, and certified programs.',
    aboutTitle: 'About & Approach',
    aboutSubtitle: 'Connecting rigorous management foundations with emerging digital capabilities.',
    contactTitle: 'Direct Contact',
    contactSubtitle: 'Available for high-impact internships, research initiatives, and business collaborations.',
    configGuide: 'Configuration Guide',
    configInstructions: 'How to customize photo, resume, and profile details',
  },
  hi: {
    exploreWork: 'मेरा कार्य देखें',
    viewResume: 'बायोडाटा (रिज्यूमे) देखें',
    downloadResume: 'रिज्यूमे डाउनलोड करें',
    openToWork: 'अवसरों के लिए उपलब्ध',
    contactMe: 'संपर्क करें',
    copyEmail: 'ईमेल कॉपी करें',
    copied: 'कॉपी हो गया!',
    callNow: 'कॉल करें',
    whatsAppChat: 'व्हाट्सएप पर बात करें',
    readMore: 'पूर्ण केस स्टडी पढ़ें',
    close: 'बंद करें',
    skipIntro: 'छोड़ें (Skip)',
    backToTop: 'शीर्ष पर जाएं',
    verifiedCred: 'सत्यापित प्रमाण पत्र',
    allProjects: 'सभी प्रोजेक्ट्स',
    viewProject: 'प्रोजेक्ट देखें',
    viewSource: 'सोर्स कोड देखें',
    keyOutcomes: 'मुख्य परिणाम व उपलब्धियां',
    technologiesUsed: 'प्रमुख क्षमताएं',
    educationTitle: 'शैक्षणिक एवं व्यावसायिक योग्यताएं',
    educationSubtitle: 'सत्यापित पाठ्यक्रम, प्रमाणन और शैक्षणिक उपलब्धियां।',
    projectsTitle: 'प्रोजेक्ट्स एवं केस स्टडीज',
    projectsSubtitle: 'व्यावहारिक विश्लेषण, परिचालन अनुसंधान और रणनीतिक डिजिटल पहल।',
    journeyTitle: 'करियर एवं अकादमिक यात्रा',
    journeySubtitle: 'व्यवसाय प्रबंधन, एआई अनुसंधान और संचालन में निरंतर प्रगति।',
    skillsTitle: 'तकनीकी एवं विश्लेषणात्मक कौशल',
    skillsSubtitle: 'डेटा मॉडलिंग, व्यावहारिक एआई और कॉर्पोरेट संचार में मजबूत पकड़।',
    achievementsTitle: 'उपलब्धियां एवं फील्ड अध्ययन',
    achievementsSubtitle: 'औद्योगिक दौरे, सेमिनार और प्रमाणित कार्यक्रमों में विशिष्ट योगदान।',
    aboutTitle: 'परिचय एवं दृष्टिकोण',
    aboutSubtitle: 'व्यवसाय प्रबंधन के मूल सिद्धांतों को आधुनिक डिजिटल तकनीकों से जोड़ना।',
    contactTitle: 'सीधा संपर्क',
    contactSubtitle: 'इंटर्नशिप, अनुसंधान पहलों और व्यावसायिक सहयोग के लिए सदैव तत्पर।',
    configGuide: 'कॉन्फ़िगरेशन गाइड',
    configInstructions: 'फोटो, रिज्यूमे और प्रोफाइल विवरण कैसे अपडेट करें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-language') as Language;
      if (saved === 'en' || saved === 'hi') {
        return saved;
      }
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (item: BilingualText | string): string => {
    if (typeof item === 'string') return item;
    if (!item) return '';
    return item[language] || item.en || '';
  };

  const labels = uiTranslations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, labels }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
