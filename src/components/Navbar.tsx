import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ModeSwitcher } from './ModeSwitcher';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { isDataMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'publications', 'skills', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Research', href: '#publications', id: 'publications' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#080B10]/85 backdrop-blur-md border-b border-white/[0.07] shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Sai Rithvik Bheema - Home"
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm tracking-tighter border transition-all duration-300 ${
                isDataMode
                  ? 'bg-sky-500/10 border-sky-400/30 text-sky-400 group-hover:border-sky-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-orange-500/10 border-orange-400/30 text-orange-400 group-hover:border-orange-400 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]'
              }`}
            >
              {personalInfo.initials}
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-semibold text-sm tracking-tight text-white group-hover:text-slate-200 transition-colors">
                {personalInfo.displayName}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                CBIT EEE '26
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full glass-panel border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? isDataMode
                        ? 'text-cyan-300 bg-cyan-950/40'
                        : 'text-orange-300 bg-orange-950/40'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                        isDataMode ? 'bg-cyan-400' : 'bg-orange-400'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Section: Mode Switcher & Resume CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ModeSwitcher compact />

            <button
              onClick={onOpenResumeModal}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 focus:outline-none ${
                isDataMode
                  ? 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border-sky-500/30 hover:border-sky-400'
                  : 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border-orange-500/30 hover:border-orange-400'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg lg:hidden glass-panel border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/10 bg-[#080B10]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              <div className="pb-3 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Navigation
                </span>
                <span className={`text-xs font-mono ${isDataMode ? 'text-cyan-400' : 'text-orange-400'}`}>
                  {isDataMode ? 'Mode: Data & AI' : 'Mode: Core Engineering'}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase border transition-all ${
                    isDataMode
                      ? 'bg-sky-500/20 text-sky-200 border-sky-500/40'
                      : 'bg-orange-500/20 text-orange-200 border-orange-500/40'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  View & Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
