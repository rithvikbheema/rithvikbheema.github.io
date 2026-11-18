import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, modeData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ExternalLink, Terminal, Cpu, Database, Sparkles, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { mode, isDataMode } = useTheme();
  const currentModeInfo = modeData[mode];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 [@media(max-height:820px)]:pt-24 [@media(max-height:820px)]:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Top Pre-badge & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 [@media(max-height:820px)]:mb-5">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider glass-panel border border-white/10 text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isDataMode ? 'bg-cyan-400' : 'bg-orange-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                isDataMode ? 'bg-cyan-500' : 'bg-orange-500'
              }`} />
            </span>
            <span className="uppercase tracking-widest text-[11px] text-slate-400">Status:</span>
            <span className="text-white font-medium">{personalInfo.status}</span>
          </motion.div>

          {/* Mode Indicator Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${
              isDataMode
                ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                : 'bg-orange-500/10 border-orange-500/30 text-orange-300'
            }`}
          >
            {isDataMode ? <Database className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
            <span>Viewing: <strong>{currentModeInfo.label}</strong> Profile</span>
          </motion.div>
        </div>

        {/* Main Grid: Editorial Typography Left, Technical Monogram / Interactive Identity Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Bio */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Small Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wide uppercase text-slate-400"
            >
              <Terminal className={`w-4 h-4 ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`} />
              <span>{personalInfo.tagline}</span>
            </motion.div>

            {/* Name Display */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.fullName}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-slate-500 font-mono ">
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>

            {/* Dynamic Headline Based on Active Mode */}
            <div className="min-h-[140px] sm:min-h-[120px] [@media(max-height:820px)]:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-3"
                >
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold ${
                    isDataMode ? 'text-gradient-cyan' : 'text-gradient-amber'
                  }`}>
                    "{currentModeInfo.heroHeadline}"
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                    {currentModeInfo.heroDescription}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Universal Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-slate-400 leading-relaxed max-w-2xl border-l-2 border-white/10 pl-4 py-1"
            >
              {personalInfo.mainSupportingText}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className={`px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 shadow-lg ${
                  isDataMode
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold shadow-cyan-500/20 hover:shadow-cyan-500/30'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold shadow-orange-500/20 hover:shadow-orange-500/30'
                }`}
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl font-medium text-sm tracking-wide glass-panel border border-white/10 hover:border-white/30 text-white hover:bg-white/[0.05] transition-all flex items-center gap-2"
              >
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl font-medium text-sm tracking-wide text-slate-300 hover:text-white hover:bg-white/[0.03] transition-colors"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Social Links & Verified handles */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-sm text-slate-400">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Profiles:</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-mono text-xs">github.com/rithvikbheema</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Multidisciplinary Monogram Identity Card */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-sm relative"
            >
              {/* Outer decorative card frame */}
              <div
                className={`relative rounded-3xl p-6 glass-panel border transition-all duration-500 ${
                  isDataMode
                    ? 'border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.12)]'
                    : 'border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.12)]'
                }`}
              >
                {/* Header bar of the monogram badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-slate-400">
                    IDENTITY.SYS // v2.6
                  </span>
                </div>

                {/* Central Monogram Emblem */}
                <div className="my-8 flex flex-col items-center justify-center">
                  <div className="relative">
                    {/* Glowing pulse ring */}
                    <div
                      className={`absolute -inset-4 rounded-full blur-xl opacity-40 transition-colors duration-500 ${
                        isDataMode ? 'bg-cyan-500' : 'bg-orange-500'
                      }`}
                    />
                    
                    {/* Central Monogram Avatar */}
                    <div
                      className={`relative w-28 h-28 rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-500 ${
                        isDataMode
                          ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.3)]'
                          : 'bg-stone-900/90 border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.3)]'
                      }`}
                    >
                      <span className="font-display font-black text-4xl tracking-tighter text-white">
                        {personalInfo.initials}
                      </span>
                      <span className={`text-[10px] font-mono font-semibold tracking-widest mt-0.5 ${
                        isDataMode ? 'text-cyan-400' : 'text-orange-400'
                      }`}>
                        HYDERABAD
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-base font-display font-bold text-white text-center">
                    {personalInfo.fullName}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 text-center mt-1">
                    Chaitanya Bharathi Institute of Tech (CBIT)
                  </p>
                </div>

                {/* Dynamic Telemetry / Engineering Spec Box */}
                <div className="space-y-2.5 bg-black/40 rounded-xl p-3 border border-white/5 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-slate-500" />
                      Discipline
                    </span>
                    <span className="text-white font-medium">B.E. EEE (June '26)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                      Academic CGPA
                    </span>
                    <span className={`font-bold ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`}>
                      7.54 / 10.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Active Domain</span>
                    <span className="text-slate-200">
                      {isDataMode ? 'Analytics & AI/ML' : 'Power & Hardware'}
                    </span>
                  </div>
                </div>

                {/* Interactive Mode Shift hint */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Toggle Identity</span>
                  <span className={`font-semibold ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`}>
                    Use navbar toggle ↗
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Scroll Indicator */}
        <div className="mt-16 flex justify-center [@media(max-height:820px)]:hidden">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className={`w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/40`}
            >
              <div className={`w-1 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
            </motion.div>
          </a>
        </div>

      </div>
    </section>
  );
};
