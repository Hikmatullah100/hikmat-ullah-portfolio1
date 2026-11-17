import React from 'react';
import { GitBranch, Search, FileText, PenTool, Code2, CheckCircle, Rocket } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Process: React.FC = () => {
  const { processSteps } = portfolioData;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5" />;
      case 'Rocket':
      default:
        return <Rocket className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-9 h-9 rounded-xl bg-[#12DDF5]/15 border border-[#12DDF5]/30 flex items-center justify-center text-[#12DDF5]">
            <GitBranch className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              My Work Process
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B6CA]">
              A disciplined, engineering-first approach from concept to production deployment.
            </p>
          </div>
        </div>

        {/* 6-Step Horizontal / Vertical Process Grid */}
        <div className="relative">
          {/* Cyan connecting line across desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#12DDF5]/20 via-[#12DDF5]/60 to-[#278BFF]/40 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-[#12DDF5]/20 flex flex-col items-center text-center relative group"
              >
                {/* Step Circle with Icon */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#07152B] border-2 border-[#12DDF5]/40 group-hover:border-[#12DDF5] flex items-center justify-center text-[#12DDF5] shadow-[0_0_15px_rgba(18,221,245,0.2)] group-hover:shadow-[0_0_25px_rgba(18,221,245,0.45)] group-hover:scale-105 transition-all">
                    {getStepIcon(step.iconName)}
                  </div>
                  {/* Step numerical indicator */}
                  <span className="absolute -bottom-2 bg-[#0B1C35] text-[10px] font-mono font-bold text-[#12DDF5] px-2 py-0.5 rounded-full border border-[#12DDF5]/30">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#12DDF5] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#A8B6CA] leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile line connecting indicator */}
                {idx < processSteps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-4 bg-[#12DDF5]/30 mt-3" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
