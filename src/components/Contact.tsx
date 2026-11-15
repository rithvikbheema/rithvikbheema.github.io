import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { isDataMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Data Analytics & Business Intelligence',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    // No backend: open the visitor's email app with the message pre-filled.
    const subject = `Portfolio enquiry: ${formData.domain} — ${formData.name}`;
    const body = `${formData.message}\n\n— ${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitStatus('success');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
            <span className={`w-2 h-2 rounded-full ${isDataMode ? 'bg-cyan-400' : 'bg-orange-400'}`} />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I'm open to internships, entry-level opportunities, engineering projects, and collaborations across data analytics, AI/ML, embedded systems, and core engineering.
          </p>
        </div>

        {/* Contact Grid: Direct Info Left, Interactive Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Copy Email (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with One-Click Copy */}
            <div
              className={`p-6 rounded-2xl glass-panel border transition-all ${
                isDataMode
                  ? 'border-cyan-500/20 shadow-[0_0_30px_rgba(56,189,248,0.06)]'
                  : 'border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.06)]'
              }`}
            >
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                <Mail className={`w-4 h-4 ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`} />
                <span>Direct Contact</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                Drop an Email
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Available for internships, technical roles, or engineering collaborations.
              </p>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
                <span className="text-slate-300 truncate select-all flex-1">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    copied
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : isDataMode
                        ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border border-orange-500/30'
                  }`}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Institution Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Sparkles className="w-4 h-4 text-slate-500" />
                <span>Chaitanya Bharathi Institute of Technology (CBIT)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Verified Social Channels
              </span>
              <div className="space-y-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-xs font-mono group"
                >
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <GithubIcon className="w-4 h-4" />
                    <span>github.com/rithvikbheema</span>
                  </div>
                  <span className={`text-[10px] uppercase ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`}>
                    Active ↗
                  </span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-xs font-mono group"
                >
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className={`text-[10px] uppercase ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`}>
                    Active ↗
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10">
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details and this opens your email app with the message ready to send.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-white/30 text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-white/30 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Collaboration Focus / Domain
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-white/30 text-white text-sm outline-none transition-colors"
                  >
                    <option value="Data Analytics & BI">Data Analytics & Business Intelligence</option>
                    <option value="Machine Learning & AI">Artificial Intelligence / Machine Learning</option>
                    <option value="Python Development">Python Software Development</option>
                    <option value="Electrical Engineering">Electrical & Electronics Engineering</option>
                    <option value="Embedded Systems & IoT">Embedded Systems & Hardware Prototyping</option>
                    <option value="General Technical Inquiry">General Career Opportunity / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the opportunity, project requirements, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-white/30 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Form feedback status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Your email app should now be open with this message ready, just press send. If nothing opened, email me directly at {personalInfo.email}.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span>Please ensure all required fields are filled out properly.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg ${
                    isDataMode
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 shadow-cyan-500/20'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 shadow-orange-500/20'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
