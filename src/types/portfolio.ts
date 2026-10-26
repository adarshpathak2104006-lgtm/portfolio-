export type Language = 'en' | 'hi';
export type Theme = 'dark' | 'light';

export interface BilingualText {
  en: string;
  hi: string;
}

export interface SocialLinks {
  email: string;
  phone: string;
  whatsapp?: string;
  linkedin?: string;
  github?: string;
  location: BilingualText;
}

export interface NavItem {
  id: string;
  label: BilingualText;
  href: string;
}

export interface SkillItem {
  name: string;
  category: string;
  iconName: string;
  description: BilingualText;
  context: BilingualText;
}

export interface ProjectItem {
  id: string;
  title: BilingualText;
  category: string;
  categoryLabel: BilingualText;
  summary: BilingualText;
  fullDescription: BilingualText;
  keyOutcomes: BilingualText[];
  technologies: string[];
  image: string;
  featured?: boolean;
  liveUrl?: string;
  sourceUrl?: string;
  caseStudyUrl?: string;
}

export interface JourneyMilestone {
  period: string;
  role: BilingualText;
  organization: BilingualText;
  location: BilingualText;
  type: BilingualText;
  responsibilities: BilingualText[];
  verifiedHighlights: BilingualText[];
}

export interface AchievementItem {
  title: BilingualText;
  issuer: BilingualText;
  year: string;
  category: BilingualText;
  description: BilingualText;
  credentialBadge?: string;
}

export interface EducationItem {
  degree: BilingualText;
  institution: BilingualText;
  period: string;
  status: BilingualText;
  scoreOrYear?: string;
  highlights: BilingualText[];
  credentialUrl?: string;
  certificateImage?: string;
}

export interface CertificationItem {
  name: BilingualText;
  issuingOrg: BilingualText;
  year: string;
  status: BilingualText;
  credentialUrl?: string;
  skillsGained: string[];
}

export interface ProfileConfig {
  primaryName: string;
  preferredName: string;
  monogram: string;
  headline: BilingualText;
  tagline: BilingualText;
  shortBio: BilingualText;
  fullBio: BilingualText[];
  isOpenToOpportunities: boolean;
  availabilityNote: BilingualText;
  resumeFileName: string;
  resumeAssetPath: string;
  portraitPath: string;
  social: SocialLinks;
}
