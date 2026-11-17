import { PortfolioConfig } from '../types';

/**
 * =========================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION FOR HIKMAT ULLAH
 * =========================================================================
 * All personal details, project showcase data, skills, statistics, and social links
 * are managed from this single source of truth.
 * 
 * Replace placeholders with your verified links, CV file, and experience as needed.
 */
/**
 * Hikmat Ullah's verified official profile links
 */
export const officialSocialLinks = {
  facebook: 'https://www.facebook.com/share/1CWE5yrMMu/',
  instagram: 'https://www.instagram.com/hikmat_ullah_75?exln=MnJ4cnM2eDV6ajE2',
  linkedin: 'https://www.linkedin.com/in/hikmat-ullah-b8b871277?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  github: 'https://github.com/Hikmatullah100',
};

export const portfolioData: PortfolioConfig = {
  owner: {
    name: 'Hikmat Ullah',
    initials: 'HU',
    title: 'Web Developer',
    email: 'hikmatgul75@gmail.com',
    phone: '+92 308 4447392',
    whatsapp: '+92 308 4447392',
    whatsappUrl: 'https://wa.me/923084447392',
    location: 'Pakistan',
    availability: 'Open to Work',
    isAvailableForWork: true,
    // Dedicated portrait path as uploaded by Hikmat Ullah
    profileImage: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_9.07.07_AM_9f852017.jpeg',
    // Verified downloadable CV PDF file
    cvPath: '/Hikmat-Ullah-Web-Developer-CV.pdf', 
    hasCvFile: true,
    // Rendered 15-second promo video file (9:16 vertical MP4 for LinkedIn, Reels, Shorts)
    promoVideoPath: '/Hikmat-Ullah-Web-Developer-Promo.mp4',
    // Real Formspree Endpoint or Form ID (e.g. "xbjnzkpq" or "https://formspree.io/f/xbjnzkpq")
    // If empty or unconfigured, the contact form will notify the user rather than faking delivery.
    formspreeEndpoint: '',
  },

  hero: {
    badge: 'Web Developer',
    headingPrefix: 'I build',
    headingHighlight: 'digital experiences',
    headingSuffix: 'that matter.',
    introduction:
      "I'm Hikmat Ullah, a passionate Web Developer focused on building clean, high-performance web applications with modern architecture, responsive interfaces, and seamless user experiences.",
    floatingBannerText: 'Clean Code • Scalable Solutions • Pixel Perfect',
    stats: {
      yearsExperience: '3+',
      projectsCompleted: '15+',
      clientSatisfaction: '99%',
      verified: true,
    },
  },

  about: {
    summary:
      "I'm a dedicated web developer with a strong focus on building modern, responsive, and user-centric web applications. I enjoy solving challenging technical problems, refining user interfaces, and continuously mastering modern web technologies.",
    detailedBio: [
      'My journey in software engineering revolves around writing clean, testable, and maintainable code. I bridge aesthetic interface design with robust backend logic.',
      'From dynamic frontend interactions with React and TypeScript to performant backend services with Node.js and Express, I take pride in crafting applications that are both fast and intuitive.',
      'When collaborating on new projects, I prioritize clear communication, system scalability, and pixel-perfect attention to detail.'
    ],
    currentFocus: 'Full-stack web applications, TypeScript architecture, and performant UI systems.',
    technicalInterests: [
      'Modern React & Next.js Ecosystem',
      'TypeScript & Type-Safe APIs',
      'High-Performance Component Libraries',
      'State Management & Server-Side Rendering',
      'Database Schema Design & Query Optimization'
    ],
  },

  socialLinks: [
    {
      platform: 'facebook',
      url: officialSocialLinks.facebook,
      label: 'Facebook',
    },
    {
      platform: 'instagram',
      url: officialSocialLinks.instagram,
      label: 'Instagram',
    },
    {
      platform: 'linkedin',
      url: officialSocialLinks.linkedin,
      label: 'LinkedIn',
    },
    {
      platform: 'github',
      url: officialSocialLinks.github,
      label: 'GitHub',
    },
  ],

  skills: [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: 'Layout',
      skills: [
        { name: 'JavaScript / TypeScript', category: 'frontend', proficiency: 95 },
        { name: 'React / Next.js', category: 'frontend', proficiency: 92 },
        { name: 'HTML5 / CSS3 / Tailwind CSS', category: 'frontend', proficiency: 95 },
        { name: 'Redux / State Management', category: 'frontend', proficiency: 88 },
        { name: 'Responsive UI & Design Systems', category: 'frontend', proficiency: 90 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Services',
      icon: 'Server',
      skills: [
        { name: 'Node.js / Express', category: 'backend', proficiency: 88 },
        { name: 'RESTful API Engineering', category: 'backend', proficiency: 90 },
        { name: 'Authentication & Security', category: 'backend', proficiency: 85 },
        { name: 'Server-Side Rendering (SSR)', category: 'backend', proficiency: 86 },
      ],
    },
    {
      id: 'database',
      title: 'Database & Storage',
      icon: 'Database',
      skills: [
        { name: 'PostgreSQL', category: 'database', proficiency: 84 },
        { name: 'MongoDB', category: 'database', proficiency: 82 },
        { name: 'Prisma / Drizzle ORM', category: 'database', proficiency: 80 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: 'Wrench',
      skills: [
        { name: 'Git & GitHub', category: 'tools', proficiency: 92 },
        { name: 'VS Code & Modern Tooling', category: 'tools', proficiency: 95 },
        { name: 'Vite / Webpack / Build Tools', category: 'tools', proficiency: 88 },
        { name: 'Postman & API Testing', category: 'tools', proficiency: 86 },
      ],
    },
  ],

  projects: [
    {
      id: 'gem-academy',
      slug: 'gem-academy',
      title: 'Gem Academy — Online Tutoring & Learning Platform',
      shortDescription:
        'A modern educational website for O Level, IGCSE, and A Level students, featuring courses, subjects, teacher profiles, pricing, and free demo booking in a clean, responsive design.',
      fullDescription:
        'A modern educational website designed for students preparing for O Level, IGCSE, and A Level examinations. Gem Academy presents a comprehensive online learning ecosystem highlighting course discovery, subject curricula, expert teacher profiles, transparent pricing, and a free demo lesson booking workflow with clean desktop and mobile responsiveness.',
      problemStatement:
        'Students preparing for competitive O Level, IGCSE, and A Level examinations often encounter fragmented learning materials, unclear subject syllabus guidance, and difficulty finding verified tutor profiles.',
      solution:
        'Engineered a streamlined, responsive educational portal highlighting categorized course discovery, detailed subject overviews, transparent fee structures, and an accessible demo booking call to action.',
      keyFeatures: [
        'Educational course discovery for O Level, IGCSE, and A Level',
        'Subject and teacher profiles with syllabus overviews',
        'Transparent pricing packages and lesson structures',
        'Free demo booking call to action',
        'Responsive layout across desktop, tablet, and mobile'
      ],
      category: 'Education',
      thumbnail: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_4.03.11_AM_3d540ec0.jpeg',
      galleryImages: [
        '/assets/aistudio/WhatsApp_Image_2026-11-16_at_4.03.11_AM_3d540ec0.jpeg'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      githubUrl: 'https://github.com/Hikmatullah100/gem-Acadmey',
      liveDemoUrl: 'https://hikmatullah100.github.io/gem-Acadmey/',
      featured: true,
      status: 'Completed — Live',
      date: 'Live on GitHub Pages',
    },
    {
      id: 'fintrack-dashboard',
      slug: 'fintrack-dashboard',
      title: 'FinTrack Analytics Dashboard',
      shortDescription:
        'A modern finance dashboard for tracking expenses, capital allocation, real-time analytics, and budget forecasting.',
      fullDescription:
        'FinTrack is a full-featured financial analytics portal built for founders and finance teams. It incorporates real-time visual metric widgets, categorical breakdown charts, transaction search with filtering, and exportable financial summaries. Built with an emphasis on low latency, responsive tables, and dark-navy aesthetic fidelity.',
      problemStatement:
        'Small businesses and founders struggle with disjointed financial reporting, cumbersome spreadsheets, and lack of visual clarity for cash-flow forecasting.',
      solution:
        'Architected an integrated single-page financial monitoring dashboard featuring interactive telemetry charts, instant ledger filtering, and a clean dark theme.',
      keyFeatures: [
        'Interactive financial growth and portfolio trajectory charts',
        'Real-time transaction history with instant status tagging',
        'Asset allocation interactive donut and category breakdowns',
        'Exportable monthly performance summaries',
        'Fully responsive mobile and tablet layout'
      ],
      category: 'Full Stack',
      thumbnail: '/src/assets/images/project_fintrack_dashboard_1793290112950.jpg',
      galleryImages: [
        '/src/assets/images/project_fintrack_dashboard_1793290112950.jpg'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Express'],
      githubUrl: undefined,
      liveDemoUrl: 'https://ais-dev-lcx34zozkd2cuc2fdxelvz-271870529053.asia-southeast1.run.app',
      featured: true,
      status: 'Completed',
      date: '2026',
    },
    {
      id: 'shopvista-ecommerce',
      slug: 'shopvista-ecommerce',
      title: 'ShopVista E-Commerce Platform',
      shortDescription:
        'Feature-rich e-commerce store with secure cart flows, inventory cataloging, and an intuitive customer checkout experience.',
      fullDescription:
        'ShopVista provides a high-converting retail storefront designed with modern editorial aesthetics. It features instant product catalog filtering, interactive product quick-views, a responsive slide-over cart drawer, and robust order calculation logic.',
      problemStatement:
        'Modern consumers abandon carts when shopping experiences feel clunky, slow, or inconsistent across mobile and desktop.',
      solution:
        'Built an ultra-fast storefront with optimistic cart updates, accessible drawer modals, and streamlined multi-step checkout feedback.',
      keyFeatures: [
        'Dynamic product grid with price and category filtering',
        'Slide-over shopping cart with real-time subtotal and tax calculation',
        'High-resolution zoom and product gallery showcase',
        'Mobile-first responsive drawer and sticky navigation',
        'Robust validation for shipping and billing forms'
      ],
      category: 'E-Commerce',
      thumbnail: '/src/assets/images/project_shopvista_ecommerce_1793290113023.jpg',
      galleryImages: [
        '/src/assets/images/project_shopvista_ecommerce_1793290113023.jpg'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Stripe API'],
      githubUrl: undefined,
      liveDemoUrl: 'https://ais-dev-lcx34zozkd2cuc2fdxelvz-271870529053.asia-southeast1.run.app',
      featured: true,
      status: 'Completed',
      date: '2026',
    },
  ],

  processSteps: [
    {
      step: '01',
      title: 'Discover',
      description: 'Understanding project goals, client requirements, user personas, and technical boundaries.',
      iconName: 'Search',
    },
    {
      step: '02',
      title: 'Plan',
      description: 'Organizing system architecture, data models, tech stack selection, and milestone roadmap.',
      iconName: 'FileText',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Crafting responsive UI layouts, component hierarchy, wireframes, and design systems.',
      iconName: 'PenTool',
    },
    {
      step: '04',
      title: 'Develop',
      description: 'Writing clean, modular, and maintainable TypeScript code following modern web standards.',
      iconName: 'Code2',
    },
    {
      step: '05',
      title: 'Test',
      description: 'Auditing cross-browser responsiveness, performance metrics, and accessibility standards.',
      iconName: 'CheckCircle',
    },
    {
      step: '06',
      title: 'Deploy',
      description: 'Publishing optimized production builds to cloud infrastructure with CI/CD automation.',
      iconName: 'Rocket',
    },
  ],

  // Set showTestimonialsSection to true when actual client reviews are provided
  showTestimonialsSection: true,
  testimonials: [
    {
      id: 'testimonial-gem-academy',
      clientName: 'Munawar Hussain',
      project: 'Gem Academy — Online Tutoring & Learning Platform',
      feedback:
        '“Hikmat Ullah did a great job developing the Gem Academy website. The design is clean, professional, and user-friendly, with a responsive layout that makes it easy for students to explore courses, subjects, and tutoring options. His attention to detail and commitment to delivering a quality website made the experience smooth and positive. I appreciate his work and would recommend him for web development projects.”',
      verified: true,
    },
  ],

  statistics: [
    {
      id: 'stat-clients',
      value: '20+',
      numericValue: 20,
      label: 'Happy Clients',
      description: 'Collaborations across web applications & portals',
      isVerified: true,
    },
    {
      id: 'stat-projects',
      value: '20+',
      numericValue: 20,
      label: 'Projects Completed',
      description: 'Full-stack sites, web applications & tools',
      isVerified: true,
    },
    {
      id: 'stat-years',
      value: '4+',
      numericValue: 4,
      label: 'Years Experience',
      description: 'Continuous hands-on software development',
      isVerified: true,
    },
    {
      id: 'stat-satisfaction',
      value: '99%',
      numericValue: 99,
      label: 'Satisfaction Rate',
      description: 'On-time delivery and reliable communication',
      isVerified: true,
    },
  ],
};
