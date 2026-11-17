import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

/**
 * Script to generate Hikmat-Ullah-Web-Developer-CV.pdf
 * Matches the dark-navy and electric-cyan portfolio theme in a clean, executive A4 document layout.
 */
export function generateCV() {
  const outputPath = path.resolve(process.cwd(), 'public', 'Hikmat-Ullah-Web-Developer-CV.pdf');
  
  // Ensure public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Create A4 PDF with 0 margins so we can render full-width decorative headers
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    info: {
      Title: 'Hikmat Ullah - Web Developer CV',
      Author: 'Hikmat Ullah',
      Subject: 'Professional Web Developer Resume',
      Keywords: 'Web Developer, React, TypeScript, Full Stack, Node.js, Frontend, Gem Academy',
    },
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const PAGE_WIDTH = 595.28;
  const PAGE_HEIGHT = 841.89;

  // Background - Clean pure white body for optimal readability and professional printing
  doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill('#FFFFFF');

  // Top Header Banner - Deep Navy (#030B1B)
  const HEADER_HEIGHT = 138;
  doc.rect(0, 0, PAGE_WIDTH, HEADER_HEIGHT).fill('#030B1B');

  // Accent Line under header - Electric Cyan (#12DDF5)
  doc.rect(0, HEADER_HEIGHT - 3, PAGE_WIDTH, 3).fill('#12DDF5');

  // Header Content
  const MARGIN_X = 40;
  
  // Name
  doc
    .font('Helvetica-Bold')
    .fontSize(24)
    .fillColor('#FFFFFF')
    .text('HIKMAT ULLAH', MARGIN_X, 28, { characterSpacing: 1.5 });

  // Title / Subtitle
  doc
    .font('Helvetica-Bold')
    .fontSize(11)
    .fillColor('#12DDF5')
    .text('PROFESSIONAL WEB DEVELOPER', MARGIN_X, 58, { characterSpacing: 2 });

  // Contact Info Row in Header
  const contactY = 82;
  const col1X = MARGIN_X;
  const col2X = 220;
  const col3X = 400;

  // Contact Line 1
  doc.font('Helvetica').fontSize(9).fillColor('#A8B6CA');
  doc.text('Email: ', col1X, contactY, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#12DDF5').text('hikmatgul75@gmail.com', {
    link: 'mailto:hikmatgul75@gmail.com',
    underline: false,
  });

  doc.font('Helvetica').fontSize(9).fillColor('#A8B6CA');
  doc.text('WhatsApp: ', col2X, contactY, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#12DDF5').text('+92 308 4447392', {
    link: 'https://wa.me/923084447392',
    underline: false,
  });

  doc.font('Helvetica').fontSize(9).fillColor('#A8B6CA');
  doc.text('Location: ', col3X, contactY, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#FFFFFF').text('Pakistan');

  // Contact Line 2
  const contactY2 = 100;
  doc.font('Helvetica').fontSize(9).fillColor('#A8B6CA');
  doc.text('GitHub: ', col1X, contactY2, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#12DDF5').text('github.com/Hikmatullah100', {
    link: 'https://github.com/Hikmatullah100',
    underline: false,
  });

  doc.font('Helvetica').fontSize(9).fillColor('#A8B6CA');
  doc.text('LinkedIn: ', col2X, contactY2, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#12DDF5').text('linkedin.com/in/hikmat-ullah-b8b871277', {
    link: 'https://www.linkedin.com/in/hikmat-ullah-b8b871277',
    underline: false,
  });

  doc.font('Helvetica').fontSize(9).fillColor('#A8B6CA');
  doc.text('Instagram: ', col3X, contactY2, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#12DDF5').text('@hikmat_ullah_75', {
    link: 'https://www.instagram.com/hikmat_ullah_75',
    underline: false,
  });

  // Body Layout
  let currentY = 158;

  function renderSectionHeader(title: string) {
    // Small cyan pill icon/rectangle
    doc.rect(MARGIN_X, currentY + 2, 4, 13).fill('#12DDF5');
    
    doc
      .font('Helvetica-Bold')
      .fontSize(12)
      .fillColor('#030B1B')
      .text(title.toUpperCase(), MARGIN_X + 12, currentY + 1, { characterSpacing: 1 });

    // Underline rule
    doc.rect(MARGIN_X + 12, currentY + 18, PAGE_WIDTH - MARGIN_X * 2 - 12, 0.75).fill('#E2E8F0');
    currentY += 28;
  }

  // 1. PROFESSIONAL SUMMARY
  renderSectionHeader('Professional Summary');
  doc
    .font('Helvetica')
    .fontSize(9.5)
    .fillColor('#334155')
    .text(
      "Dedicated Web Developer with a proven record of engineering clean, high-performance web applications and responsive educational platforms. Experienced in architecting modern frontend interfaces and robust web services with TypeScript, React, Next.js, and modern CSS frameworks. Committed to pixel-perfect UI execution, scalable application structure, cross-device responsiveness, and delivering intuitive digital experiences.",
      MARGIN_X,
      currentY,
      {
        width: PAGE_WIDTH - MARGIN_X * 2,
        lineGap: 4,
        align: 'justify',
      }
    );
  currentY += 56;

  // 2. TECHNICAL SKILLS
  renderSectionHeader('Technical Skills');

  const skillsCategories = [
    {
      label: 'Frontend Development:',
      skills: 'JavaScript (ES6+), TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Web Design',
    },
    {
      label: 'Backend & APIs:',
      skills: 'Node.js, Express, RESTful APIs, Server-Side Rendering (SSR), API Architecture',
    },
    {
      label: 'Databases & Storage:',
      skills: 'PostgreSQL, MongoDB, SQL Database Schema Design, Query Optimization',
    },
    {
      label: 'Tools & Workflows:',
      skills: 'Git, GitHub, GitHub Pages, Vite, VS Code, Postman, CI/CD Cloud Deployments',
    },
  ];

  skillsCategories.forEach((cat) => {
    doc
      .font('Helvetica-Bold')
      .fontSize(9)
      .fillColor('#0F172A')
      .text(cat.label, MARGIN_X, currentY, { width: 140 });

    doc
      .font('Helvetica')
      .fontSize(9)
      .fillColor('#334155')
      .text(cat.skills, MARGIN_X + 145, currentY, {
        width: PAGE_WIDTH - MARGIN_X * 2 - 145,
        lineGap: 2,
      });

    currentY += 18;
  });
  currentY += 10;

  // 3. FEATURED PROJECTS & PORTFOLIO HIGHLIGHTS
  renderSectionHeader('Featured Projects & Portfolio Highlights');

  // Project 1: Gem Academy
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 115).fill('#F8FAFC');
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 115).stroke('#CBD5E1');

  // Cyan badge bar on left of card
  doc.rect(MARGIN_X, currentY, 3, 115).fill('#12DDF5');

  const gemX = MARGIN_X + 14;
  let gemY = currentY + 10;

  doc
    .font('Helvetica-Bold')
    .fontSize(11)
    .fillColor('#030B1B')
    .text('Gem Academy — Online Tutoring & Learning Platform', gemX, gemY, { continued: true });

  doc
    .font('Helvetica-Bold')
    .fontSize(8.5)
    .fillColor('#0369A1')
    .text('   [ Live Website • GitHub Pages ]');

  gemY += 16;

  // Project links
  doc
    .font('Helvetica-Bold')
    .fontSize(8.5)
    .fillColor('#0284C7')
    .text('Live URL: ', gemX, gemY, { continued: true })
    .font('Helvetica')
    .text('https://hikmatullah100.github.io/gem-Acadmey/', {
      link: 'https://hikmatullah100.github.io/gem-Acadmey/',
      underline: true,
      continued: true,
    })
    .font('Helvetica-Bold')
    .fillColor('#0F172A')
    .text('   |   GitHub: ', { continued: true })
    .font('Helvetica')
    .fillColor('#0284C7')
    .text('https://github.com/Hikmatullah100/gem-Acadmey', {
      link: 'https://github.com/Hikmatullah100/gem-Acadmey',
      underline: true,
    });

  gemY += 15;

  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor('#334155')
    .text(
      'A comprehensive educational platform built for O Level, IGCSE, and A Level students. Engineered an accessible digital learning portal featuring categorized course discovery, syllabus guides, teacher profiles, transparent fee schedules, and free demo booking in a responsive, modern UI.',
      gemX,
      gemY,
      { width: PAGE_WIDTH - MARGIN_X * 2 - 28, lineGap: 3 }
    );

  gemY += 34;

  // Bullets
  const gemBullets = [
    'Designed responsive layouts optimized for mobile, tablet, and desktop viewports.',
    'Structured subject curricula and teacher discovery modules with clean navigation hierarchy.',
    'Integrated call-to-action booking workflows for prospective tutoring sessions.',
  ];

  gemBullets.forEach((bullet) => {
    doc.fillColor('#12DDF5').circle(gemX + 4, gemY + 4, 2).fill();
    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor('#475569')
      .text(bullet, gemX + 12, gemY, { width: PAGE_WIDTH - MARGIN_X * 2 - 40 });
    gemY += 11;
  });

  currentY += 128;

  // Project 2: FinTrack Analytics Dashboard
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 70).fill('#F8FAFC');
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 70).stroke('#E2E8F0');
  doc.rect(MARGIN_X, currentY, 3, 70).fill('#2563EB');

  let finY = currentY + 9;
  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor('#030B1B')
    .text('FinTrack — Financial Analytics & Cash Flow Portal', MARGIN_X + 14, finY);

  finY += 15;
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor('#334155')
    .text(
      'Full-stack analytics portal for real-time portfolio metrics, categorical cash-flow tracking, responsive data grids, and telemetry visualization. Built with React, TypeScript, Tailwind CSS, Chart.js, and REST APIs.',
      MARGIN_X + 14,
      finY,
      { width: PAGE_WIDTH - MARGIN_X * 2 - 28, lineGap: 3 }
    );

  finY += 28;
  doc
    .font('Helvetica-Bold')
    .fontSize(8)
    .fillColor('#0F172A')
    .text('Technologies: ', MARGIN_X + 14, finY, { continued: true })
    .font('Helvetica')
    .fillColor('#475569')
    .text('TypeScript • React • Tailwind CSS • Chart.js • Node.js / Express');

  currentY += 80;

  // Project 3: ShopVista E-Commerce Platform
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 70).fill('#F8FAFC');
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 70).stroke('#E2E8F0');
  doc.rect(MARGIN_X, currentY, 3, 70).fill('#0EA5E9');

  let shopY = currentY + 9;
  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor('#030B1B')
    .text('ShopVista — Modern E-Commerce Platform', MARGIN_X + 14, shopY);

  shopY += 15;
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor('#334155')
    .text(
      'High-converting digital retail storefront with dynamic catalog filtering, slide-over shopping cart drawer, instant subtotal calculations, and responsive mobile-first checkout flows.',
      MARGIN_X + 14,
      shopY,
      { width: PAGE_WIDTH - MARGIN_X * 2 - 28, lineGap: 3 }
    );

  shopY += 28;
  doc
    .font('Helvetica-Bold')
    .fontSize(8)
    .fillColor('#0F172A')
    .text('Technologies: ', MARGIN_X + 14, shopY, { continued: true })
    .font('Helvetica')
    .fillColor('#475569')
    .text('React • Next.js • Tailwind CSS • REST APIs • Stripe Architecture');

  currentY += 82;

  // 4. CLIENT TESTIMONIAL & ENDORSEMENT
  renderSectionHeader('Client Testimonial');
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 58).fill('#F8FAFC');
  doc.rect(MARGIN_X, currentY, PAGE_WIDTH - MARGIN_X * 2, 58).stroke('#E2E8F0');
  doc.rect(MARGIN_X, currentY, 3, 58).fill('#10B981');

  let testY = currentY + 8;
  doc
    .font('Helvetica-Oblique')
    .fontSize(8.5)
    .fillColor('#334155')
    .text(
      '"Hikmat Ullah did a great job developing the Gem Academy website. The design is clean, professional, and user-friendly, with a responsive layout that makes it easy for students to explore courses, subjects, and tutoring options. His attention to detail and commitment to delivering a quality website made the experience smooth and positive."',
      MARGIN_X + 14,
      testY,
      { width: PAGE_WIDTH - MARGIN_X * 2 - 28, lineGap: 2.5 }
    );

  testY += 34;
  doc
    .font('Helvetica-Bold')
    .fontSize(8.5)
    .fillColor('#0F172A')
    .text('— Munawar Hussain', MARGIN_X + 14, testY, { continued: true })
    .font('Helvetica')
    .fillColor('#64748B')
    .text('  •  Gem Academy — Online Tutoring & Learning Platform');

  // Bottom Footer Bar
  const FOOTER_HEIGHT = 28;
  doc.rect(0, PAGE_HEIGHT - FOOTER_HEIGHT, PAGE_WIDTH, FOOTER_HEIGHT).fill('#030B1B');
  doc.rect(0, PAGE_HEIGHT - FOOTER_HEIGHT, PAGE_WIDTH, 1.5).fill('#12DDF5');

  doc
    .font('Helvetica')
    .fontSize(8)
    .fillColor('#A8B6CA')
    .text(
      'Hikmat Ullah • Web Developer Portfolio • Verified Online CV • Available for Hire',
      0,
      PAGE_HEIGHT - FOOTER_HEIGHT + 10,
      { align: 'center', width: PAGE_WIDTH }
    );

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      console.log(`✅ CV PDF generated successfully at ${outputPath}`);
      resolve(outputPath);
    });
    writeStream.on('error', reject);
  });
}

// Run directly if invoked from command line
if (process.argv[1]?.endsWith('generate-cv.ts') || process.argv[1]?.endsWith('generate-cv.js')) {
  generateCV().catch((err) => {
    console.error('Error generating CV:', err);
    process.exit(1);
  });
}
