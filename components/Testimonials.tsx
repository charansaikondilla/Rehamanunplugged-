import React, { useEffect, useRef, useState } from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Create duplicated array for infinite scrolling
    const duplicated = [...testimonials, ...testimonials, ...testimonials];
    setDuplicatedTestimonials(duplicated);

    // Auto-scroll function
    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    let animationId: number;

    const autoScroll = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;

        // Reset to beginning when reaching the end
        if (scrollAmount >= container.scrollWidth / 3) {
          scrollAmount = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll with slight delay
    const startTimeout = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [testimonials]);

  return (
    <div className="w-full space-y-4 md:space-y-6">

      {/* Ambient Glow Background */}
      <div className="relative inset-0 bg-gradient-to-r from-emerald-50 via-transparent to-emerald-50 rounded-3xl blur-3xl opacity-30"></div>

      {/* Section Header */}
      <div className="text-center mb-4 md:mb-8 px-2 md:px-4">
        <h2 className="font-display font-black text-lg md:text-2xl text-gray-900 uppercase tracking-tight mb-2">
          Voices of Transformation
        </h2>
        <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed">
          Real stories from people whose lives have changed through mentorship
        </p>
      </div>

      {/* Horizontal Auto-Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth w-full"
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex gap-4 md:gap-6 pb-4 md:pb-6 px-4 md:px-0 min-w-max">
          {(duplicatedTestimonials.length > 0 ? duplicatedTestimonials : testimonials).map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 md:w-80 lg:w-96 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl group relative"
            >
              {/* Glow Background - Emerald Theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl"></div>

              {/* Testimonial Card */}
              <div className="h-full bg-white border-2 border-emerald-200 group-hover:border-emerald-400 p-6 md:p-8 flex flex-col relative z-10 transition-all duration-300">
                
                {/* Stars Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="flex-1 mb-6 md:mb-8">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-emerald-200 via-emerald-100 to-transparent mb-6 md:mb-6"></div>

                {/* Testimonial Author - with Image */}
                <div className="flex items-center gap-4">
                  {/* Image Container with Border */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-md group-hover:border-emerald-400 transition-all">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Emerald Accent Dot */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-md"></div>
                  </div>

                  {/* Author Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-black text-sm md:text-base text-gray-900 uppercase tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-[11px] md:text-xs text-emerald-600 font-semibold uppercase tracking-wide mt-1">
                      {testimonial.title}
                    </p>
                    <p className="text-[9px] md:text-[10px] text-gray-500 font-medium mt-0.5">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scroll Indicator */}
      <div className="text-center">
        <p className="text-[9px] text-gray-400 flex items-center justify-center gap-1">
          <i className="fa-solid fa-circle text-emerald-400 text-[6px] animate-pulse"></i> Auto-scrolling
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
