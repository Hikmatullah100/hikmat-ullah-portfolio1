import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { getCurrentYear } from '../../lib/utils';

export const Footer: React.FC = () => {
  const { owner, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render official brand icons with recognizable brand colors and hover treatments
  const renderSocialButton = (link: { platform: string; url: string; label: string }) => {
    switch (link.platform) {
      case 'facebook':
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#07152B] border border-[#1877F2]/30 hover:border-[#1877F2] text-[#1877F2] flex items-center justify-center hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all group"
            aria-label={link.label}
            title={link.label}
          >
            {/* Official Facebook SVG */}
            <svg
              className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        );

      case 'instagram':
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#07152B] border border-[#E1306C]/30 hover:border-[#E1306C] flex items-center justify-center hover:shadow-[0_0_15px_rgba(225,48,108,0.4)] transition-all group"
            aria-label={link.label}
            title={link.label}
          >
            {/* Official Instagram SVG with recognized linear gradient */}
            <svg
              className="w-4 h-4 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="instagram-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="25%" stopColor="#FCAF45" />
                  <stop offset="50%" stopColor="#F77737" />
                  <stop offset="75%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#833AB4" />
                </linearGradient>
              </defs>
              <path
                fill="url(#instagram-gradient-footer)"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        );

      case 'linkedin':
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#07152B] border border-[#0A66C2]/30 hover:border-[#0A66C2] text-[#0A66C2] flex items-center justify-center hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all group"
            aria-label={link.label}
            title={link.label}
          >
            {/* Official LinkedIn SVG */}
            <svg
              className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        );

      case 'github':
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#07152B] border border-white/20 hover:border-white text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all group"
            aria-label={link.label}
            title={link.label}
          >
            {/* Official GitHub SVG with crisp white/silver contrast */}
            <svg
              className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        );

      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-[#12DDF5]/15 bg-[#030B1B] pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#12DDF5]/10">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#12DDF5] to-[#278BFF] p-[1.5px]">
              <div className="w-full h-full bg-[#030B1B] rounded-[10px] flex items-center justify-center font-bold text-sm text-[#12DDF5]">
                {owner.initials}
              </div>
            </div>
            <div>
              <div className="font-bold text-base text-white">{owner.name}</div>
              <div className="text-xs text-[#A8B6CA]">{owner.title}</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#A8B6CA]">
            <a href="#home" className="hover:text-[#12DDF5] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#12DDF5] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#12DDF5] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#12DDF5] transition-colors">Projects</a>
            <a href="#process" className="hover:text-[#12DDF5] transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-[#12DDF5] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#12DDF5] transition-colors">Contact</a>
          </div>

          {/* Social Icons & WhatsApp */}
          <div className="flex flex-wrap items-center gap-3">
            {/* WhatsApp direct contact */}
            {owner.whatsapp && owner.whatsappUrl && (
              <a
                href={owner.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#07152B] border border-[#25D366]/25 hover:border-[#25D366]/60 text-[#25D366] flex items-center justify-center hover:shadow-[0_0_15px_rgba(37,211,102,0.35)] transition-all group"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg
                  className="w-4 h-4 fill-current text-[#25D366] transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.243 5.146 4.55.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.58-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.042 21.688c-1.737 0-3.435-.466-4.93-1.349l-.353-.21-3.669.962.979-3.578-.231-.368A9.704 9.704 0 0 1 2.378 12.04c0-5.342 4.346-9.689 9.691-9.689 2.587 0 5.019 1.008 6.848 2.839a9.634 9.634 0 0 1 2.837 6.85c0 5.343-4.346 9.689-9.712 9.689zm8.268-17.957A11.637 11.637 0 0 0 12.042.44C5.64.44.436 5.644.436 12.046c0 2.045.534 4.043 1.549 5.807L0 24l6.326-1.66a11.603 11.603 0 0 0 5.716 1.492h.005c6.401 0 11.605-5.205 11.605-11.607a11.54 11.54 0 0 0-3.342-8.198z" />
                </svg>
              </a>
            )}

            {/* 2-5: Facebook, Instagram, LinkedIn, GitHub with authentic brand colors */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => renderSocialButton(link))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B6CA]">
          <div>
            &copy; {getCurrentYear()} {owner.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07152B] border border-[#12DDF5]/20 text-[#A8B6CA] hover:text-[#12DDF5] hover:border-[#12DDF5]/50 transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
