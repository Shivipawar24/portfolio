import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper-bg border-t border-paper-border/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Minimal Monospace Attribution */}
        <p className="text-xs sm:text-[13px] font-mono text-charcoal-muted text-center sm:text-left tracking-wide">
          © 2026 {personalInfo.name} • Full Stack Developer (MERN) • Indore, India
        </p>

        {/* Minimal Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-paper-border hover:border-terracotta bg-paper-card/60 hover:bg-paper-card text-xs font-mono text-charcoal-muted hover:text-charcoal-dark transition-all group"
          title="Back to top"
        >
          <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
          <span>back to top</span>
        </button>

      </div>
    </footer>
  );
};
export default Footer;
