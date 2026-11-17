import React, { useState } from 'react';
import { Layout, Server, Database, Wrench, CheckCircle2, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? skills
    : skills.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1C35] border border-[#12DDF5]/20 text-xs font-semibold text-[#12DDF5] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-[#A8B6CA] text-sm sm:text-base leading-relaxed">
            A comprehensive overview of my core technology stack, programming languages, frameworks, and modern development tooling.
          </p>
        </div>

        {/* Category Filter Pills (Functional Filter Controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] shadow-[0_0_15px_rgba(18,221,245,0.3)]'
                : 'bg-[#0B1C35]/60 hover:bg-[#0B1C35] text-[#A8B6CA] hover:text-white border border-[#12DDF5]/15'
            }`}
          >
            All Disciplines
          </button>
          {skills.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] shadow-[0_0_15px_rgba(18,221,245,0.3)]'
                  : 'bg-[#0B1C35]/60 hover:bg-[#0B1C35] text-[#A8B6CA] hover:text-white border border-[#12DDF5]/15'
              }`}
            >
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-[#12DDF5]/20 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#12DDF5]/15">
                  <div className="w-10 h-10 rounded-xl bg-[#12DDF5]/10 border border-[#12DDF5]/25 flex items-center justify-center text-[#12DDF5]">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-xs text-[#A8B6CA]">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-white font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#12DDF5] shrink-0" />
                          <span>{skill.name}</span>
                        </div>
                        {skill.proficiency && (
                          <span className="text-xs font-mono text-[#12DDF5]">
                            {skill.proficiency}%
                          </span>
                        )}
                      </div>
                      {skill.proficiency && (
                        <div className="h-1.5 w-full bg-[#07152B] rounded-full overflow-hidden border border-[#12DDF5]/10">
                          <div
                            className="h-full bg-gradient-to-r from-[#278BFF] to-[#12DDF5] rounded-full shadow-[0_0_8px_rgba(18,221,245,0.4)] transition-all duration-700"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#12DDF5]/10 flex items-center justify-between text-[11px] text-[#A8B6CA]">
                <span className="font-mono">Production tested</span>
                <span className="text-[#12DDF5]">TypeScript First</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
