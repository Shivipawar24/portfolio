import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Palette, 
  Sparkles, 
  Layers, 
  Code2, 
  CheckCircle2, 
  ExternalLink,
  User,
  RefreshCw
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { PencilUnderline, SketchStar, CurvedArrow, PaperClip } from './SketchAccents';
import shivaniProfile from '../assets/profile_imageee.jpeg';

export const Hero = ({ onOpenResume }) => {
  const [imageMode, setImageMode] = useState('photo'); // 'photo' | 'sketch'
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative background paper grain & soft watercolor wash blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Branding, Editorial Headline, CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Tagline & Status Pill */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 mb-4 sm:mb-6 w-full">
              {/* Primary Role Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper-card border border-paper-border text-[11px] sm:text-xs font-mono text-charcoal-dark shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                <span className="font-semibold text-charcoal-dark uppercase tracking-wider">
                  Full Stack Developer (MERN)
                </span>
              </div>

              {/* Availability Status */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-light border border-sage/40 text-sage-dark text-[11px] sm:text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse shrink-0" />
                <span>{personalInfo.availability.status}</span>
              </div>
            </div>

            {/* Main Editorial Headline: Small & Centered on mobile */}
            <div className="relative mb-4 sm:mb-6 w-full text-center sm:text-left">
              <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl text-charcoal-dark font-medium tracking-tight leading-snug sm:leading-[1.12]">
                Creative mind.{" "}
                <span className="hidden sm:inline"><br /></span>
                <span className="italic font-serif text-terracotta relative inline-block pb-0.5">
                  Developer's hands.
                  <PencilUnderline className="absolute -bottom-1 left-0 w-full text-terracotta/70" />
                </span>
              </h1>
              <SketchStar className="absolute -top-4 right-10 sm:right-24 w-6 h-6 text-terracotta animate-float-slow hidden sm:block" />
            </div>

            {/* Brief Introduction */}
            <p className="text-charcoal-light text-sm sm:text-base md:text-lg max-w-xl mb-7 sm:mb-8 leading-relaxed font-sans text-center sm:text-left">
              Hi, I'm <strong className="font-semibold text-charcoal-dark">{personalInfo.name}</strong> — a <strong className="text-charcoal-dark font-semibold">Full Stack Developer (MERN)</strong> with 2 years of professional experience building modern, responsive web applications and scalable backend APIs using React.js, Node.js, Express, and MongoDB.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-full bg-charcoal-dark text-paper-bg hover:bg-charcoal font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg group text-center w-full sm:w-auto"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 text-terracotta group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-paper-card text-charcoal-dark hover:bg-white border border-paper-border hover:border-terracotta font-medium text-sm transition-all duration-200 shadow-xs hover:shadow-sm text-center w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-terracotta" />
                <span>Get in touch</span>
              </a>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-5 sm:pt-6 border-t border-paper-border/80 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-xs font-hand text-charcoal-muted">connect with me:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-paper-card hover:bg-white border border-paper-border text-charcoal-light hover:text-charcoal-dark hover:border-terracotta transition-colors"
                    aria-label="GitHub profile"
                    title="GitHub profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-paper-card hover:bg-white border border-paper-border text-charcoal-light hover:text-charcoal-dark hover:border-terracotta transition-colors"
                    aria-label="LinkedIn profile"
                    title="LinkedIn profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.artInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-paper-card hover:bg-white border border-paper-border text-charcoal-light hover:text-charcoal-dark hover:border-terracotta transition-colors"
                    aria-label="Art Instagram"
                    title="ArtMelody / Sketch Instagram"
                  >
                    <Palette className="w-4 h-4 text-terracotta" />
                  </a>
                </div>
              </div>

              {/* Quick credibility pill */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-charcoal-muted">
                <span className="font-semibold text-charcoal-dark">B.Tech CSE '23 (CGPA 8.0)</span>
                <span>•</span>
                <span>2 Yrs Professional Exp</span>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Profile Picture & Artistic Sketch Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Hand-drawn curved arrow pointing to illustration */}
            <div className="absolute -top-12 -left-6 hidden xl:block pointer-events-none z-10">
              <CurvedArrow className="w-20 h-14 text-terracotta/80 rotate-12" />
              <span className="font-hand text-sm text-terracotta block -mt-3 ml-2">
                {imageMode === 'photo' ? 'the developer herself ✨' : 'code meets canvas ✨'}
              </span>
            </div>

            {/* Tactile Sketchbook Art Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg bg-paper-card p-4 sm:p-5 rounded-2xl border border-paper-border shadow-paper-lg transition-transform hover:-translate-y-1 duration-300">
              
              {/* Washi tape header */}
              <div className="washi-tape" />

              {/* Image Display Container with smooth crossfade */}
              <div className="relative overflow-hidden rounded-xl border border-paper-border/80 bg-paper-bg  flex items-center justify-center group">
                
                {imageMode === 'photo' ? (
                  /* Animated Profile Picture Presentation */
                  <div className="relative w-full h-full overflow-hidden animate-fadeIn">
                    <img 
                      src={shivaniProfile} 
                      alt="Shivani Pawar - Full Stack Developer (MERN)"
                      className="w-full h-full object-cover object-top filter saturate-[1.03] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle warm paper texture gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating mini status badge over portrait */}
                    <div className="absolute top-3 left-3 bg-paper-bg/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-paper-border text-[10px] font-mono text-charcoal-dark shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Full Stack MERN</span>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white drop-shadow-sm">
                      <span className="font-serif text-sm font-semibold tracking-wide">
                        Shivani Pawar
                      </span>
                      
                    </div>
                  </div>
                ) : (
                  /* Whimsical Sketch Illustration Presentation */
                  <div className="relative w-full h-full overflow-hidden animate-fadeIn">
                    <img 
                      src="/artwork/hero-illustration.jpg" 
                      alt="The Creative Journey - Whimsical Developer Roadmap Illustration"
                      className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-paper-bg/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-paper-border text-[11px] font-hand text-charcoal-light shadow-2xs">
                      Original sketch concept ✎
                    </div>
                  </div>
                )}

              </div>


            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
};
