import React, { useState } from 'react';
import { ArrowRight, Check, Copy, ExternalLink, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-paper-card relative border-t border-paper-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Tag */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">
                // CONTACT
              </span>
            </div>

            {/* Headline */}
            <h2 className="heading-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-dark leading-tight">
              Open to the right role.
            </h2>

            {/* Subtext */}
            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed max-w-lg font-sans">
              Interested in Full Stack Developer (MERN), Frontend Engineering, or Software Engineering positions. Let's talk about building clean, high-performance web applications together.
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}?subject=Opportunity%20Inquiry%20-%20Shivani%20Pawar`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-terracotta hover:bg-terracotta-hover text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xs hover:shadow-md group"
              >
                <span>SEND AN EMAIL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Fallback Copy Address */}
            <div className="pt-2 text-xs text-charcoal-muted font-sans space-y-1">
              <p>If your email client does not open automatically, copy this address:</p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 font-mono text-xs text-charcoal-dark hover:text-terracotta font-medium transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                <span className="underline underline-offset-2 decoration-paper-border group-hover:decoration-terracotta break-all">
                  {personalInfo.email}
                </span>
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-sage text-[11px] font-sans font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-charcoal-muted group-hover:text-terracotta transition-colors" />
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Clean Minimal Contact Matrix */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-paper-bg rounded-xl border border-paper-border divide-y divide-paper-border shadow-paper-sm overflow-hidden">
              
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-paper-card transition-colors group gap-1 sm:gap-4"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold w-24">
                  EMAIL
                </span>
                <span className="font-mono text-xs sm:text-sm text-charcoal-dark group-hover:text-terracotta transition-colors break-all">
                  {personalInfo.email}
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-paper-card transition-colors group gap-1 sm:gap-4"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold w-24">
                  LINKEDIN
                </span>
                <span className="font-mono text-xs sm:text-sm text-charcoal-dark group-hover:text-terracotta transition-colors">
                  linkedin.com/in/pawarshivi
                </span>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-paper-card transition-colors group gap-1 sm:gap-4"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold w-24">
                  GITHUB
                </span>
                <span className="font-mono text-xs sm:text-sm text-charcoal-dark group-hover:text-terracotta transition-colors">
                  github.com/Shivipawar24
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-paper-card transition-colors group gap-1 sm:gap-4"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold w-24">
                  PHONE
                </span>
                <span className="font-mono text-xs sm:text-sm text-charcoal-dark group-hover:text-terracotta transition-colors">
                  {personalInfo.phone}
                </span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
