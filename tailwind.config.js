/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme base
        dark: {
          bg: '#080810',
          card: '#0f0f17',
          border: '#1a1a23',
        },
        // Primary accent - Purple
        purple: {
          primary: '#534AB7',
          accent: '#9F77DD',
          light: '#a68fd9',
        },
        // Secondary accent - Teal
        teal: {
          primary: '#1D9E75',
          light: '#2ab885',
        },
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple-teal': 'linear-gradient(90deg, #9F77DD 0%, #1D9E75 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #080810 0%, #0f0f17 100%)',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
