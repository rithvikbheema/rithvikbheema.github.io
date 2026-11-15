import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { aboutContent, educationData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, Cpu, Database, Layers, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { isDataMode } = useTheme();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
              <span className={`w-2 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
              Multidisciplinary Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              {aboutContent.title}
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Bridging analytical data systems with foundational electrical sciences and embedded hardware.
          </p>
        </div>

        {/* Top Grid: Narrative & Key Credentials Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Prose / Storytelling */}
          <div className="lg:col-span-7 space-y-5">
            {aboutContent.paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`text-base sm:text-lg leading-relaxed ${
                  idx === 0 ? 'text-slate-100 font-medium' : 'text-slate-300'
                }`}
              >
                {p}
              </motion.p>
            ))}

            {/* Quick checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Software & Python Development",
                "Data Analytics & QuickSight BI",
                "Machine Learning & Neural Networks",
                "Core Electrical & Power Systems",
                "Embedded Hardware & Arduino",
                "Cloud Infrastructure (AWS S3)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Summary Card: Education & Multidisciplinary Identity */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Highlight Card */}
            <div
              className={`p-6 rounded-2xl glass-panel border transition-all ${
                isDataMode
                  ? 'border-cyan-500/20 shadow-[0_0_30px_rgba(56,189,248,0.06)]'
                  : 'border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.06)]'
              }`}
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                <div className={`p-2.5 rounded-xl ${isDataMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-orange-500/10 text-orange-400'}`}>
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Education</span>
                  <h3 className="font-display font-bold text-white text-base">
                    {educationData.shortInstitution}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block">Degree</span>
                  <span className="font-medium text-slate-100">{educationData.degree}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div>
                    <span className="text-xs text-slate-400 block">Timeline</span>
                    <span className="font-mono text-xs text-slate-200">{educationData.period}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Final CGPA</span>
                    <span className={`font-mono font-bold text-base ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`}>
                      {educationData.cgpa} / 10
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-slate-500" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            {/* The Dual Edge Advantage Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Layers className={`w-4 h-4 ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`} />
                <h4 className="font-display font-semibold text-sm text-white">The Dual-Edge Advantage</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than treating software and hardware in silos, my background allows me to build intelligent predictive algorithms while genuinely understanding physical circuit constraints, sensor telemetry, and hardware operational limits.
              </p>
              
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 flex items-center gap-1">
                  <Database className="w-3 h-3" /> Data & AI
                </span>
                <span className="text-slate-500">+</span>
                <span className="text-orange-400 flex items-center gap-1">
                  <Cpu className="w-3 h-3" /> Core EEE
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Four Pillars of Expertise Grid */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <Compass className="w-4 h-4 text-slate-500" />
            <span>Key Engineering Pillars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutContent.quickPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl glass-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border inline-block mb-3 ${
                    isDataMode
                      ? 'text-cyan-400 bg-cyan-950/30 border-cyan-500/20'
                      : 'text-orange-400 bg-orange-950/30 border-orange-500/20'
                  }`}>
                    {pillar.category}
                  </span>
                  <h4 className="font-display font-bold text-white text-base mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
