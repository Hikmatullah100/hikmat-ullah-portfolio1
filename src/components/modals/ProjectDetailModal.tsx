import React from 'react';
import { X, ExternalLink, Check, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#07152B] border border-[#12DDF5]/30 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#12DDF5]/15 bg-[#0B1C35]/60">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#12DDF5]/15 text-[#12DDF5] border border-[#12DDF5]/30">
              {project.category}
            </span>
            <span className="text-xs text-[#A8B6CA] hidden sm:inline">
              Status: <span className="text-emerald-400 font-medium">{project.status}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#07152B] text-[#A8B6CA] hover:text-white hover:border-[#12DDF5]/40 border border-transparent transition-all cursor-pointer"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with scroll */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Thumbnail Preview */}
          <div className="rounded-2xl overflow-hidden border border-[#12DDF5]/25 bg-[#030B1B] shadow-xl group">
            <div className="relative aspect-video w-full overflow-hidden bg-[#030B1B]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="px-4 py-2.5 bg-[#030B1B]/95 border-t border-[#12DDF5]/15 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs font-mono text-white/80">
                Verified Production Architecture
              </span>
              {project.date && (
                <span className="text-[11px] sm:text-xs font-mono text-[#12DDF5]">
                  {project.date}
                </span>
              )}
            </div>
          </div>

          {/* Title & Short Summary */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A8B6CA] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          {(project.problemStatement || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.problemStatement && (
                <div className="p-5 rounded-2xl bg-[#0B1C35]/60 border border-[#12DDF5]/15">
                  <div className="text-xs uppercase tracking-wider text-[#A8B6CA] font-bold mb-2">
                    The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F8FF]/90 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-5 rounded-2xl bg-[#0B1C35]/60 border border-[#12DDF5]/25">
                  <div className="text-xs uppercase tracking-wider text-[#12DDF5] font-bold mb-2">
                    The Technical Solution
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F8FF]/90 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#12DDF5] font-bold mb-3">
                Key Architectural Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#030B1B]/70 border border-[#12DDF5]/10 text-xs sm:text-sm text-white">
                    <Check className="w-4 h-4 text-[#12DDF5] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#A8B6CA] font-bold mb-3">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#0B1C35] border border-[#12DDF5]/20 text-xs font-mono text-[#12DDF5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-[#12DDF5]/15 bg-[#0B1C35]/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] text-xs font-bold shadow-md hover:shadow-[0_0_20px_rgba(18,221,245,0.4)] transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Website</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#A8B6CA] hover:text-white transition-colors cursor-pointer"
          >
            Back to Projects
          </button>
        </div>

      </div>
    </div>
  );
};
