import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import shivaniProfile from '../assets/shivani_profile.jpeg';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['hero', 'about', 'experience', 'skills', 'architecture', 'projects', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 180;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-paper-bg/90 backdrop-blur-md border-b border-paper-border/80 shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Personal Brand with Profile Picture */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 text-charcoal-dark focus:outline-none"
          >
           
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight font-semibold text-charcoal-dark group-hover:text-terracotta transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-mono -mt-0.5">
                Frontend & Full-Stack MERN
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive 
                      ? 'text-terracotta bg-paper-card border border-paper-border shadow-xs' 
                      : 'text-charcoal-light hover:text-charcoal-dark hover:bg-paper-card/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-terracotta rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-dark hover:bg-paper-card border border-paper-border/60 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-charcoal-dark/40 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div className="w-full max-w-xs bg-paper-bg h-full p-6 shadow-2xl flex flex-col justify-between border-l border-paper-border">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-paper-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-paper-border shrink-0 bg-paper-card">
                    <img 
                      src={shivaniProfile} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <span className="font-serif font-bold text-lg text-charcoal-dark">
                    {personalInfo.name}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-paper-card text-charcoal-muted"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-charcoal-dark hover:bg-paper-card hover:text-terracotta font-medium transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-charcoal-muted font-hand">visit →</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Brand Note */}
            <div className="pt-6 border-t border-paper-border">
              <p className="text-[11px] text-center text-charcoal-muted font-mono">
                Full Stack Developer (MERN) • Indore, India
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
