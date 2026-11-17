import React, { useState } from 'react';
import { Quote, BarChart2, Star, ChevronLeft, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const TestimonialsAndStats: React.FC = () => {
  const { testimonials, showTestimonialsSection, statistics } = portfolioData;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const activeTestimonial = testimonials.length > 0 ? testimonials[currentTestimonialIndex] : null;

  const nextTestimonial = () => {
    if (testimonials.length > 1) {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials.length > 1) {
      setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: What Clients Say */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#12DDF5]/20 shadow-xl relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#12DDF5]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#12DDF5]/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#12DDF5]/15 border border-[#12DDF5]/30 flex items-center justify-center text-[#12DDF5]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    What Clients Say
                  </h2>
                </div>

                {testimonials.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevTestimonial}
                      className="p-1.5 rounded-lg bg-[#07152B] text-[#A8B6CA] hover:text-[#12DDF5] hover:border-[#12DDF5]/30 border border-transparent transition-all cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-1.5 rounded-lg bg-[#07152B] text-[#A8B6CA] hover:text-[#12DDF5] hover:border-[#12DDF5]/30 border border-transparent transition-all cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Testimonial Quote */}
              {activeTestimonial ? (
                <div className="space-y-4">
                  {activeTestimonial.rating ? (
                    <div className="flex gap-1 text-[#12DDF5]">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#12DDF5]" />
                      ))}
                    </div>
                  ) : null}

                  <p className="text-sm sm:text-base text-[#F5F8FF]/90 italic leading-relaxed">
                    {activeTestimonial.feedback}
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#12DDF5] to-[#278BFF] p-[1.5px] shrink-0">
                      <div className="w-full h-full rounded-full bg-[#030B1B] flex items-center justify-center font-bold text-xs text-[#12DDF5]">
                        {activeTestimonial.clientName.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {activeTestimonial.clientName}
                      </div>
                      <div className="text-xs text-[#12DDF5] font-medium">
                        {activeTestimonial.project || [activeTestimonial.clientRole, activeTestimonial.clientCompany].filter(Boolean).join(' • ')}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center space-y-2">
                  <Info className="w-6 h-6 text-[#12DDF5] mx-auto opacity-70" />
                  <p className="text-sm text-[#A8B6CA]">
                    Verified client recommendations will be showcased here upon approval.
                  </p>
                </div>
              )}
            </div>

            {/* Testimonials indicator dots */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6 mt-6 border-t border-[#12DDF5]/10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonialIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === currentTestimonialIndex
                        ? 'w-6 bg-[#12DDF5]'
                        : 'w-2 bg-[#12DDF5]/20 hover:bg-[#12DDF5]/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: By The Numbers (4 Stats Cards) */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#12DDF5]/20 shadow-xl relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-0 w-36 h-36 bg-[#278BFF]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#12DDF5]/15">
                <div className="w-9 h-9 rounded-xl bg-[#278BFF]/15 border border-[#278BFF]/35 flex items-center justify-center text-[#12DDF5]">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  By The Numbers
                </h2>
              </div>

              {/* 2x2 Numbers Grid */}
              <div className="grid grid-cols-2 gap-4">
                {statistics.map((stat) => (
                  <div
                    key={stat.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15 hover:border-[#12DDF5]/40 transition-all group"
                  >
                    <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#12DDF5] to-[#38E1FF] font-mono tracking-tight mb-1.5 group-hover:scale-105 transition-transform origin-left">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight mb-1">
                      {stat.label}
                    </div>
                    {stat.description && (
                      <p className="text-[11px] text-[#A8B6CA] leading-snug line-clamp-1">
                        {stat.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom note */}
            <div className="pt-6 mt-4 border-t border-[#12DDF5]/10 flex items-center justify-between text-xs text-[#A8B6CA]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#12DDF5]" />
                <span>Verified engineering metrics</span>
              </span>
              <span className="font-mono text-[#12DDF5] text-[11px]">Ready for new projects</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
