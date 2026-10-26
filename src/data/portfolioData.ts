import {
  ProfileConfig,
  NavItem,
  SkillItem,
  ProjectItem,
  JourneyMilestone,
  AchievementItem,
  EducationItem,
  CertificationItem,
} from '../types/portfolio';

export const portfolioConfig: ProfileConfig = {
  primaryName: 'Adarsh Pathak',
  preferredName: 'Adarsh',
  monogram: 'AP',
  headline: {
    en: 'Bridging Business Operations, Data Handling & AI-Assisted Intelligence',
    hi: 'व्यावसायिक संचालन, डेटा विश्लेषण और एआई-संचालित नवाचार का समन्वय',
  },
  tagline: {
    en: 'Multidisciplinary Technologist & BBA Scholar specializing in modern data workflows, digital marketing strategy, and AI-enabled research.',
    hi: 'आधुनिक डेटा वर्कफ़्लो, डिजिटल मार्केटिंग रणनीति और एआई-सक्षम अनुसंधान में विशेषज्ञता रखने वाले बहु-विषयक पेशेवर।',
  },
  shortBio: {
    en: 'Second-year BBA student at Allenhouse Business School with practical mastery of MS Excel, data modeling, digital marketing, and applied AI tools. Dedicated to solving operational challenges with analytical rigor and technology.',
    hi: 'एलनहाउस बिजनेस स्कूल में बीबीए द्वितीय वर्ष के छात्र, जिन्हें एमएस एक्सेल, डेटा मॉडलिंग, डिजिटल मार्केटिंग और व्यावहारिक एआई टूल्स का मजबूत ज्ञान है। विश्लेषणात्मक दृष्टिकोण से व्यावसायिक चुनौतियों को हल करने में समर्पित।',
  },
  fullBio: [
    {
      en: 'My approach unites business management foundations with modern digital capabilities. By leveraging AI-assisted research, advanced spreadsheet modeling, and digital communication strategies, I streamline complex data into actionable operational clarity.',
      hi: 'मेरा दृष्टिकोण व्यावसायिक प्रबंधन के बुनियादी सिद्धांतों को आधुनिक डिजिटल क्षमताओं के साथ जोड़ता है। एआई-सहायता प्राप्त अनुसंधान, उन्नत स्प्रेडशीट मॉडलिंग और डिजिटल रणनीति का उपयोग करके, मैं जटिल डेटा को स्पष्ट अंतर्दृष्टि में परिवर्तित करता हूँ।',
    },
    {
      en: 'Certified in Artificial Intelligence Fundamentals and Natural Language Processing through IBM SkillsBuild, alongside specialized digital marketing training through HubSpot Academy and Allenhouse Business School. Passionate about supply chain mechanics, financial clarity, and collaborative problem-solving.',
      hi: 'आईबीएम स्किल्सबिल्ड से आर्टिफिशियल इंटेलिजेंस फंडामेंटल्स और एनएलपी में प्रमाणित, साथ ही हबस्पॉट अकादमी और एलनहाउस बिजनेस स्कूल से डिजिटल मार्केटिंग का गहन प्रशिक्षण। आपूर्ति श्रृंखला तंत्र, वित्तीय समझ और टीम वर्क के प्रति सदैव समर्पित।',
    },
  ],
  isOpenToOpportunities: true,
  availabilityNote: {
    en: 'Available for Internships & Collaborative Projects',
    hi: 'इंटर्नशिप और सहयोगात्मक परियोजनाओं के लिए उपलब्ध',
  },
  resumeFileName: 'Adarsh_Pathak_Resume.png',
  resumeAssetPath: '/assets/aistudio/image_5ae826be.png',
  portraitPath: '', // Left blank to render the bespoke creative developer geometric silhouette frame
  social: {
    email: 'adarshpathak2104006@gmail.com',
    phone: '+91 8877660587',
    whatsapp: 'https://wa.me/918877660587',
    linkedin: 'https://linkedin.com/in/adarsh-pathak',
    github: 'https://github.com/adarshpathak',
    location: {
      en: 'Kanpur, Uttar Pradesh, India',
      hi: 'कानपुर, उत्तर प्रदेश, भारत',
    },
  },
};

export const navigationItems: NavItem[] = [
  { id: 'hero', label: { en: 'Home', hi: 'होम' }, href: '#hero' },
  { id: 'about', label: { en: 'About', hi: 'परिचय' }, href: '#about' },
  { id: 'journey', label: { en: 'Journey', hi: 'अनुभव' }, href: '#journey' },
  { id: 'skills', label: { en: 'Skills', hi: 'कौशल' }, href: '#skills' },
  { id: 'projects', label: { en: 'Projects', hi: 'प्रोजेक्ट्स' }, href: '#projects' },
  { id: 'achievements', label: { en: 'Achievements', hi: 'उपलब्धियां' }, href: '#achievements' },
  { id: 'credentials', label: { en: 'Education', hi: 'शिक्षा व प्रमाणन' }, href: '#credentials' },
  { id: 'contact', label: { en: 'Contact', hi: 'संपर्क' }, href: '#contact' },
];

