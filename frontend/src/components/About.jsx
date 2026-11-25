import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { PaperClip } from './SketchAccents';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-paper-bg relative border-t border-paper-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-terracotta">
              // ABOUT ME
            </span>
          </div>
          <h2 className="heading-editorial text-3xl sm:text-4xl md:text-5xl">
            Engineering Scalable Web Solutions
            <span className="italic font-serif text-terracotta block sm:inline sm:ml-3">
              With Precision & Impact.
            </span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Punchy High-Impact Narrative & Capability Badges (Reference Style) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-4 text-charcoal-light leading-relaxed text-base sm:text-lg font-sans">
              <p>
                I'm a <strong className="text-charcoal-dark font-semibold">Full Stack Developer (MERN)</strong> with 2 years of professional experience building and maintaining web applications using <strong className="text-charcoal-dark font-semibold">React.js, Node.js, Express, and MongoDB</strong>.
              </p>

              <p>
                I work across the full development lifecycle — from crafting clean, responsive user interfaces to engineering reliable RESTful APIs and database schemas, with an emphasis on code quality, performance, and seamless user experiences.
              </p>
            </div>

            {/* Monospace Capability Badge Grid */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "State Management",
                "Responsive Design",
                "Git & GitHub"
              ].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-paper-card border border-paper-border text-charcoal-dark hover:border-terracotta hover:bg-white transition-all shadow-2xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Clean Overview Card with Location */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative bg-paper-card rounded-2xl border border-paper-border p-5 sm:p-7 shadow-paper-md">
              
              {/* Paperclip decoration */}
              <div className="absolute -top-4 right-8">
                <PaperClip className="w-6 h-10 text-terracotta" />
              </div>

              {/* Card Header without profile image or repeated name */}
              <div className="pb-4 border-b border-paper-border">
                <span className="text-[11px] uppercase tracking-wider font-bold text-terracotta font-mono">
                  Professional Overview
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-dark mt-0.5">
                  Full Stack Developer (MERN)
                </h3>
                <p className="text-xs text-charcoal-muted font-sans mt-0.5">
                  B.Tech CSE '23 • Full Stack Engineering
                </p>
              </div>

              {/* Quick Fact Matrix with Location: Indore */}
              <div className="py-4 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-charcoal-muted text-xs uppercase tracking-wider font-medium">Experience</span>
                  <span className="font-medium text-charcoal-dark text-right text-xs sm:text-sm">
                    2 Years (Professional)
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-charcoal-muted text-xs uppercase tracking-wider font-medium">Location</span>
                  <span className="font-medium text-charcoal-dark text-right flex items-center gap-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                    Indore, Madhya Pradesh, India
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-charcoal-muted text-xs uppercase tracking-wider font-medium">Degree</span>
                  <div className="text-right">
                    <span className="font-medium text-charcoal-dark block text-xs">B.Tech in CSE (CGPA: 8.0)</span>
                    <span className="text-[11px] text-charcoal-muted">Bansal College of Engg, 2023</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <span className="text-charcoal-muted text-xs uppercase tracking-wider font-medium">Frontend</span>
                  <span className="font-medium text-charcoal-dark sm:text-right text-xs">
                    React.js, Tailwind, TanStack Query, Redux
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <span className="text-charcoal-muted text-xs uppercase tracking-wider font-medium">Backend & MERN</span>
                  <span className="font-medium text-terracotta sm:text-right text-xs">
                    Node.js, Express.js, REST APIs, MongoDB
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
