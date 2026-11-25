import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-14 md:py-20 bg-paper-bg relative border-t border-paper-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase font-bold tracking-widest text-terracotta font-mono">
              // Education
            </span>
          </div>
          <h2 className="heading-editorial text-3xl sm:text-4xl font-bold">
            Academic Background
          </h2>
        </div>

        {/* Minimal Education Card */}
        <div className="bg-paper-card rounded-2xl border border-paper-border p-6 sm:p-7 shadow-paper-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all hover:shadow-paper-md">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 border border-terracotta/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-dark">
                {personalInfo.education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted font-sans mt-0.5">
                {personalInfo.education.institution}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-mono bg-paper-bg px-4 py-2 rounded-xl border border-paper-border self-start sm:self-auto shadow-2xs">
            <Calendar className="w-4 h-4 text-terracotta" />
            <span>{personalInfo.education.period}</span>
            <span className="text-charcoal-faint">|</span>
            <span>CGPA:</span>
            <strong className="text-terracotta font-bold text-sm">{personalInfo.education.cgpa}</strong>
          </div>
        </div>

      </div>
    </section>
  );
};
