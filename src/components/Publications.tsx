import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { publicationsData } from '../data/portfolioData';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export const Publications: React.FC = () => {
  const { isDataMode } = useTheme();
  const accentText = isDataMode ? 'text-cyan-400' : 'text-orange-400';

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
              <span className={`w-2 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
              Published Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Research & Publications
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Published research connected to my machine learning work on green hydrogen systems.
          </p>
        </div>

        <div className="space-y-6">
          {publicationsData.map((pub) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-3xl glass-card border transition-all ${
                isDataMode ? 'border-cyan-500/20 hover:border-cyan-500/40' : 'border-orange-500/20 hover:border-orange-500/40'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`p-2 rounded-xl ${isDataMode ? 'bg-cyan-500/10' : 'bg-orange-500/10'} ${accentText}`}>
                  <BookOpen className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                  {pub.type}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                  {pub.published}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                {pub.title}
              </h3>

              <p className="mt-3 text-sm text-slate-300">
                {pub.authors.map((author, i) => (
                  <React.Fragment key={author}>
                    {author === pub.highlightAuthor
                      ? <strong className={`font-semibold ${accentText}`}>{author}</strong>
                      : author}
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </p>

              <p className={`mt-1 text-xs font-mono ${accentText}`}>
                {pub.venue} · {pub.details}
              </p>
              <p className="mt-1 text-[11px] font-mono text-slate-500">
                DOI: {pub.doi}
              </p>

              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-4xl">
                {pub.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {pub.keywords.map((kw) => (
                  <span key={kw} className="text-[11px] font-mono px-2 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300">
                    {kw}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-3">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel border border-white/10 hover:border-white/30 text-white flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View on journal site</span>
                </a>
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel border border-white/10 hover:border-white/30 text-white flex items-center gap-2 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Read on ResearchGate</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
