import React, { useState } from 'react';
import { 
  Palette, 
  ExternalLink, 
  X, 
  Eye, 
  Sparkles, 
  Maximize2, 
  Calendar, 
  Tag 
} from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { artworksData, personalInfo } from '../data/portfolioData';
import { PencilUnderline, SketchStar, PaperClip } from './SketchAccents';

export const ArtGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxArtwork, setLightboxArtwork] = useState(null);

  const categories = [
    'All',
    'Pencil & Watercolor',
    'Pencil Sketches',
    'Ink & Line Art',
    'Digital Illustrations',
    'Studies & Concept Art'
  ];

  const filteredArtworks = selectedCategory === 'All'
    ? artworksData
    : artworksData.filter(art => art.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-paper-card relative border-t border-paper-border/70 overflow-hidden">
      
      {/* Subtle organic background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-terracotta" />
            <span className="text-xs uppercase font-bold tracking-widest text-terracotta">
              06 / Creative Identity
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="heading-editorial text-3xl sm:text-4xl md:text-5xl">
                The Art Gallery & Sketchbook
              </h2>
              <p className="text-charcoal-muted text-sm sm:text-base mt-2 max-w-xl font-sans">
                My original sketches, graphite portraits, ink studies, and digital artwork. This creative discipline shapes how I balance visual rhythm, whitespace, and micro-interactions in code.
              </p>
            </div>

            {/* Social Art Link */}
            <a
              href={personalInfo.socialLinks.artInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper-bg text-charcoal-dark border border-paper-border hover:border-terracotta hover:bg-white text-xs font-mono transition-all shadow-2xs self-start md:self-auto"
              title="ArtMelody / Instagram Artwork Showcase"
            >
              <InstagramIcon className="w-4 h-4 text-terracotta" />
              <span>@ArtMelody Portfolio</span>
              <ExternalLink className="w-3 h-3 text-charcoal-muted" />
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-charcoal-dark text-paper-bg shadow-xs'
                    : 'bg-paper-bg text-charcoal-muted hover:text-charcoal-dark border border-paper-border hover:border-charcoal-faint'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setLightboxArtwork(art)}
              className="group cursor-pointer bg-paper-bg rounded-2xl border border-paper-border p-4 shadow-paper-sm hover:shadow-paper-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Artwork Frame */}
              <div className="relative overflow-hidden rounded-xl border border-paper-border/80 bg-paper-card aspect-[4/3] sm:aspect-square">
                <img 
                  src={art.image} 
                  alt={art.title}
                  className="w-full h-full object-cover object-center filter saturate-[0.98] transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder canvas
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-paper-card">
                        <span class="text-3xl font-serif text-terracotta mb-2">🎨</span>
                        <h4 class="font-serif font-bold text-sm text-charcoal-dark">${art.title}</h4>
                        <p class="text-xs text-charcoal-muted font-hand mt-1">${art.medium}</p>
                      </div>
                    `;
                  }}
                />

                {/* Medium badge */}
                <div className="absolute top-2.5 left-2.5 bg-paper-bg/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-paper-border text-[10px] font-mono text-charcoal-dark shadow-2xs">
                  {art.category}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-charcoal-dark/30 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-paper-bg text-charcoal-dark text-xs font-mono flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-terracotta" />
                    <span>View Lightbox</span>
                  </div>
                </div>
              </div>

              {/* Artwork Meta */}
              <div className="pt-4 px-1">
                <div className="flex items-center justify-between text-[11px] text-charcoal-muted font-mono mb-1">
                  <span>{art.year}</span>
                  <span>{art.dimensions}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-charcoal-dark group-hover:text-terracotta transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs text-charcoal-muted line-clamp-2 mt-1 font-sans">
                  {art.description}
                </p>

                {/* Medium tag */}
                <div className="mt-3 pt-2.5 border-t border-paper-border/60 flex items-center justify-between text-[11px]">
                  <span className="font-hand text-terracotta text-xs">
                    {art.medium}
                  </span>
                  <span className="text-charcoal-faint text-[10px] font-mono">
                    Click to zoom
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Gallery Note / Commission Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-paper-bg border border-paper-border shadow-paper-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal-dark">
                Custom Artwork Commissions & Original Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1 max-w-xl">
                Interested in custom pencil sketches, architectural line studies, or creative design collaboration? Feel free to reach out via ArtMelody or the contact form below.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-charcoal-dark text-paper-bg hover:bg-charcoal text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
          >
            <span>Inquire About Artwork</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxArtwork && (
        <div className="fixed inset-0 z-50 bg-charcoal-dark/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-paper-bg rounded-2xl border border-paper-border shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
            
            {/* Close */}
            <button
              onClick={() => setLightboxArtwork(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-paper-card text-charcoal-dark transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Full Image */}
              <div className="md:col-span-7 bg-paper-card rounded-xl border border-paper-border p-2 overflow-hidden flex items-center justify-center">
                <img 
                  src={lightboxArtwork.image} 
                  alt={lightboxArtwork.title}
                  className="w-full max-h-[60vh] object-contain rounded-lg"
                />
              </div>

              {/* Artwork Story & Specs */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-terracotta">
                    {lightboxArtwork.category} • {lightboxArtwork.year}
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-dark mt-1">
                    {lightboxArtwork.title}
                  </h3>

                  <p className="font-serif italic text-sm text-charcoal-light mt-1">
                    "{lightboxArtwork.subtitle}"
                  </p>

                  <div className="my-5 p-4 rounded-xl bg-paper-card border border-paper-border space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-charcoal-muted">Medium:</span>
                      <span className="text-charcoal-dark font-medium text-right font-hand text-sm">{lightboxArtwork.medium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-muted">Dimensions:</span>
                      <span className="text-charcoal-dark font-medium">{lightboxArtwork.dimensions}</span>
                    </div>
                  </div>

                  <p className="text-sm text-charcoal-light leading-relaxed font-sans mb-6">
                    {lightboxArtwork.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {lightboxArtwork.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-paper-card border border-paper-border text-charcoal-muted">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-paper-border flex items-center justify-between">
                  <a
                    href={personalInfo.socialLinks.artInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-terracotta hover:underline"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>View on ArtMelody</span>
                  </a>

                  <button
                    onClick={() => setLightboxArtwork(null)}
                    className="px-4 py-1.5 rounded-full bg-paper-card border border-paper-border text-xs font-mono text-charcoal-dark hover:bg-white"
                  >
                    Close
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
