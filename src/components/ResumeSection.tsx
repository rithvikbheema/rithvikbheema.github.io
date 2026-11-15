import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Download, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const { isDataMode } = useTheme();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        <div
          className={`relative rounded-3xl p-8 sm:p-12 glass-panel border overflow-hidden ${
            isDataMode
              ? 'border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.1)]'
              : 'border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.1)]'
          }`}
        >
          {/* Ambient background glow inside card */}
          <div className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30 ${
            isDataMode ? 'bg-cyan-500' : 'bg-orange-500'
          }`} />

          <div className="relative z-10 max-w-2xl">
            <span className={`text-xs font-mono uppercase tracking-widest block mb-3 font-semibold ${
              isDataMode ? 'text-cyan-400' : 'text-orange-400'
            }`}>
              Curriculum Vitae
            </span>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Interested in my journey?
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore my experience, technical skills, projects, and academic background in detail.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResumeModal}
                className={`px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all flex items-center gap-2 shadow-lg ${
                  isDataMode
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold shadow-cyan-500/20'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold shadow-orange-500/20'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="px-5 py-3 rounded-xl font-medium text-sm tracking-wide glass-panel border border-white/10 hover:border-white/30 text-white hover:bg-white/[0.05] transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 opacity-75" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
