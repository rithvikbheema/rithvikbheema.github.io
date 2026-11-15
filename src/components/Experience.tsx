import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { experienceData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const { isDataMode } = useTheme();
  const [selectedId, setSelectedId] = useState(experienceData[0].id);

  const activeExp = experienceData.find((e) => e.id === selectedId) || experienceData[0];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
              <span className={`w-2 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
              Career & Campus Roles
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Experience & Leadership
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Hands-on internships, engineering society contributions, and campus creative leadership.
          </p>
        </div>

        {/* Interactive Experience Layout: Tabs Left, Rich Detail Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company / Role Selector Tabs (Left) */}
          <div className="lg:col-span-5 space-y-3 max-h-[620px] overflow-y-auto pr-1">
            {experienceData.map((exp) => {
              const isSelected = exp.id === selectedId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 relative border ${
                    isSelected
                      ? isDataMode
                        ? 'bg-slate-900/90 border-cyan-500/40 shadow-[0_0_25px_rgba(56,189,248,0.12)]'
                        : 'bg-stone-900/90 border-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.12)]'
                      : 'bg-slate-900/30 border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border inline-block mb-1.5 ${
                        isSelected
                          ? isDataMode
                            ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30'
                            : 'text-orange-300 bg-orange-950/40 border-orange-500/30'
                          : 'text-slate-400 bg-white/5 border-white/10'
                      }`}>
                        {exp.type}
                      </span>
                      <h3 className="font-display font-bold text-white text-lg">
                        {exp.company}
                      </h3>
                      <p className={`text-xs font-mono font-medium ${
                        isSelected
                          ? isDataMode ? 'text-cyan-400' : 'text-orange-400'
                          : 'text-slate-400'
                      }`}>
                        {exp.role}
                      </p>
                    </div>

                    <ChevronRight className={`w-4 h-4 mt-1 transition-transform ${
                      isSelected ? 'text-white translate-x-1' : 'text-slate-600'
                    }`} />
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Inspector (Right) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`p-6 sm:p-8 rounded-2xl glass-panel border ${
                  isDataMode ? 'border-cyan-500/20' : 'border-orange-500/20'
                }`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                      {activeExp.type} Experience
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {activeExp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`font-semibold text-sm ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`}>
                        {activeExp.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs font-mono text-slate-400">{activeExp.location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {activeExp.period}
                    </span>
                  </div>
                </div>

                {/* Summary Quote */}
                <div className="my-5 p-4 rounded-xl bg-white/[0.03] border-l-2 border-white/20 text-slate-300 text-sm leading-relaxed italic">
                  "{activeExp.summary}"
                </div>

                {/* Key Contributions & Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                    Key Responsibilities & Deliverables
                  </h4>
                  
                  <ul className="space-y-2.5">
                    {activeExp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isDataMode ? 'text-cyan-400' : 'text-orange-400'
                        }`} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Skills / Tooling */}
                {activeExp.technologies && activeExp.technologies.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                      Applied Domains & Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeExp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
