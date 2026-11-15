import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { certificationsData } from '../data/portfolioData';
import { Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Certifications: React.FC = () => {
  const { isDataMode } = useTheme();

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
              <span className={`w-2 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
              Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Certifications & Training
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Specialized programs completed across machine learning, foundational data science, and business analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    isDataMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-orange-500/10 text-orange-400'
                  }`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {cert.field}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                <p className={`text-xs font-mono font-medium mb-3 ${
                  isDataMode ? 'text-cyan-400' : 'text-orange-400'
                }`}>
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{cert.verifiedStatus}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
