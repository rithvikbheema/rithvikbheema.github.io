import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioMode } from '../types';
import { modeData } from '../data/portfolioData';

interface ThemeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
  modeInfo: typeof modeData['data-ai'] | typeof modeData['core-eng'];
  isDataMode: boolean;
  accentColorClass: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'bsr_portfolio_mode_preference';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<PortfolioMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'core-eng' || saved === 'data-ai') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'data-ai'; // Default to Data & AI mode
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignore
    }

    // Set dataset attribute and class on document element for global CSS targeting
    const root = document.documentElement;
    root.setAttribute('data-portfolio-mode', mode);
    
    if (mode === 'data-ai') {
      root.classList.remove('mode-core-eng');
      root.classList.add('mode-data-ai');
    } else {
      root.classList.remove('mode-data-ai');
      root.classList.add('mode-core-eng');
    }
  }, [mode]);

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
  };

  const toggleMode = () => {
    setModeState((prev) => (prev === 'data-ai' ? 'core-eng' : 'data-ai'));
  };

  const modeInfo = modeData[mode];
  const isDataMode = mode === 'data-ai';
  const accentColorClass = isDataMode ? 'text-cyan-400' : 'text-orange-400';

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        modeInfo,
        isDataMode,
        accentColorClass,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
