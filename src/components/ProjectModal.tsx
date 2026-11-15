import React from 'react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { isDataMode } = useTheme();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel p-6 sm:p-8 border shadow-2xl z-10 ${
            isDataMode
              ? 'border-cyan-500/30 shadow-[0_0_60px_rgba(56,189,248,0.15)]'
              : 'border-orange-500/30 shadow-[0_0_60px_rgba(249,115,22,0.15)]'
          }`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              isDataMode
                ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30'
                : 'text-orange-300 bg-orange-950/40 border-orange-500/30'
            }`}>
              {project.statusBadge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          {/* Title & Tagline */}
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
            {project.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 italic">
            "{project.tagline}"
          </p>

          {/* Detailed Overview */}
          <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              Project Architecture & Overview
            </h3>
            <p>{project.detailedDescription}</p>
          </div>

          {/* System Highlights / Architecture Blocks if any */}
          {project.systemHighlights && project.systemHighlights.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-slate-500" />
                Key System Components
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.systemHighlights.map((sh, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className={`text-xs font-mono font-semibold block mb-1 ${
                      isDataMode ? 'text-cyan-400' : 'text-orange-400'
                    }`}>
                      {sh.title}
                    </span>
                    <span className="text-xs text-slate-300 leading-normal block">
                      {sh.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Deliverables & Highlights */}
          <div className="mt-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-slate-500" />
              Core Highlights & Implementation Focus
            </h3>
            <ul className="space-y-2">
              {project.keyHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                    isDataMode ? 'text-cyan-400' : 'text-orange-400'
                  }`} />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs with verified placeholders */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel border border-white/10 hover:border-white/30 text-white flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel border border-white/10 hover:border-white/30 text-white flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
