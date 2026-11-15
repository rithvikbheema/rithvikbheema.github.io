import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Database, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { mode, isDataMode } = useTheme();
  const [filter, setFilter] = useState<'focused' | 'all' | 'data-ai' | 'core-eng'>('focused');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Compute displayed projects based on active filter and mode
  const displayedProjects = projectsData.filter((project) => {
    if (filter === 'focused') {
      return project.featuredIn === mode || project.featuredIn === 'both';
    }
    if (filter === 'all') return true;
    if (filter === 'data-ai') return project.categoryMode === 'data-ai' || project.featuredIn === 'both';
    if (filter === 'core-eng') return project.categoryMode === 'core-eng' || project.featuredIn === 'both';
    return true;
  });

  // Project Illustration helper component
  const ProjectVisual: React.FC<{ project: Project }> = ({ project }) => {
    switch (project.id) {
      case 'geothermal-desalination-h2':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-amber-950/30 via-slate-900 to-black rounded-xl p-4 overflow-hidden border border-amber-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> THERMODYNAMIC & ANN PIPELINE
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">MATLAB · SIMULINK</span>
            </div>
            
            {/* Visual Schematic Diagram */}
            <div className="relative my-auto flex items-center justify-around font-mono text-[10px]">
              <div className="text-center p-2 rounded-lg bg-white/[0.04] border border-amber-500/30 text-amber-200">
                <div className="font-bold">Geothermal Heat</div>
                <div className="text-[8px] text-slate-400">Thermal Wells</div>
              </div>
              <div className="text-amber-400 font-bold">➔</div>
              <div className="text-center p-2 rounded-lg bg-white/[0.04] border border-cyan-500/30 text-cyan-200">
                <div className="font-bold">RO Desalination</div>
                <div className="text-[8px] text-slate-400">Pelton Recovery</div>
              </div>
              <div className="text-amber-400 font-bold">➔</div>
              <div className="text-center p-2 rounded-lg bg-white/[0.04] border border-emerald-500/30 text-emerald-200">
                <div className="font-bold">Green H₂ Yield</div>
                <div className="text-[8px] text-slate-400">ANN Optimized</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Bayesian Search Optimization</span>
              <span className="text-amber-300">Energy Recovery: Pelton Turbine</span>
            </div>
          </div>
        );

      case 'netflix-data-visualization':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-cyan-950/30 via-slate-900 to-black rounded-xl p-4 overflow-hidden border border-cyan-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> CLOUD BI VISUALIZATION
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">Amazon QuickSight</span>
            </div>
            
            {/* Mock analytical chart bars */}
            <div className="my-auto flex items-end justify-center gap-3 h-16 pt-2">
              <div className="w-8 h-8 bg-sky-500/40 rounded-t border-t border-sky-400 flex items-center justify-center text-[8px] font-mono text-sky-200">Movies</div>
              <div className="w-8 h-14 bg-cyan-500/50 rounded-t border-t border-cyan-400 flex items-center justify-center text-[8px] font-mono text-cyan-100 font-bold">TV Shows</div>
              <div className="w-8 h-10 bg-indigo-500/40 rounded-t border-t border-indigo-400 flex items-center justify-center text-[8px] font-mono text-indigo-200">Docu</div>
              <div className="w-8 h-12 bg-blue-500/40 rounded-t border-t border-blue-400 flex items-center justify-center text-[8px] font-mono text-blue-200">Global</div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Dimensional Content Filtering</span>
              <span className="text-cyan-300">AWS Infrastructure</span>
            </div>
          </div>
        );

      case 'road-safety-blind-curves':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-amber-950/20 via-slate-900 to-black rounded-xl p-4 overflow-hidden border border-orange-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-orange-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> EMBEDDED SAFETY SYSTEM
              </span>
              <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/30">Arduino Nano</span>
            </div>

            <div className="my-auto flex items-center justify-center gap-6 font-mono text-xs">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-400 font-bold animate-pulse">
                  (( ))
                </div>
                <div className="text-[9px] text-slate-400 mt-1">Ultrasonic Sonar</div>
              </div>
              <div className="text-orange-400 font-bold">➔</div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-orange-950/60 border border-orange-400 flex items-center justify-center text-orange-300 font-mono text-[9px] font-bold">
                  MCU
                </div>
                <div className="text-[9px] text-slate-400 mt-1">Threshold Logic</div>
              </div>
              <div className="text-orange-400 font-bold">➔</div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-red-600/30 border-2 border-red-500 flex items-center justify-center text-red-300 font-bold">
                  LED!
                </div>
                <div className="text-[9px] text-slate-400 mt-1">Audio/Visual Alert</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Proximity Range Detection</span>
              <span className="text-orange-300">Blind Curve Collision Prevention</span>
            </div>
          </div>
        );

      case 'sql-movie-recommendation':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-indigo-950/30 via-slate-900 to-black rounded-xl p-4 overflow-hidden border border-indigo-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-indigo-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> MATRIX FACTORIZATION
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30">SQL + SVD</span>
            </div>

            <div className="my-auto flex items-center justify-center gap-3 font-mono text-xs">
              <div className="px-3 py-2 rounded bg-white/[0.04] border border-white/10 text-center">
                <div className="text-[9px] text-slate-400">User-Item Ratings</div>
                <div className="text-indigo-300 font-bold text-xs mt-0.5">R [m × n]</div>
              </div>
              <span className="text-indigo-400 font-bold">=</span>
              <div className="px-3 py-2 rounded bg-white/[0.04] border border-indigo-500/30 text-center">
                <div className="text-[9px] text-slate-400">Latent Factors</div>
                <div className="text-indigo-200 font-bold text-xs mt-0.5">U · Σ · Vᵀ</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Collaborative Filtering</span>
              <span className="text-indigo-300">Relational SQL Aggregation</span>
            </div>
          </div>
        );

      case 's3-website-hosting':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-blue-950/30 via-slate-900 to-black rounded-xl p-4 overflow-hidden border border-blue-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-blue-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> CLOUD INFRASTRUCTURE
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30">Amazon S3</span>
            </div>

            <div className="my-auto flex items-center justify-center gap-3 font-mono text-xs">
              <div className="px-3 py-2 rounded bg-white/[0.04] border border-white/10 text-center">
                <div className="text-[9px] text-slate-400">Static Build</div>
                <div className="text-blue-300 font-bold text-xs mt-0.5">HTML / CSS / JS</div>
              </div>
              <span className="text-blue-400 font-bold">➔</span>
              <div className="px-3 py-2 rounded bg-white/[0.04] border border-blue-500/30 text-center">
                <div className="text-[9px] text-slate-400">AWS S3 Bucket</div>
                <div className="text-blue-200 font-bold text-xs mt-0.5">Web Endpoint</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Public Policy Configuration</span>
              <span className="text-blue-300">Resilient Object Storage</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-slate-900 to-black rounded-xl p-4 overflow-hidden border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SOFTWARE PROJECT</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Interactive Game</span>
            </div>
            <div className="my-auto flex items-center justify-center font-mono text-xs text-slate-300">
              [ 2D Kinematics · Frame Loop · Physics ]
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Collision Detection</span>
              <span className="text-white">Python OOP Architecture</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
              <span className={`w-2 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
              Technical Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10">
            <button
              onClick={() => setFilter('focused')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === 'focused'
                  ? isDataMode
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Recommended for Mode
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('data-ai')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === 'data-ai'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Data & AI
            </button>
            <button
              onClick={() => setFilter('core-eng')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === 'core-eng'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Core Engineering
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {displayedProjects.map((project) => {
              const isHighlightFlagship = project.isFlagship;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col justify-between rounded-3xl p-6 glass-card border transition-all duration-300 group ${
                    isHighlightFlagship
                      ? isDataMode
                        ? 'md:col-span-2 border-cyan-500/40 bg-slate-900/40 shadow-[0_0_40px_rgba(56,189,248,0.1)]'
                        : 'md:col-span-2 border-orange-500/40 bg-stone-900/40 shadow-[0_0_40px_rgba(249,115,22,0.1)]'
                      : 'border-white/10 hover:border-white/25'
                  }`}
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        {project.isFlagship && (
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                            isDataMode
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                              : 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                          }`}>
                            <Sparkles className="w-3 h-3" />
                            Flagship Engineering Project
                          </span>
                        )}
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                          {project.statusBadge}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                        {project.category.split('|')[0].trim()}
                      </span>
                    </div>

                    {/* Creative Schematic / Dashboard Graphic */}
                    <div className="mb-5">
                      <ProjectVisual project={project} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-slate-100 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-400">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors ${
                        isDataMode
                          ? 'text-cyan-400 hover:text-cyan-300'
                          : 'text-orange-400 hover:text-orange-300'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details & Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                          title="View source on GitHub"
                          aria-label={`${project.shortTitle} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Deep Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