export const skillsCategories = [
  { id: 'all', label: { en: 'All Technologies', hi: 'सभी कौशल' } },
  { id: 'ai-data', label: { en: 'AI & Data Handling', hi: 'एआई व डेटा' } },
  { id: 'business', label: { en: 'Business & Office Tools', hi: 'व्यावसायिक टूल्स' } },
  { id: 'marketing', label: { en: 'Marketing & Creative', hi: 'मार्केटिंग व क्रिएटिव' } },
  { id: 'analytical', label: { en: 'Analytical & Core', hi: 'विश्लेषणात्मक' } },
];

export const skillsData: SkillItem[] = [
  {
    name: 'MS Excel (Advanced)',
    category: 'ai-data',
    iconName: 'FileSpreadsheet',
    description: {
      en: 'Data modeling, dynamic lookup functions, pivot tables, and statistical summaries.',
      hi: 'डेटा मॉडलिंग, डायनामिक लुकअप फॉर्मूले, पिवट टेबल्स और सांख्यिकीय विश्लेषण।',
    },
    context: {
      en: 'Formally trained at Allenhouse Business School (Completed 2025).',
      hi: 'एलनहाउस बिजनेस स्कूल में विधिवत प्रशिक्षित (2025 में पूर्ण)।',
    },
  },
  {
    name: 'AI-Assisted Research',
    category: 'ai-data',
    iconName: 'BrainCircuit',
    description: {
      en: 'Prompt architecture, automated literature synthesis, and workflow augmentation.',
      hi: 'प्रॉम्प्ट इंजीनियरिंग, स्वचालित साहित्य समीक्षा और कार्यकुशलता संवर्धन।',
    },
    context: {
      en: 'IBM SkillsBuild AI Fundamentals certified (Completed 2026).',
      hi: 'आईबीएम स्किल्सबिल्ड एआई फंडामेंटल्स प्रमाणित (2026)।',
    },
  },
  {
    name: 'Natural Language Processing',
    category: 'ai-data',
    iconName: 'Cpu',
    description: {
      en: 'Text analytics, semantic evaluation, and computational language processing concepts.',
      hi: 'टेक्स्ट एनालिटिक्स, सिमेंटिक मूल्यांकन और भाषा संसाधन के सिद्धांत।',
    },
    context: {
      en: 'Certified via IBM SkillsBuild.',
      hi: 'आईबीएम स्किल्सबिल्ड द्वारा प्रमाणित।',
    },
  },
  {
    name: 'Digital Marketing & SEO',
    category: 'marketing',
    iconName: 'Megaphone',
    description: {
      en: 'Inbound campaigns, content strategy, customer journey mapping, and brand reach.',
      hi: 'इनबाउंड अभियान, सामग्री रणनीति, ग्राहक यात्रा मानचित्रण और ब्रांड पहुंच।',
    },
    context: {
      en: 'HubSpot Academy certified & Allenhouse Business School training.',
      hi: 'हबस्पॉट अकादमी प्रमाणित एवं एलनहाउस बिजनेस स्कूल में सक्रिय प्रशिक्षण।',
    },
  },
  {
    name: 'Canva & Brand Assets',
    category: 'marketing',
    iconName: 'Palette',
    description: {
      en: 'Visual identity creation, campaign creatives, infographic layouts, and collateral.',
      hi: 'दृश्य पहचान निर्माण, प्रचार डिज़ाइन, इन्फोग्राफिक लेआउट और ब्रांड सामग्री।',
    },
    context: {
      en: 'Applied in brand building seminars & executive student initiatives.',
      hi: 'ब्रांड निर्माण सेमिनार और छात्र पहलों में व्यावहारिक उपयोग।',
    },
  },
  {
    name: 'PowerPoint & Pitch Decks',
    category: 'business',
    iconName: 'Presentation',
    description: {
      en: 'Executive storytelling, analytical data slides, and board-level presentations.',
      hi: 'प्रभावी प्रस्तुतीकरण, विश्लेषणात्मक डेटा स्लाइड और प्रबंधन स्तर की प्रस्तुतियां।',
    },
    context: {
      en: 'Core presentation toolkit for case competitions & academic symposiums.',
      hi: 'केस स्टडी प्रतियोगिताओं और संगोष्ठियों के लिए प्रमुख प्रस्तुति माध्यम।',
    },
  },
  {
    name: 'MS Word & Documentation',
    category: 'business',
    iconName: 'FileText',
    description: {
      en: 'Standardized operational reporting, business proposals, and structured memos.',
      hi: 'मानकीकृत परिचालन रिपोर्ट, व्यावसायिक प्रस्ताव और औपचारिक प्रारूप।',
    },
    context: {
      en: 'Standardized documentation in business communication & coursework.',
      hi: 'व्यावसायिक संचार और अनुसंधान प्रलेखन का मानक साधन।',
    },
  },
  {
    name: 'Business Finance Analysis',
    category: 'analytical',
    iconName: 'LineChart',
    description: {
      en: 'Financial statement foundations, working capital dynamics, and fintech trends.',
      hi: 'वित्तीय विवरणों का आधारभूत ज्ञान, कार्यशील पूंजी प्रबंधन और फिनटेक रुझान।',
    },
    context: {
      en: 'Active participant in Allenhouse Fintech Club Seminar (2026).',
      hi: 'एलनहाउस फिनटेक क्लब सेमिनार (2026) के सक्रिय प्रतिभागी।',
    },
  },
  {
    name: 'Analytical Problem Solving',
    category: 'analytical',
    iconName: 'Compass',
    description: {
      en: 'Root cause evaluation, operational process mapping, and systemic troubleshooting.',
      hi: 'मूल कारण का विश्लेषण, परिचालन प्रक्रिया मानचित्रण और तार्किक समाधान।',
    },
    context: {
      en: 'Strengths highlighted across academic and industrial observational assessments.',
      hi: 'शैक्षणिक और औद्योगिक मूल्यांकन में प्रमाणित मुख्य योग्यता।',
    },
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: '2025 — Present',
    role: {
      en: 'BBA Scholar & Academic Contributor',
      hi: 'बीबीए छात्र एवं अकादमिक प्रतिभागी',
    },
    organization: {
      en: 'Allenhouse Business School (CSJMU)',
      hi: 'एलनहाउस बिजनेस स्कूल (सीएसजेएमयू से संबद्ध)',
    },
    location: {
      en: 'Kanpur, Uttar Pradesh',
      hi: 'कानपुर, उत्तर प्रदेश',
    },
    type: {
      en: 'Higher Education & Applied Research',
      hi: 'उच्च शिक्षा एवं व्यावहारिक अनुसंधान',
    },
    responsibilities: [
      {
        en: 'Undergoing intensive undergraduate education in Business Finance, Marketing Management, HR, and Business Communication.',
        hi: 'बिजनेस फाइनेंस, मार्केटिंग मैनेजमेंट, मानव संसाधन और व्यावसायिक संचार में गहन अध्ययन।',
      },
      {
        en: 'Serving as an active contributor to student academic discussions, data workshops, and case analysis groups.',
        hi: 'छात्र शैक्षणिक चर्चाओं, डेटा कार्यशालाओं और केस विश्लेषण समूहों में सक्रिय योगदान।',
      },
    ],
    verifiedHighlights: [
      {
        en: 'Consistently applying data modeling and AI productivity workflows to management case studies.',
        hi: 'प्रबंधन केस अध्ययनों में डेटा मॉडलिंग और एआई उत्पादकता टूल्स का निरंतर अनुप्रयोग।',
      },
    ],
  },
  {
    period: '2026',
    role: {
      en: 'Operational Process Observer (Industrial Visit)',
      hi: 'औद्योगिक परिचालन विश्लेषक (फील्ड अध्ययन)',
    },
    organization: {
      en: 'Amul Manufacturing & Processing Facility',
      hi: 'अमूल प्रसंस्करण एवं निर्माण संयंत्र',
    },
    location: {
      en: 'Industrial Complex',
      hi: 'औद्योगिक परिसर',
    },
    type: {
      en: 'Supply Chain & Manufacturing Study',
      hi: 'सप्लाई चेन व मैन्युफैक्चरिंग अध्ययन',
    },
    responsibilities: [
      {
        en: 'Conducted a comprehensive on-site study of large-scale dairy processing and automated packaging lines.',
        hi: 'बड़े पैमाने पर डेयरी प्रसंस्करण और स्वचालित पैकेजिंग लाइनों का प्रत्यक्ष अध्ययन।',
      },
      {
        en: 'Analyzed supply chain logistics, hygiene quality-control standards, and automated distribution protocols.',
        hi: 'सप्लाई चेन लॉजिस्टिक्स, गुणवत्ता नियंत्रण मानकों और स्वचालित वितरण प्रणालियों का विश्लेषण।',
      },
    ],
    verifiedHighlights: [
      {
        en: 'Compiled structural observations on real-time inventory flow and cold-chain operational resilience.',
        hi: 'रियल-टाइम इन्वेंट्री प्रवाह और कोल्ड-चेन परिचालन की मजबूती पर व्यावहारिक अवलोकन तैयार किए।',
      },
    ],
  },
  {
    period: '2025 — 2026',
    role: {
      en: 'AI & Data Certifications Fellow',
      hi: 'एआई एवं डेटा सर्टिफिकेशन फेलो',
    },
    organization: {
      en: 'IBM SkillsBuild & HubSpot Academy',
      hi: 'आईबीएम स्किल्सबिल्ड एवं हबस्पॉट अकादमी',
    },
    location: {
      en: 'Global Online Credentialing',
      hi: 'वैश्विक ऑनलाइन प्रमाणन',
    },
    type: {
      en: 'Professional Skill Mastery',
      hi: 'व्यावसायिक कौशल विकास',
    },
    responsibilities: [
      {
        en: 'Completed rigorous curriculum in Artificial Intelligence Fundamentals and Natural Language Processing.',
        hi: 'आर्टिफिशियल इंटेलिजेंस फंडामेंटल्स और नेचुरल लैंग्वेज प्रोसेसिंग में तकनीकी पाठ्यक्रम पूरा किया।',
      },
      {
        en: 'Earned HubSpot Academy credential in Digital Marketing and inbound lead generation principles.',
        hi: 'हबस्पॉट अकादमी से डिजिटल मार्केटिंग और इनबाउंड सिद्धांतों में प्रमाणन प्राप्त किया।',
      },
    ],
    verifiedHighlights: [
      {
        en: 'Mastered practical prompting frameworks and machine learning concepts for research productivity.',
        hi: 'अनुसंधान उत्पादकता के लिए व्यावहारिक प्रॉम्प्टिंग और मशीन लर्निंग सिद्धांतों में दक्षता।',
      },
    ],
  },
  {
    period: '2024 — 2025',
    role: {
      en: 'Senior Secondary Scholar (Class XII)',
      hi: 'उच्चतर माध्यमिक छात्र (कक्षा 12वीं)',
    },
    organization: {
      en: 'KR Education Center (CBSE)',
      hi: 'केआर एजुकेशन सेंटर (सीबीएसई बोर्ड)',
    },
    location: {
      en: 'Kanpur, Uttar Pradesh',
      hi: 'कानपुर, उत्तर प्रदेश',
    },
    type: {
      en: 'Foundational Academics',
      hi: 'आधारभूत शैक्षणिक शिक्षा',
    },
    responsibilities: [
      {
        en: 'Completed senior secondary certification under CBSE with emphasis on analytical thinking and quantitative fundamentals.',
        hi: 'विश्लेषणात्मक सोच और मात्रात्मक विषयों पर ध्यान केंद्रित करते हुए 12वीं की परीक्षा सफलतापूर्वक उत्तीर्ण की।',
      },
    ],
    verifiedHighlights: [
      {
        en: 'Developed strong foundational abilities in problem solving, mathematical reasoning, and English communication.',
        hi: 'समस्या समाधान, गणितीय तर्क और अंग्रेजी संवाद में मजबूत नींव तैयार की।',
      },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'amul-supply-chain-analysis',
    title: {
      en: 'Amul Automated Supply Chain & Quality Audit',
      hi: 'अमूल स्वचालित सप्लाई चेन व गुणवत्ता विश्लेषण',
    },
    category: 'operations',
    categoryLabel: {
      en: 'Operations & Case Study',
      hi: 'परिचालन एवं केस स्टडी',
    },
    summary: {
      en: 'A structured industrial analysis examining large-scale dairy processing, cold-chain distribution, and automated packaging workflows.',
      hi: 'डेयरी प्रसंस्करण, कोल्ड-चेन वितरण और स्वचालित पैकेजिंग वर्कफ़्लो का विस्तृत औद्योगिक विश्लेषण।',
    },
    fullDescription: {
      en: 'Synthesized first-hand observational insights from the Amul Factory industrial visit. Analyzed how automated sorting, conveyor automation, and strict quality gates minimize spoilage and sustain rapid inter-state dispatch velocity.',
      hi: 'अमूल फैक्ट्री औद्योगिक दौरे से प्राप्त प्रत्यक्ष अंतर्दृष्टि का संकलन। स्वचालित छंटाई, कन्वेयर ऑटोमेशन और कड़े गुणवत्ता नियंत्रण द्वारा बर्बादी न्यूनतम करने और तीव्र वितरण बनाए रखने का व्यवस्थित विश्लेषण।',
    },
    keyOutcomes: [
      {
        en: 'Mapped multi-tier logistics flow from farm gate collection to automated chilling and packaging lines.',
        hi: 'संग्रहण केंद्र से स्वचालित प्रशीतन और पैकेजिंग लाइनों तक बहु-स्तरीय लॉजिस्टिक्स का मानचित्रण।',
      },
      {
        en: 'Identified critical quality inspection touchpoints and sensor-driven sorting mechanisms.',
        hi: 'सेंसर-आधारित छंटाई और महत्वपूर्ण गुणवत्ता निरीक्षण बिंदुओं की विस्तृत पहचान।',
      },
    ],
    technologies: ['Supply Chain Logistics', 'Quality Control', 'Manufacturing Automation', 'Operations Research'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'ai-assisted-research-framework',
    title: {
      en: 'AI-Powered Research & Literature Synthesis System',
      hi: 'एआई-संचालित अनुसंधान एवं साहित्य संश्लेषण प्रणाली',
    },
    category: 'ai-data',
    categoryLabel: {
      en: 'AI & Data Analytics',
      hi: 'एआई व डेटा विश्लेषण',
    },
    summary: {
      en: 'A repeatable methodology leveraging LLMs, prompt chaining, and NLP principles to accelerate academic research and commercial market evaluations.',
      hi: 'अकादमिक शोध और बाजार मूल्यांकन को गति देने के लिए एलएलएम और एनएलपी सिद्धांतों पर आधारित अनुसंधान पद्धति।',
    },
    fullDescription: {
      en: 'Built upon IBM SkillsBuild Artificial Intelligence and NLP foundations, this workflow uses structured prompting protocols to cross-examine market reports, extract thematic clusters, and formulate defensible executive briefs with reduced cognitive overhead.',
      hi: 'आईबीएम स्किल्सबिल्ड एआई और एनएलपी सिद्धांतों पर निर्मित यह प्रणाली बाजार रिपोर्टों का त्वरित विश्लेषण करने, प्रमुख विषयों को समूहित करने और सटीक प्रबंधन सारांश तैयार करने में मदद करती है।',
    },
    keyOutcomes: [
      {
        en: 'Accelerated document summarization time by over 60% with reproducible multi-prompt verification chains.',
        hi: 'सत्यापन योग्य बहु-प्रॉम्प्ट शृंखलाओं के माध्यम से दस्तावेज़ सारांश प्रक्रिया में 60% से अधिक समय की बचत।',
      },
      {
        en: 'Created structured synthesis templates for business ethics and marketing course papers.',
        hi: 'व्यावसायिक नैतिकता और मार्केटिंग शोध पत्रों के लिए मानकीकृत संश्लेषण खाके तैयार किए।',
      },
    ],
    technologies: ['IBM SkillsBuild AI', 'NLP Concepts', 'Prompt Engineering', 'Structured Synthesis'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'excel-financial-modeling-suite',
    title: {
      en: 'Executive Financial & Inventory Modeling Workbook',
      hi: 'वित्तीय एवं इन्वेंटरी मॉडलिंग स्प्रेडशीट वर्कबुक',
    },
    category: 'ai-data',
    categoryLabel: {
      en: 'Data & Financial Tools',
      hi: 'डेटा व वित्तीय टूल्स',
    },
    summary: {
      en: 'Dynamic Excel data architecture integrating multi-variable sensitivity models, pivot dashboards, and automated working capital calculations.',
      hi: 'मल्टी-वेरिएबल संवेदनशीलता मॉडल, पिवट डैशबोर्ड और स्वचालित कार्यशील पूंजी गणना वाली एक्सेल वर्कबुक।',
    },
    fullDescription: {
      en: 'Developed during Allenhouse Business School formal MS Excel training. Demonstrates advanced spreadsheet architecture with dynamic indexing (INDEX/MATCH, XLOOKUP), conditional formatting alerts, and financial statement ratio projections.',
      hi: 'एलनहाउस बिजनेस स्कूल के औपचारिक एमएस एक्सेल प्रशिक्षण के दौरान विकसित। उन्नत स्प्रेडशीट आर्किटेक्चर, डायनामिक इंडेक्सिंग, सशर्त स्वरूपण और वित्तीय अनुपात अनुमानों का सटीक प्रदर्शन।',
    },
    keyOutcomes: [
      {
        en: 'Formulated clean reconciliation dashboards tracking operating margins and inventory turnover.',
        hi: 'परिचालन मार्जिन और इन्वेंट्री टर्नओवर पर नजर रखने के लिए स्पष्ट मिलान डैशबोर्ड का निर्माण।',
      },
      {
        en: 'Automated data validation routines preventing errant data entry in inventory registers.',
        hi: 'इन्वेंटरी रजिस्टरों में गलत डेटा प्रविष्टि को रोकने के लिए स्वचालित डेटा सत्यापन नियम लागू किए।',
      },
    ],
    technologies: ['MS Excel Advanced', 'Data Validation', 'Financial Ratios', 'Pivot Tables'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'brand-building-inbound-campaign',
    title: {
      en: 'Brand Building & Inbound Acquisition Blueprint',
      hi: 'ब्रांड निर्माण एवं इनबाउंड ग्राहक प्राप्ति रूपरेखा',
    },
    category: 'marketing',
    categoryLabel: {
      en: 'Digital Marketing & Strategy',
      hi: 'डिजिटल मार्केटिंग व रणनीति',
    },
    summary: {
      en: 'Comprehensive digital campaign strategy fusing HubSpot inbound methodology, brand voice positioning, and multi-channel creative assets in Canva.',
      hi: 'हबस्पॉट इनबाउंड पद्धति, ब्रांड पोजिशनिंग और कैनवा में निर्मित मल्टी-चैनल प्रचार सामग्री की समग्र रणनीति।',
    },
    fullDescription: {
      en: 'Synthesized insights from Allenhouse Brand Building workshops and ongoing Digital Marketing training. Formulated a 3-phase audience acquisition framework addressing top-of-funnel educational discovery, trust nurturing, and conversion.',
      hi: 'एलनहाउस ब्रांड निर्माण कार्यशालाओं और डिजिटल मार्केटिंग प्रशिक्षण से प्राप्त ज्ञान का समन्वय। दर्शक खोज, विश्वास संवर्धन और रूपांतरण को लक्षित करने वाला 3-चरणीय ढांचा।',
    },
    keyOutcomes: [
      {
        en: 'Designed full-funnel content calendar with structured visual creatives designed in Canva.',
        hi: 'कैनवा में तैयार किए गए आकर्षक विजुअल्स के साथ फुल-फ़नल कंटेंट कैलेंडर का निर्माण।',
      },
      {
        en: 'Mapped SEO keyword groups and consumer search intents for brand narrative cohesion.',
        hi: 'ब्रांड पहचान को सुदृढ़ करने के लिए एसईओ कीवर्ड और उपभोक्ता खोज प्रवृत्तियों का मानचित्रण।',
      },
    ],
    technologies: ['HubSpot Inbound', 'Canva Pro', 'Content Strategy', 'Brand Architecture'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 'fintech-trends-seminar-brief',
    title: {
      en: 'Fintech Disruption & Digital Banking Synthesis',
      hi: 'फिनटेक नवाचार एवं डिजिटल बैंकिंग सारांश रिपोर्ट',
    },
    category: 'operations',
    categoryLabel: {
      en: 'Fintech & Academic Seminar',
      hi: 'फिनटेक व अकादमिक सेमिनार',
    },
    summary: {
      en: 'An analytical research paper presented at Allenhouse Fintech Club examining UPI adoption velocity, neo-banking friction points, and credit scoring algorithms.',
      hi: 'एलनहाउस फिनटेक क्लब में प्रस्तुत विश्लेषणात्मक शोध पत्र, जिसमें यूपीआई विकास और डिजिटल बैंकिंग पर चर्चा की गई।',
    },
    fullDescription: {
      en: 'Investigated the convergence of regulatory compliance, consumer trust, and mobile payment ecosystems. Formulated comparative models highlighting how alternative data scoring empowers micro-lending across tier-2 and tier-3 Indian cities.',
      hi: 'नियामक अनुपालन, उपभोक्ता विश्वास और मोबाइल भुगतान पारिस्थितिकी तंत्र का अध्ययन। छोटे शहरों में वैकल्पिक डेटा के आधार पर माइक्रो-लेंडिंग के अवसरों पर विस्तृत प्रकाश।',
    },
    keyOutcomes: [
      {
        en: 'Presented comparative evaluation of transaction failure recovery across major payment gateways.',
        hi: 'प्रमुख भुगतान प्रणालियों में लेनदेन विफलता निवारण का तुलनात्मक मूल्यांकन प्रस्तुत किया।',
      },
      {
        en: 'Authored executive summary distributed to faculty advisors and student seminar members.',
        hi: 'संकाय सलाहकारों और संगोष्ठी प्रतिभागियों के लिए संक्षिप्त कार्यकारी सारांश तैयार किया।',
      },
    ],
    technologies: ['Fintech Research', 'Financial Technology', 'PowerPoint Presentation', 'UPI Architecture'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: {
      en: 'IBM SkillsBuild Artificial Intelligence Fundamentals',
      hi: 'आईबीएम स्किल्सबिल्ड आर्टिफिशियल इंटेलिजेंस फंडामेंटल्स',
    },
    issuer: {
      en: 'IBM SkillsBuild Global Credentialing',
      hi: 'आईबीएम स्किल्सबिल्ड ग्लोबल क्रेडेंशियल',
    },
    year: '2026',
    category: {
      en: 'AI & Data Credential',
      hi: 'एआई एवं डेटा प्रमाणन',
    },
    description: {
      en: 'Completed foundational mastery in core machine learning architectures, ethical AI guidelines, and conversational intelligence mechanics.',
      hi: 'मशीन लर्निंग आर्किटेक्चर, नैतिक एआई दिशानिर्देशों और संवादी बुद्धिमत्ता में प्रमाणित दक्षता।',
    },
  },
  {
    title: {
      en: 'IBM SkillsBuild Natural Language Processing',
      hi: 'आईबीएम स्किल्सबिल्ड नेचुरल लैंग्वेज प्रोसेसिंग',
    },
    issuer: {
      en: 'IBM SkillsBuild Global Credentialing',
      hi: 'आईबीएम स्किल्सबिल्ड ग्लोबल क्रेडेंशियल',
    },
    year: '2026',
    category: {
      en: 'Computational Linguistics',
      hi: 'भाषा प्रसंस्करण',
    },
    description: {
      en: 'Validated technical comprehension in tokenization, syntax parsing, sentiment analysis, and transformer architectures.',
      hi: 'टोकनाइज़ेशन, सिंटेक्स पार्सिंग, सेंटिमेंट एनालिसिस और भाषा मॉडल की समझ का सत्यापन।',
    },
  },
  {
    title: {
      en: 'Formal Industrial Fieldwork at Amul Manufacturing',
      hi: 'अमूल मैन्युफैक्चरिंग संयंत्र में औपचारिक फील्डवर्क',
    },
    issuer: {
      en: 'Amul Dairy Industrial Unit & Allenhouse',
      hi: 'अमूल डेयरी औद्योगिक इकाई एवं एलनहाउस',
    },
    year: '2026',
    category: {
      en: 'Operations & Supply Chain',
      hi: 'परिचालन एवं आपूर्ति श्रृंखला',
    },
    description: {
      en: 'Awarded completion recognition for observational study in cold-chain logistics, automated packaging lines, and industrial quality assurance.',
      hi: 'कोल्ड-चेन लॉजिस्टिक्स, स्वचालित पैकेजिंग और गुणवत्ता नियंत्रण के व्यावहारिक अध्ययन की मान्यता।',
    },
  },
  {
    title: {
      en: 'HubSpot Academy Digital Marketing Certification',
      hi: 'हबस्पॉट अकादमी डिजिटल मार्केटिंग प्रमाणन',
    },
    issuer: {
      en: 'HubSpot Academy',
      hi: 'हबस्पॉट अकादमी',
    },
    year: '2025',
    category: {
      en: 'Digital Strategy',
      hi: 'डिजिटल रणनीति',
    },
    description: {
      en: 'Mastered inbound flywheel mechanics, content strategy, buyer personas, and multi-channel attribution frameworks.',
      hi: 'इनबाउंड फ़्लाईव्हील तकनीक, कंटेंट रणनीति, लक्षित ग्राहक विश्लेषण और डिजिटल चैनलों की समझ।',
    },
  },
  {
    title: {
      en: 'Allenhouse Business School MS Excel Certification',
      hi: 'एलनहाउस बिजनेस स्कूल एमएस एक्सेल प्रमाणन',
    },
    issuer: {
      en: 'Allenhouse Business School',
      hi: 'एलनहाउस बिजनेस स्कूल',
    },
    year: '2025',
    category: {
      en: 'Data & Modeling',
      hi: 'डेटा एवं मॉडलिंग',
    },
    description: {
      en: 'Completed rigorous advanced spreadsheet training covering complex formulas, nested lookups, and pivot reporting.',
      hi: 'जटिल सूत्रों, नेस्टेड लुकअप और पिवट रिपोर्टिंग पर आधारित उन्नत स्प्रेडशीट प्रशिक्षण सफलतापूर्वक पूर्ण।',
    },
  },
];

export const educationData: EducationItem[] = [
  {
    degree: {
      en: 'Bachelor of Business Administration (BBA)',
      hi: 'बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (बीबीए)',
    },
    institution: {
      en: 'Allenhouse Business School, Kanpur (Affiliated with CSJMU)',
      hi: 'एलनहाउस बिजनेस स्कूल, कानपुर (सीएसजेएम यूनिवर्सिटी से संबद्ध)',
    },
    period: '2025 — 2028',
    status: {
      en: 'Second Year Undergraduate (Currently Enrolled)',
      hi: 'द्वितीय वर्ष के नियमित छात्र (वर्तमान में अध्ययनरत)',
    },
    scoreOrYear: '2025 — 2028',
    highlights: [
      {
        en: 'Core subjects: Business Finance, Marketing Management, Human Resource Management, and Business Environment.',
        hi: 'प्रमुख विषय: बिजनेस फाइनेंस, मार्केटिंग मैनेजमेंट, मानव संसाधन और व्यावसायिक पर्यावरण।',
      },
      {
        en: 'Elected participant in Fintech Club Seminars and Brand Building symposiums.',
        hi: 'फिनटेक क्लब सेमिनार और ब्रांड बिल्डिंग संगोष्ठियों के सक्रिय प्रतिभागी।',
      },
      {
        en: 'Hands-on training in corporate communication, structured presentation, and commercial data handling.',
        hi: 'कॉर्पोरेट संचार, संरचित प्रस्तुति और व्यावसायिक डेटा संचालन में व्यावहारिक प्रशिक्षण।',
      },
    ],
  },
  {
    degree: {
      en: 'Senior Secondary Certificate (Class XII)',
      hi: 'वरिष्ठ माध्यमिक प्रमाण पत्र (कक्षा 12वीं)',
    },
    institution: {
      en: 'KR Education Center, Kanpur (CBSE Board)',
      hi: 'केआर एजुकेशन सेंटर, कानपुर (सीबीएसई बोर्ड)',
    },
    period: 'Completed 2025',
    status: {
      en: 'Graduated CBSE Board',
      hi: 'सीबीएसई बोर्ड से उत्तीर्ण',
    },
    scoreOrYear: '2025',
    highlights: [
      {
        en: 'Solid academic foundation in analytical reasoning, quantitative problems, and verbal communication.',
        hi: 'विश्लेषणात्मक तर्क, मात्रात्मक विश्लेषण और मौखिक संवाद में मजबूत आधार।',
      },
      {
        en: 'Active participation in academic co-curriculars and teamwork initiatives.',
        hi: 'सह-पाठ्यचर्या गतिविधियों और टीमवर्क पहलों में सक्रिय भागीदारी।',
      },
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    name: {
      en: 'Artificial Intelligence Fundamentals',
      hi: 'आर्टिफिशियल इंटेलिजेंस फंडामेंटल्स',
    },
    issuingOrg: {
      en: 'IBM SkillsBuild',
      hi: 'आईबीएम स्किल्सबिल्ड',
    },
    year: '2026',
    status: {
      en: 'Completed',
      hi: 'सफलतापूर्वक पूर्ण',
    },
    skillsGained: ['Machine Learning Basics', 'AI Ethics', 'Prompting Frameworks', 'Predictive Modeling'],
  },
  {
    name: {
      en: 'Natural Language Processing (NLP)',
      hi: 'नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी)',
    },
    issuingOrg: {
      en: 'IBM SkillsBuild',
      hi: 'आईबीएम स्किल्सबिल्ड',
    },
    year: '2026',
    status: {
      en: 'Completed / Credentialed',
      hi: 'प्रमाणित',
    },
    skillsGained: ['Text Analysis', 'Computational Linguistics', 'Sentiment Mining', 'Language Models'],
  },
  {
    name: {
      en: 'Digital Marketing Training',
      hi: 'डिजिटल मार्केटिंग प्रशिक्षण',
    },
    issuingOrg: {
      en: 'Allenhouse Business School',
      hi: 'एलनहाउस बिजनेस स्कूल',
    },
    year: '2026',
    status: {
      en: 'Ongoing Professional Training',
      hi: 'प्रशिक्षण जारी है',
    },
    skillsGained: ['Search Engine Optimization', 'Social Advertising', 'Audience Segmentation', 'Funnel Strategy'],
  },
  {
    name: {
      en: 'MS Excel Specialized Training',
      hi: 'एमएस एक्सेल विशेष प्रशिक्षण',
    },
    issuingOrg: {
      en: 'Allenhouse Business School',
      hi: 'एलनहाउस बिजनेस स्कूल',
    },
    year: '2025',
    status: {
      en: 'Completed & Certified',
      hi: 'सफलतापूर्वक पूर्ण',
    },
    skillsGained: ['Lookup Architectures', 'Pivot Tables & Charts', 'Financial Modeling', 'Data Cleaning'],
  },
  {
    name: {
      en: 'Digital Marketing Certification',
      hi: 'डिजिटल मार्केटिंग प्रमाणन',
    },
    issuingOrg: {
      en: 'HubSpot Academy',
      hi: 'हबस्पॉट अकादमी',
    },
    year: '2025',
    status: {
      en: 'Completed',
      hi: 'सफलतापूर्वक पूर्ण',
    },
    skillsGained: ['Inbound Marketing Methodology', 'Lead Nurturing', 'Email Automation', 'Content Strategy'],
  },
];
