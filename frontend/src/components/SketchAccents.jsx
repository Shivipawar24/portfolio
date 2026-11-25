import React from 'react';

// Hand-drawn wavy underline
export const PencilUnderline = ({ className = "w-full h-3 text-terracotta" }) => (
  <svg className={className} viewBox="0 0 240 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path 
      d="M2 10.5C45 4.5 95 12 140 7C180 2.5 215 9.5 238 6" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Whimsical hand-drawn star
export const SketchStar = ({ className = "w-5 h-5 text-terracotta", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 2L14.2 8.8L21 11L14.8 13.5L13 20.5L9.8 14.2L3 13L8.5 9.5L12 2Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      fill={fill}
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Curved hand-drawn arrow pointing to things
export const CurvedArrow = ({ className = "w-16 h-12 text-terracotta" }) => (
  <svg className={className} viewBox="0 0 68 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5 6C15 2 45 4 58 28C60 32 62 36 62 38" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeDasharray="4 3" 
    />
    <path 
      d="M48 35L62 39L64 26" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Paperclip SVG for that tactile sketchbook look
export const PaperClip = ({ className = "w-6 h-10 text-charcoal-muted" }) => (
  <svg className={className} viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16 10V28C16 31.3137 13.3137 34 10 34C6.68629 34 4 31.3137 4 28V8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8V27C16 28.6569 14.6569 30 13 30C11.3431 30 10 28.6569 10 27V12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
  </svg>
);

// Playful hand-drawn circle / highlight loop
export const DoodleCircle = ({ className = "w-full h-full text-sage" }) => (
  <svg className={className} viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path 
      d="M8 22C6 11 25 4 60 5C95 6 115 13 113 24C111 35 88 41 55 39C20 37 4 30 9 18" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
  </svg>
);

// Ink splatter / brush dab
export const InkDab = ({ className = "w-4 h-4 text-charcoal-muted" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C9 4 7 7 7 10C7 11.5 7.8 12.8 9 13.5C8 14 6 15 6 17C6 19.5 9 21 12 21C15 21 18 19.5 18 17C18 15 16 14 15 13.5C16.2 12.8 17 11.5 17 10C17 7 15 4 12 4Z" />
    <circle cx="19" cy="8" r="1.5" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);
