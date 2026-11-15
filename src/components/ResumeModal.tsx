import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, educationData, experienceData, certificationsData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { isDataMode } = useTheme();
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0B0F19] border border-white/10 shadow-2xl z-10 p-6 sm:p-10 text-slate-100"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <FileText className={`w-5 h-5 ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`} />
              <span className="font-display font-bold text-base sm:text-lg">
                Curriculum Vitae — {personalInfo.fullName}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                  isDataMode
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30'
                    : 'bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                aria-label="Close resume viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Authentic Document Preview */}
          <div className="mt-8 bg-[#090C14] rounded-2xl p-6 sm:p-10 border border-white/10 font-sans shadow-inner space-y-8">
            
            {/* Resume Header */}
            <div className="border-b border-white/10 pb-6 text-center sm:text-left sm:flex sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {personalInfo.fullName}
                </h1>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  B.E. Electrical & Electronics Engineering, CBIT (Graduated 2026)
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {personalInfo.tagline}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>github.com/rithvikbheema</span>
                </div>
              </div>
            </div>

            {/* Resume Section: Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/5 pb-1">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm text-white">
                    {educationData.institution}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {educationData.degree}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 sm:text-right">
                  <span>{educationData.period}</span>
                  <div className="text-cyan-400 font-bold mt-0.5">CGPA: {educationData.cgpa} / 10</div>
                </div>
              </div>
            </div>

            {/* Resume Section: Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/5 pb-1">
                Experience & Leadership
              </h2>

              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <span className="font-bold text-sm text-white">{exp.role}</span>
                      <span className="text-xs text-slate-400 ml-2">— {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    {exp.summary}
                  </p>
                  <ul className="space-y-1 pl-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-slate-500 mt-0.5">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Resume Section: Core Technical Competencies */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/5 pb-1">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block">Data, AI & Programming:</span>
                  <span className="text-slate-200">Python, SQL, C, Pandas, NumPy, Scikit-learn, QuickSight, AWS S3</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Core Engineering & Hardware:</span>
                  <span className="text-slate-200">Circuit Analysis, MATLAB, Simulink, Arduino Nano, Embedded C, Power Systems</span>
                </div>
              </div>
            </div>

            {/* Resume Section: Certifications */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/5 pb-1">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {certificationsData.map((c) => (
                  <li key={c.id} className="flex items-center justify-between">
                    <span><strong>{c.title}</strong> — {c.issuer}</span>
                    <span className="text-slate-500 font-mono text-[11px]">{c.field}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer Close */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold glass-panel border border-white/10 hover:border-white/30 text-white transition-colors"
            >
              Close Resume View
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
