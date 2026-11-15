import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Database, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { toggleMode, isDataMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#06080D]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs border ${
              isDataMode
                ? 'bg-sky-500/10 border-sky-400/30 text-sky-400'
                : 'bg-orange-500/10 border-orange-400/30 text-orange-400'
            }`}
          >
            {personalInfo.initials}
          </div>
          <div>
            <p className="text-sm font-display font-semibold text-white">
              {personalInfo.fullName}
            </p>
            <p className="text-xs font-mono text-slate-500">
              © {new Date().getFullYear()} • CBIT Hyderabad • Electrical & Electronics Engineering
            </p>
          </div>
        </div>

        {/* Quick Mode Switcher in footer */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMode}
            className={`px-3 py-1.5 rounded-full text-xs font-mono border flex items-center gap-1.5 transition-all ${
              isDataMode
                ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:border-cyan-400'
                : 'bg-orange-950/40 border-orange-500/30 text-orange-300 hover:border-orange-400'
            }`}
          >
            {isDataMode ? <Database className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
            <span>Active Mode: <strong>{isDataMode ? 'Data & AI' : 'Core Engineering'}</strong> (Click to Switch)</span>
          </button>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg glass-panel border border-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
