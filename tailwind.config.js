/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080B10',
          card: '#0D111A',
          cardHover: '#131926',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        data: {
          primary: '#38bdf8',
          secondary: '#3b82f6',
          accent: '#06b6d4',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        eng: {
          primary: '#fb923c',
          secondary: '#ea580c',
          accent: '#f59e0b',
          glow: 'rgba(249, 115, 22, 0.15)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-spin': 'spin 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
