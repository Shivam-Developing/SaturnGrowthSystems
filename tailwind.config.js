/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "saturn-bg": "#0a0a0c",
        "saturn-card": "#121317",
        "saturn-surface": "#16171d",
        "saturn-green": "#00df61",
        "saturn-green-hover": "#17eb6f",
        "saturn-gold": "#E5A93C",
        "saturn-cream": "#f4f4f0",
        "saturn-muted": "#8d9099",
        "saturn-dim": "#4e5058",
        "saturn-border": "rgba(255, 255, 255, 0.08)",
        "saturn-border-light": "rgba(255, 255, 255, 0.16)",
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        syne: ['"Syne"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 42s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' }
        }
      }
    },
  },
  plugins: [],
};
