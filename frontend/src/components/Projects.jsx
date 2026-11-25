import React from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  Layers, 
  Palette,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { PencilUnderline, SketchStar } from './SketchAccents';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-paper-bg relative border-t border-paper-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase font-bold tracking-widest text-terracotta">
              // Selected Works
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="heading-editorial text-3xl sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="text-charcoal-muted text-sm sm:text-base mt-2 max-w-xl font-sans">
                Real-world web applications and full-stack platforms built with React.js, Node.js, Express, and MongoDB.
              </p>
            </div>

            
          </div>
        </div>

        {/* Projects in ONE Single Row on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {projectsData.map((project) => {
            const isKinkLink = project.id === 'kinklink';

            return (
              <div 
                key={project.id}
                className="bg-paper-card rounded-2xl border border-paper-border p-6 sm:p-7 shadow-paper-sm hover:shadow-paper-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Section */}
                <div>
                  {/* Category Pill & Status Badge */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-paper-border/80">
                    <span className="text-[11px] uppercase font-mono tracking-wider font-semibold text-terracotta">
                      {project.category}
                    </span>

                    {isKinkLink ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-paper-bg text-charcoal-muted border border-paper-border">
                        <Building2 className="w-3 h-3 text-terracotta" />
                        <span>Savo Technologies</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sage-light text-sage-dark border border-sage/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                        <span>Live Production</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Role */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-dark mb-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-charcoal-muted mb-4">
                    {project.subtitle} • <span className="text-terracotta">{project.timeline}</span>
                  </p>

                  {/* Description */}
                  <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider text-charcoal-dark block mb-2">
                      Key Highlights:
                    </span>
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-charcoal-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-paper-bg text-charcoal-dark border border-paper-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono text-charcoal-muted bg-paper-bg border border-paper-border">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions / Status */}
                <div className="pt-4 border-t border-paper-border/80">
                  {isKinkLink ? (
                    /* KinkLink: Office Project (Confidential / Client Application) */
                    <div className="p-3 rounded-xl bg-paper-bg border border-paper-border/80 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-charcoal-dark font-medium">
                        <Building2 className="w-3.5 h-3.5 text-terracotta" />
                        <span>Savo Technologies Pvt Ltd</span>
                      </div>
                      <p className="text-[11px] text-charcoal-muted mt-0.5 font-sans">
                        Enterprise client platform (Proprietary / Under NDA)
                      </p>
                    </div>
                  ) : (
                    /* Public / Live Projects (Roast My Profile & ArtMelody) */
                    <div className="flex items-center justify-between gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-charcoal-dark text-paper-bg hover:bg-charcoal text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs group"
                        >
                          <span>Launch Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-paper-bg hover:bg-white border border-paper-border hover:border-terracotta text-charcoal-dark transition-colors"
                          title="View GitHub Profile / Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
