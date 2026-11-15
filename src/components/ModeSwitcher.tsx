import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Database, Cpu, Sparkles } from 'lucide-react';

interface ModeSwitcherProps {
  compact?: boolean;
}

export const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ compact = false }) => {
  const { setMode, isDataMode } = useTheme();

  return (
    <div
      className={`relative inline-flex items-center p-1 rounded-full glass-panel border transition-all duration-300 ${
        isDataMode
          ? 'border-cyan-500/30 shadow-[0_0_20px_rgba(56,189,248,0.15)]'
          : 'border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.15)]'
      }`}
      role="radiogroup"
      aria-label="Select Professional Identity Mode"
    >
      {/* Mode A: Data & AI */}
      <button
        onClick={() => setMode('data-ai')}
        className={`relative z-10 flex items-center gap-2 rounded-full font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
          compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-xs md:text-sm'
        } ${
          isDataMode ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
        role="radio"
        aria-checked={isDataMode}
      >
        <Database className={`w-3.5 h-3.5 transition-transform duration-300 ${isDataMode ? 'text-cyan-400 scale-110' : 'text-slate-400'}`} />
        <span>Data & AI</span>
        {isDataMode && (
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-0.5" />
        )}
      </button>

      {/* Mode B: Core Engineering */}
      <button
        onClick={() => setMode('core-eng')}
        className={`relative z-10 flex items-center gap-2 rounded-full font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
          compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-xs md:text-sm'
        } ${
          !isDataMode ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
        role="radio"
        aria-checked={!isDataMode}
      >
        <Cpu className={`w-3.5 h-3.5 transition-transform duration-300 ${!isDataMode ? 'text-orange-400 scale-110' : 'text-slate-400'}`} />
        <span>Core Eng</span>
        {!isDataMode && (
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse ml-0.5" />
        )}
      </button>

      {/* Sliding Active Pill */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`absolute top-1 bottom-1 rounded-full ${
          isDataMode
            ? 'left-1 w-[calc(50%-4px)] bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-400/40 shadow-inner'
            : 'left-[calc(50%)] w-[calc(50%-4px)] bg-gradient-to-r from-orange-600/30 to-amber-600/30 border border-orange-400/40 shadow-inner'
        }`}
      />
    </div>
  );
};

export const ModeBanner: React.FC = () => {
  const { modeInfo, isDataMode } = useTheme();

  return (
    <motion.div
      key={modeInfo.modeKey}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide border ${
        isDataMode
          ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300'
          : 'bg-orange-950/40 border-orange-500/30 text-orange-300'
      }`}
    >
      <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '8s' }} />
      <span>Active Focus: <strong>{modeInfo.label}</strong> — {modeInfo.roleTitle.split('|')[0].trim()}</span>
    </motion.div>
  );
};
