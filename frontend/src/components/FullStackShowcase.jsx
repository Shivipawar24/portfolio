import React, { useState } from 'react';
import { 
  Layers, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Code2, 
  Server, 
  Database, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Copy, 
  Check,
  RefreshCw
} from 'lucide-react';
import { architectureData } from '../data/portfolioData';
import { PencilUnderline, SketchStar } from './SketchAccents';

export const FullStackShowcase = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [simulatingRequest, setSimulatingRequest] = useState(false);
  const [simulationStep, setSimulationStep] = useState(null);

  const activeLayer = architectureData.layers[activeLayerIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeLayer.sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const runSimulation = () => {
    if (simulatingRequest) return;
    setSimulatingRequest(true);
    setSimulationStep(0);
    setActiveLayerIndex(0);

    const steps = [0, 1, 2, 3];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSimulationStep(step);
        setActiveLayerIndex(step);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            setSimulatingRequest(false);
            setSimulationStep(null);
          }, 1200);
        }
      }, (idx + 1) * 900);
    });
  };

  return (
    <section id="architecture" className="py-20 md:py-28 bg-paper-card relative border-t border-paper-border/70 overflow-hidden">
      
      {/* Background watercolor wash accent */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        

       

       

      </div>
    </section>
  );
};
