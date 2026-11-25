import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ArtGallery } from './components/ArtGallery';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper-bg text-charcoal-dark relative selection:bg-terracotta/20 selection:text-terracotta">
      {/* Sticky Editorial Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <ArtGallery /> */}
        <Education />
        <Contact />
      </main>

      {/* Editorial Warm Footer */}
      <Footer />

      {/* Complete Resume Preview & Download Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}

export default App;
