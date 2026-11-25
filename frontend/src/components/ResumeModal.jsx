import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, CheckCircle2, FileText } from 'lucide-react';
import { personalInfo, skillsData, experienceData, projectsData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
============================================================
SHIVANI PAWAR — FULL STACK DEVELOPER (MERN)
============================================================
Email: ${personalInfo.socialLinks.email}
LinkedIn: ${personalInfo.socialLinks.linkedin}
GitHub: ${personalInfo.socialLinks.github}
Location: ${personalInfo.availability.location}
Experience: ${personalInfo.experienceYears}

PROFESSIONAL SUMMARY
------------------------------------------------------------
${personalInfo.bio.shortBio}

EDUCATION
------------------------------------------------------------
Degree: ${personalInfo.education.degree}
Year of Graduation: ${personalInfo.education.graduationYear}
Institution: ${personalInfo.education.institution}

PROFESSIONAL EXPERIENCE
------------------------------------------------------------
Role: ${experienceData[0].role}
Company: ${experienceData[0].company}
Period: ${experienceData[0].period} (${experienceData[0].duration})
Responsibilities:
${experienceData[0].responsibilities.map(r => `• ${r}`).join('\n')}

TECHNICAL SKILLS
------------------------------------------------------------
• Frontend: ${skillsData.frontend.map(s => s.name).join(', ')}
• Backend: ${skillsData.backend.map(s => s.name).join(', ')}
• Database: ${skillsData.database.map(s => s.name).join(', ')}
• Tools: ${skillsData.tools.map(s => s.name).join(', ')}
• Additional: ${skillsData.additional.map(s => s.name).join(', ')}
• Currently Learning: ${skillsData.currentlyLearning.map(s => s.topic).join(', ')}

FEATURED PROJECTS
------------------------------------------------------------
1. ArtMelody (${projectsData[0].category})
   - ${projectsData[0].description}
   - Tech: ${projectsData[0].technologies.join(', ')}
   
2. Kinklink (${projectsData[1].category})
   - ${projectsData[1].description}
   - Tech: ${projectsData[1].technologies.join(', ')}

3. Runner Admin (${projectsData[2].category})
   - ${projectsData[2].description}
   - Tech: ${projectsData[2].technologies.join(', ')}
============================================================
    `;

    const blob = new Blob([textContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Shivani_Pawar_Full_Stack_Developer_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-dark/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      
      {/* Resume Document Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl border border-paper-border shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto text-charcoal-dark my-auto">
        
        {/* Floating Controls Bar */}
        <div className="sticky -top-6 -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 px-6 sm:px-10 py-4 bg-paper-bg border-b border-paper-border flex items-center justify-between z-20 mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-terracotta" />
            <span className="font-serif font-bold text-sm sm:text-base text-charcoal-dark">
              Resume Preview — Shivani Pawar
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Shivani_Pawar_Resume.pdf"
              download="Shivani_Pawar_Full_Stack_Developer_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-terracotta text-white hover:bg-terracotta-hover text-xs font-mono transition-colors shadow-xs"
              title="Download Official Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Official PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-paper-card border border-paper-border hover:bg-white text-xs font-mono text-charcoal-dark transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-terracotta" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-paper-card text-charcoal-muted hover:text-charcoal-dark transition-colors ml-1"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="font-sans space-y-7 print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-charcoal-dark pb-5">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-dark">
              {personalInfo.name}
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-terracotta mt-1">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs font-mono text-charcoal-light">
              <span>Phone: {personalInfo.phone}</span>
              <span>•</span>
              <span>Email: {personalInfo.socialLinks.email}</span>
              <span>•</span>
              <span>LinkedIn: {personalInfo.socialLinks.linkedin}</span>
              <span>•</span>
              <span>GitHub: {personalInfo.socialLinks.github}</span>
              <span>•</span>
              <span>Location: {personalInfo.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-charcoal-dark border-b border-paper-border pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
              {personalInfo.experienceSummary} Graduated with a B.Tech in Computer Science and Engineering (2023). Currently expanding into full-stack MERN architecture (Node.js, Express, MongoDB). Also an active sketch artist, bringing high aesthetic sensibility, visual balance, and attention to micro-details into responsive web interfaces.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-charcoal-dark border-b border-paper-border pb-1 mb-2.5">
              Technical Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <strong className="font-mono text-charcoal-dark">Frontend: </strong>
                <span className="text-charcoal-light">{skillsData.frontend.map(s => s.name).join(', ')}</span>
              </div>
              <div>
                <strong className="font-mono text-charcoal-dark">Backend: </strong>
                <span className="text-charcoal-light">{skillsData.backend.map(s => s.name).join(', ')}</span>
              </div>
              <div>
                <strong className="font-mono text-charcoal-dark">Database: </strong>
                <span className="text-charcoal-light">{skillsData.database.map(s => s.name).join(', ')}</span>
              </div>
              <div>
                <strong className="font-mono text-charcoal-dark">Tools & Workflows: </strong>
                <span className="text-charcoal-light">{skillsData.tools.map(s => s.name).join(', ')}</span>
              </div>
              <div>
                <strong className="font-mono text-charcoal-dark">Libraries & Animation: </strong>
                <span className="text-charcoal-light">{skillsData.additional.map(s => s.name).join(', ')}</span>
              </div>
              <div>
                <strong className="font-mono text-terracotta">Currently Learning: </strong>
                <span className="text-charcoal-light">{skillsData.currentlyLearning.map(s => s.topic).join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-charcoal-dark border-b border-paper-border pb-1 mb-3">
              Professional Experience
            </h2>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-serif font-bold text-base text-charcoal-dark">
                      {exp.role} — <span className="font-sans font-medium text-charcoal-light">{exp.company}</span>
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-charcoal-muted">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs text-charcoal-light leading-relaxed pl-1">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-charcoal-dark border-b border-paper-border pb-1 mb-3">
              Selected Technical Projects
            </h2>

            <div className="space-y-3.5">
              {projectsData.map((proj, pIdx) => (
                <div key={pIdx} className="text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif font-bold text-sm text-charcoal-dark">
                      {proj.title} <span className="font-sans font-normal text-charcoal-muted">— {proj.subtitle}</span>
                    </span>
                    <span className="font-mono text-[11px] text-terracotta">{proj.category}</span>
                  </div>
                  <p className="text-charcoal-light mt-0.5">{proj.description}</p>
                  <p className="font-mono text-[11px] text-charcoal-muted mt-0.5">
                    <strong>Tech:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-charcoal-dark border-b border-paper-border pb-1 mb-2">
              Education
            </h2>
            <div className="flex items-baseline justify-between text-xs">
              <div>
                <span className="font-serif font-bold text-sm text-charcoal-dark">
                  {personalInfo.education.degree} — <span className="font-sans font-semibold text-terracotta">CGPA: {personalInfo.education.cgpa}</span>
                </span>
                <p className="text-charcoal-muted font-sans mt-0.5">{personalInfo.education.institution}</p>
              </div>
              <span className="font-mono text-charcoal-muted">
                {personalInfo.education.period}
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
