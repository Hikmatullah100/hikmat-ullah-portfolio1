import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Award, CheckCircle, Code } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface HeroProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects, onScrollToContact }) => {
  const { owner, hero, socialLinks } = portfolioData;

  // Render the exact 4 official brand icons with authentic colors and subtle hover glow
  const renderHeroSocialButton = (link: { platform: string; url: string; label: string }) => {
    switch (link.platform) {
      case 'facebook':
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-[#07152B] border border-[#1877F2]/30 hover:border-[#1877F2] text-[#1877F2] flex items-center justify-center hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all group"
            aria-label={link.label}
            title="Facebook"
          >
            {/* Official Facebook SVG */}
            <svg
              className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110"
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
            className="w-9 h-9 rounded-lg bg-[#07152B] border border-[#E1306C]/30 hover:border-[#E1306C] flex items-center justify-center hover:shadow-[0_0_15px_rgba(225,48,108,0.4)] transition-all group"
            aria-label={link.label}
            title="Instagram"
          >
            {/* Official Instagram SVG with recognized linear gradient */}
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="instagram-gradient-hero" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="25%" stopColor="#FCAF45" />
                  <stop offset="50%" stopColor="#F77737" />
                  <stop offset="75%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#833AB4" />
                </linearGradient>
              </defs>
              <path
                fill="url(#instagram-gradient-hero)"
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
            className="w-9 h-9 rounded-lg bg-[#07152B] border border-[#0A66C2]/30 hover:border-[#0A66C2] text-[#0A66C2] flex items-center justify-center hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all group"
            aria-label={link.label}
            title="LinkedIn"
          >
            {/* Official LinkedIn SVG */}
            <svg
              className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110"
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
            className="w-9 h-9 rounded-lg bg-[#07152B] border border-white/20 hover:border-white text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all group"
            aria-label={link.label}
            title="GitHub"
          >
            {/* Official GitHub SVG with crisp high contrast */}
            <svg
              className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110"
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
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#12DDF5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-[#278BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#0B1C35]/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle tech background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(18, 221, 245, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1C35]/80 border border-[#12DDF5]/30 text-xs font-medium text-[#F5F8FF] shadow-[0_0_15px_rgba(18,221,245,0.15)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12DDF5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#12DDF5]"></span>
              </span>
              <span className="text-[#A8B6CA]">{hero.badge}</span>
              <span className="text-white/30">|</span>
              <span className="text-[#12DDF5] font-semibold">{owner.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              {hero.headingPrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12DDF5] via-[#38E1FF] to-[#278BFF] drop-shadow-[0_0_25px_rgba(18,221,245,0.35)]">
                {hero.headingHighlight}
              </span>{' '}
              {hero.headingSuffix}
            </h1>

            {/* Short Bio / Introduction */}
            <p className="text-[#A8B6CA] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {hero.introduction}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] font-bold text-sm shadow-[0_0_25px_rgba(18,221,245,0.35)] hover:shadow-[0_0_35px_rgba(18,221,245,0.55)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B1C35]/70 hover:bg-[#0B1C35] text-white border border-[#12DDF5]/25 hover:border-[#12DDF5]/60 font-semibold text-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(18,221,245,0.2)] active:scale-95 cursor-pointer"
              >
                <span>Let's Talk</span>
                <MessageSquare className="w-4 h-4 text-[#12DDF5]" />
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#A8B6CA] font-medium mr-2">Connect:</span>
              {socialLinks.map((link) => renderHeroSocialButton(link))}
            </div>
          </div>

          {/* Right Column: Owner Portrait & Floating Stat Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Cyan Halo Glow */}
            <div className="absolute w-72 sm:w-88 h-72 sm:h-88 rounded-full bg-gradient-to-tr from-[#12DDF5]/20 via-[#278BFF]/25 to-transparent blur-2xl pointer-events-none" />

            {/* Portrait Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#12DDF5]/40 via-[#278BFF]/20 to-[#0B1C35] shadow-[0_0_50px_rgba(18,221,245,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#07152B] aspect-[4/5] flex items-center justify-center">
                  <img
                    src={owner.profileImage}
                    alt={`${owner.name} - ${owner.title}`}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle inner gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030B1B]/90 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Stat Card 1: Experience (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-8 p-3 rounded-2xl glass-card border border-[#12DDF5]/30 shadow-xl flex items-center gap-3 backdrop-blur-md animate-bounce-slow">
                <div className="w-9 h-9 rounded-xl bg-[#12DDF5]/15 border border-[#12DDF5]/30 flex items-center justify-center text-[#12DDF5]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none font-mono">
                    {hero.stats.yearsExperience}
                  </div>
                  <div className="text-[11px] text-[#A8B6CA] font-medium leading-tight">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2: Projects Completed (Mid Right) */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-10 p-3 rounded-2xl glass-card border border-[#12DDF5]/30 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-[#278BFF]/20 border border-[#278BFF]/40 flex items-center justify-center text-[#12DDF5]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none font-mono">
                    {hero.stats.projectsCompleted}
                  </div>
                  <div className="text-[11px] text-[#A8B6CA] font-medium leading-tight">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 3: Satisfaction (Bottom Right) */}
              <div className="absolute -bottom-4 -right-2 sm:-right-6 p-3 rounded-2xl glass-card border border-[#12DDF5]/30 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-[#12DDF5]/15 border border-[#12DDF5]/30 flex items-center justify-center text-[#12DDF5]">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#12DDF5] tracking-tight leading-none font-mono">
                    {hero.stats.clientSatisfaction}
                  </div>
                  <div className="text-[11px] text-[#A8B6CA] font-medium leading-tight">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Floating Banner Card: Clean Code (Bottom Center) */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[90%] py-2.5 px-4 rounded-xl glass-card border border-[#12DDF5]/35 shadow-2xl flex items-center justify-center gap-2 text-center">
                <Code className="w-4 h-4 text-[#12DDF5] shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide truncate">
                  {hero.floatingBannerText}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
