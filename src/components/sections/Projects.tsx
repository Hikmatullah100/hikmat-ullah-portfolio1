import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink, Eye } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Project } from '../../types';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Education', 'Full Stack', 'E-Commerce'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Bar matching reference image */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#12DDF5]/15 border border-[#12DDF5]/30 flex items-center justify-center text-[#12DDF5]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Selected Work
              </h2>
            </div>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#07152B] border border-[#12DDF5]/20 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] font-bold shadow-[0_0_12px_rgba(18,221,245,0.3)]'
                    : 'text-[#A8B6CA] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-[#12DDF5]/20 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-[#030B1B]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#030B1B]/80 backdrop-blur-md text-[#12DDF5] border border-[#12DDF5]/35 shadow-sm">
                      ● {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Button to open details */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="px-4 py-2 rounded-xl bg-[#12DDF5] text-[#030B1B] text-xs font-bold shadow-lg flex items-center gap-1.5 cursor-pointer hover:bg-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#0B1C35] text-white text-xs font-semibold border border-[#12DDF5]/40 shadow-lg flex items-center gap-1.5 hover:bg-[#07152B] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#12DDF5]" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#12DDF5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8B6CA] line-clamp-2 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#07152B] border border-[#12DDF5]/15 text-[#A8B6CA]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-[#12DDF5]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#12DDF5]/10 mt-2">
                <div className="flex items-center">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#12DDF5] hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12DDF5]/10 hover:bg-[#12DDF5]/20 border border-[#12DDF5]/30 hover:border-[#12DDF5]/60 transition-all shadow-[0_0_10px_rgba(18,221,245,0.12)] hover:shadow-[0_0_15px_rgba(18,221,245,0.25)]"
                      title="Open Live Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="w-8 h-8 rounded-lg bg-[#07152B] border border-[#12DDF5]/20 flex items-center justify-center text-[#12DDF5] hover:bg-[#12DDF5] hover:text-[#030B1B] hover:shadow-[0_0_12px_rgba(18,221,245,0.4)] transition-all cursor-pointer"
                  aria-label={`View details for ${project.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectDetailModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
