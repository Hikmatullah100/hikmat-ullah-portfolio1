import React, { useState } from 'react';
import { User, MapPin, Mail, Sparkles, ArrowRight, X, Check, Code2, Terminal, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  const { owner, about, skills } = portfolioData;
  const [showBioModal, setShowBioModal] = useState(false);

  // Quick skills to feature on the right card (matching reference image)
  const quickSkills = [
    { name: 'JavaScript / TypeScript', percentage: 95 },
    { name: 'React / Next.js', percentage: 90 },
    { name: 'Node.js / Express', percentage: 85 },
    { name: 'REST APIs & Architecture', percentage: 88 },
    { name: 'SQL / MongoDB', percentage: 82 },
    { name: 'HTML / CSS / Tailwind CSS', percentage: 95 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-card layout directly inspired by reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: About Me */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#12DDF5]/20 shadow-xl relative overflow-hidden group">
            {/* Ambient corner glow */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#12DDF5]/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#12DDF5]/20" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#12DDF5]/15 border border-[#12DDF5]/30 flex items-center justify-center text-[#12DDF5]">
                  <User className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  About Me
                </h2>
              </div>

              {/* Bio summary */}
              <p className="text-[#A8B6CA] text-sm sm:text-base leading-relaxed mb-8">
                {about.summary}
              </p>

              {/* 2x2 Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Name */}
                <div className="p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#12DDF5] shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider">Name</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate">{owner.name}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#12DDF5] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate">{owner.location}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#12DDF5] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider">Email</div>
                    <a 
                      href={`mailto:${owner.email}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#12DDF5] truncate block transition-colors"
                    >
                      {owner.email}
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#12DDF5] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider">Availability</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#12DDF5] flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#12DDF5] animate-pulse"></span>
                      {owner.availability}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div>
              <button
                onClick={() => setShowBioModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#07152B] hover:bg-[#07152B]/90 border border-[#12DDF5]/30 hover:border-[#12DDF5] text-white text-xs sm:text-sm font-semibold transition-all group-hover:shadow-[0_0_20px_rgba(18,221,245,0.2)] cursor-pointer"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 text-[#12DDF5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: My Expertise (Skills progress bars matching reference image) */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#12DDF5]/20 shadow-xl relative overflow-hidden group">
            {/* Ambient corner glow */}
            <div className="absolute -top-12 -left-12 w-44 h-44 bg-[#278BFF]/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#278BFF]/20" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#278BFF]/15 border border-[#278BFF]/35 flex items-center justify-center text-[#12DDF5]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    My Expertise
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#12DDF5] tracking-wide">
                  Core Technologies
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {quickSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-[#12DDF5] font-mono font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#07152B] rounded-full overflow-hidden p-[1px] border border-[#12DDF5]/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#278BFF] via-[#12DDF5] to-[#70EEFF] shadow-[0_0_12px_rgba(18,221,245,0.4)] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick footnote */}
            <div className="pt-6 mt-4 border-t border-[#12DDF5]/10 flex items-center justify-between text-xs text-[#A8B6CA]">
              <span>Continuous exploration of emerging web standards</span>
              <a href="#skills" className="text-[#12DDF5] hover:underline font-medium">
                View Full Stack →
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Detailed Bio Modal */}
      {showBioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#07152B] border border-[#12DDF5]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Top Close Button */}
            <button
              onClick={() => setShowBioModal(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#0B1C35] text-[#A8B6CA] hover:text-white hover:border-[#12DDF5]/40 border border-transparent transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#12DDF5]/15 border border-[#12DDF5]/30 flex items-center justify-center text-[#12DDF5]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Hikmat Ullah — Detailed Bio</h3>
                <p className="text-xs text-[#12DDF5] font-mono">Web Developer • Modern Full-Stack Architecture</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#A8B6CA] leading-relaxed mb-6">
              {about.detailedBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1C35]/60 border border-[#12DDF5]/20 mb-6">
              <div className="text-xs uppercase tracking-wider text-[#12DDF5] font-bold mb-2">
                Current Engineering Focus
              </div>
              <p className="text-sm text-white font-medium">{about.currentFocus}</p>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-xs uppercase tracking-wider text-[#A8B6CA] font-bold">
                Technical Interests & Practices
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {about.technicalInterests.map((interest, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white p-2 rounded-lg bg-[#030B1B]/60 border border-[#12DDF5]/10">
                    <Check className="w-3.5 h-3.5 text-[#12DDF5] shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#12DDF5]/15">
              <button
                onClick={() => setShowBioModal(false)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] text-xs font-bold shadow-md cursor-pointer hover:opacity-95"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
