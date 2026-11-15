import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { skillsData } from '../data/portfolioData';
import { SkillProficiencyLevel } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, CheckCircle, BookOpen, Compass, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { mode, isDataMode } = useTheme();
  const currentSkills = skillsData[mode];

  // Badge styler for proficiency levels
  const getLevelBadge = (level: SkillProficiencyLevel) => {
    switch (level) {
      case 'Practical Application':
        return {
          icon: CheckCircle,
          label: 'Practical Experience',
          colorClass: isDataMode
            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
            : 'bg-orange-500/10 text-orange-300 border-orange-500/30',
        };
      case 'Academic Knowledge':
        return {
          icon: BookOpen,
          label: 'Academic Foundation',
          colorClass: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
        };
      case 'Active Exploration':
        return {
          icon: Compass,
          label: 'Active Interest',
          colorClass: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
              <span className={`w-2 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Skills & Tooling
            </h2>
          </div>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-slate-400 uppercase tracking-wider text-[10px]">Classification:</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              <CheckCircle className={`w-3.5 h-3.5 ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`} />
              Practical
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              Academic
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              Exploration
            </span>
          </div>
        </div>

        {/* Animated Skill Groups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentSkills.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className="p-6 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                    <h3 className="font-display font-bold text-lg text-white">
                      {group.category}
                    </h3>
                    <Wrench className={`w-4 h-4 ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`} />
                  </div>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Individual Skills list */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => {
                      const levelMeta = getLevelBadge(skill.level);
                      const Icon = levelMeta.icon;

                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-200">
                              {skill.name}
                            </span>
                            {skill.badge && (
                              <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                                isDataMode
                                  ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30'
                                  : 'text-orange-300 bg-orange-950/40 border-orange-500/30'
                              }`}>
                                {skill.badge}
                              </span>
                            )}
                          </div>

                          <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border ${levelMeta.colorClass}`}>
                            <Icon className="w-3 h-3 shrink-0" />
                            <span>{skill.level.split(' ')[0]}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>{group.skills.length} core competencies</span>
                  <Sparkles className="w-3 h-3 opacity-40" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
