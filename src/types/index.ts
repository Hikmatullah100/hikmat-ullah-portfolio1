export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency?: number; // Optional percentage, only if verified
  icon?: string;
  isConfirmed?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement?: string;
  solution?: string;
  keyFeatures?: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Web App' | 'E-Commerce' | 'Education';
  thumbnail: string;
  galleryImages: string[];
  technologies: string[];
  githubUrl?: string; // Validated GitHub URL or undefined
  liveDemoUrl?: string; // Validated Live URL or undefined
  featured: boolean;
  status: 'Completed' | 'Completed — Live' | 'In Development' | 'Maintained';
  date?: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  step: string; // '01', '02', etc.
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  project?: string;
  feedback: string;
  clientAvatar?: string;
  verified: boolean;
  rating?: number;
}

export interface Statistic {
  id: string;
  value: string; // e.g. "4+", "20+", "99%"
  numericValue?: number;
  label: string;
  description?: string;
  isVerified: boolean;
  placeholderNotice?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'facebook' | 'instagram' | 'twitter' | 'email';
  url: string;
  label: string;
}

export interface PortfolioConfig {
  owner: {
    name: string;
    initials: string;
    title: string;
    email: string;
    phone?: string;
    whatsapp?: string;
    whatsappUrl?: string;
    location: string;
    availability: string;
    isAvailableForWork: boolean;
    profileImage: string;
    cvPath?: string; // Path or empty
    hasCvFile: boolean;
    promoVideoPath?: string;
    formspreeEndpoint?: string;
  };
  hero: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    introduction: string;
    floatingBannerText: string;
    stats: {
      yearsExperience: string;
      projectsCompleted: string;
      clientSatisfaction: string;
      verified: boolean;
    };
  };
  about: {
    summary: string;
    detailedBio: string[];
    currentFocus: string;
    technicalInterests: string[];
  };
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
  processSteps: ProcessStep[];
  testimonials: Testimonial[];
  showTestimonialsSection: boolean;
  statistics: Statistic[];
}
