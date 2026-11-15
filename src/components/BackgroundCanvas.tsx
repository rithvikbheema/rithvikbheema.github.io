import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const BackgroundCanvas: React.FC = () => {
  const { isDataMode } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient radial gradients */}
      <AnimatePresence mode="wait">
        {isDataMode ? (
          <motion.div
            key="data-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Dark Navy / Deep Slate base */}
            <div className="absolute inset-0 bg-[#070A11]" />
            
            {/* Analytical grid */}
            <div className="absolute inset-0 grid-bg-data opacity-60" />

            {/* Glowing Orbs */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[130px]" />
            <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
            <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
            
            {/* Subtle floating data coordinates */}
            <div className="absolute inset-0 opacity-[0.03] select-none font-mono text-xs overflow-hidden leading-relaxed text-cyan-200">
              <div className="p-8 hidden md:block">
                01000100 01000001 01010100 01000001 // SYSTEM.OPTIMIZE // TENSOR.FLOW // LOSS: 0.0024 // EPOCH: 50/50 // SVD.FACTORIZATION // BAYESIAN.SEARCH
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="eng-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Deep Obsidian / Charcoal base */}
            <div className="absolute inset-0 bg-[#08070A]" />
            
            {/* Schematic circuit grid */}
            <div className="absolute inset-0 grid-bg-eng opacity-60" />

            {/* Glowing Hardware Orbs */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[130px]" />
            <div className="absolute top-1/2 -left-40 w-[550px] h-[550px] bg-orange-600/10 rounded-full blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-amber-700/10 rounded-full blur-[150px]" />

            {/* Circuit traces SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-15 stroke-amber-500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M 0 50 L 50 50 L 70 30 L 130 30 L 150 50 L 200 50" fill="none" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="50" cy="50" r="3" fill="#fb923c" />
                  <circle cx="150" cy="50" r="3" fill="#fb923c" />
                  <path d="M 50 150 L 100 150 L 120 170 L 180 170 L 200 150" fill="none" strokeWidth="1" strokeDasharray="2 4" />
                  <circle cx="100" cy="150" r="3" fill="#ea580c" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
