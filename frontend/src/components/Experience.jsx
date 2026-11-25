import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Code2, 
  Layers, 
  ExternalLink,
  MapPin
} from 'lucide-react';
import { experienceData, personalInfo } from '../data/portfolioData';
import { PencilUnderline, SketchStar } from './SketchAccents';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-paper-card relative border-t border-paper-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase font-bold tracking-widest text-terracotta">
              // Professional Journey
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="heading-editorial text-3xl sm:text-4xl md:text-5xl">
                Experience 
              </h2>
              <p className="text-charcoal-muted text-sm sm:text-base mt-2 max-w-xl">
                Documenting production web application engineering, MERN architecture, and client releases.
              </p>
            </div>
            
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper-bg border border-paper-border text-xs font-mono text-charcoal-dark self-start md:self-auto shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span>Total Experience: 2 Years</span>
            </div>
          </div>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="bg-paper-bg rounded-2xl border border-paper-border p-5 sm:p-8 shadow-paper-sm transition-all hover:shadow-paper-md"
            >
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-paper-border">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-dark">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-terracotta/10 text-terracotta border border-terracotta/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                      <span>{exp.status}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-paper-card text-charcoal-muted border border-paper-border">
                      {exp.employmentType}
                    </span>
                  </div>

                  {/* Company Name & Location */}
                  <div className="flex flex-wrap items-center gap-2.5 mt-1.5 text-sm text-charcoal-light">
                    <span className="font-semibold text-charcoal-dark font-sans text-base">
                      {exp.company}
                    </span>
                    <span className="text-charcoal-faint">•</span>
                    <span className="text-xs text-charcoal-muted font-sans flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-terracotta" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Duration & Date */}
                <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted bg-paper-card px-4 py-2 rounded-xl border border-paper-border self-start md:self-auto shadow-2xs">
                  <Calendar className="w-4 h-4 text-terracotta" />
                  <span className="font-bold text-charcoal-dark">{exp.period}</span>
                </div>
              </div>

              {/* Overview Summary */}
              <p className="text-charcoal-light text-sm sm:text-base my-6 leading-relaxed font-sans">
                {exp.summary}
              </p>

              {/* Key Responsibilities Breakdown */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-muted font-mono">
                  Verified Engineering Responsibilities & Impact:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div 
                      key={rIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-paper-card/70 border border-paper-border/60 text-xs sm:text-sm text-charcoal-dark"
                    >
                      <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-6 border-t border-paper-border/70 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-charcoal-muted mr-2">
                  Technologies Applied:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-paper-card text-charcoal-dark border border-paper-border shadow-2xs hover:border-terracotta transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
