import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Sparkles, 
  Wrench, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  // Core pillars for the left column
  const coreProficiencies = [
    {
      name: "React.js & Modern React 19",
      subtext: "Component Architecture • Context API • Hooks",
      status: "Advanced",
      accent: "bg-terracotta",
      fill: "w-[94%]"
    },
    {
      name: "Node.js & Express REST APIs",
      subtext: "Route Architecture • Middleware • Rate Limiting",
      status: "Production",
      accent: "bg-emerald-600",
      fill: "w-[90%]"
    },
    {
      name: "MongoDB & Mongoose ODM",
      subtext: "Schema Validation • Document Modeling • Indexing",
      status: "Production",
      accent: "bg-stone-700",
      fill: "w-[88%]"
    },
    {
      name: "Tailwind CSS & Responsive UI",
      subtext: "Mobile-First (320px–4K) • Custom Design Tokens",
      status: "Expert",
      accent: "bg-sky-600",
      fill: "w-[96%]"
    },
    {
      name: "TanStack React Query & State",
      subtext: "Server-State Caching • Redux Slices • Thunks",
      status: "Advanced",
      accent: "bg-amber-600",
      fill: "w-[89%]"
    },
    {
      name: "Generative AI & LLM Pipelines",
      subtext: "Gemini 2.5 Flash • Groq Llama 3.3 • JSON Schemas",
      status: "Active",
      accent: "bg-terracotta",
      fill: "w-[86%]"
    }
  ];

  // Tooling ecosystem categories for the right column
  const toolingCategories = [
    {
      label: "FRONTEND_ECOSYSTEM",
      tags: [
        "React 19",
        "Next.js",
        "Redux Toolkit",
        "TanStack Query",
        "Tailwind CSS",
        "React Router",
        "Axios"
      ]
    },
    {
      label: "BACKEND_&_DATABASE",
      tags: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Mongoose ODM",
        "SQL",
        "Socket.IO",
        "JWT & OTP Auth"
      ]
    },
    {
      label: "LANGUAGES_&_STANDARDS",
      tags: [
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5 Semantic",
        "CSS3 Layouts",
        "System Design"
      ]
    },
    {
      label: "AI_&_DEVELOPER_WORKFLOW",
      tags: [
        "Google Gemini 2.5 Flash",
        "Groq (Llama 3.3)",
        "Git & GitHub",
        "Postman",
        "Figma",
        "VS Code",
        "Vite"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-22 bg-paper-bg relative border-t border-paper-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase font-bold tracking-widest text-terracotta font-mono">
                / Technical Matrix
              </span>
            </div>
            <h2 className="heading-editorial text-3xl sm:text-4xl font-bold">
              Technical Stack & Tooling
            </h2>
          </div>

          <span className="text-xs font-mono text-charcoal-muted bg-paper-card px-3.5 py-1.5 rounded-full border border-paper-border self-start sm:self-auto shadow-2xs">
            Full-Stack MERN & AI Engineering
          </span>
        </div>

        {/* Compact Split Technical Matrix Card */}
        <div className="bg-paper-card rounded-2xl border border-paper-border p-6 sm:p-8 lg:p-9 shadow-paper-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Core Proficiencies */}
            <div className="lg:col-span-6 space-y-5">
              <div className="pb-3 border-b border-paper-border flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-muted">
                  // CORE_PROFICIENCIES
                </span>
                <span className="text-[11px] font-mono text-terracotta">
                  Production Level
                </span>
              </div>

              <div className="space-y-4">
                {coreProficiencies.map((item, idx) => (
                  <div key={idx} className="space-y-1.5 group">
                    <div className="flex items-baseline justify-between text-xs">
                      <div>
                        <span className="font-semibold text-charcoal-dark text-sm sm:text-base font-sans group-hover:text-terracotta transition-colors">
                          {item.name}
                        </span>
                        <p className="text-[11px] text-charcoal-muted font-mono mt-0.5">
                          {item.subtext}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-paper-bg border border-paper-border text-charcoal-muted font-medium">
                        {item.status}
                      </span>
                    </div>

                    {/* Sleek Line Indicator (No arbitrary %) */}
                    <div className="w-full h-1.5 bg-paper-bg rounded-full overflow-hidden border border-paper-border/60">
                      <div 
                        className={`h-full rounded-full ${item.accent} ${item.fill} transition-all duration-500 opacity-85 group-hover:opacity-100`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Platform & Tooling Ecosystem */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4 lg:border-l lg:border-paper-border/70">
              <div className="pb-3 border-b border-paper-border flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-muted">
                  // PLATFORM_&_TOOLING
                </span>
                <span className="text-[11px] font-mono text-charcoal-muted">
                  Active Stack
                </span>
              </div>

              <div className="space-y-5">
                {toolingCategories.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-2">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-muted">
                      {cat.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-paper-bg border border-paper-border text-charcoal-dark hover:border-terracotta hover:bg-white transition-all shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom quick summary pill */}
              <div className="pt-4 border-t border-paper-border/70 flex items-center justify-between text-[11px] font-mono text-charcoal-muted">
                <span>Total: 25+ Production Tools</span>
                <span className="text-terracotta font-semibold">Verified Daily</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
