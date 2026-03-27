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
        // Dark theme - minimal, clean (Alex style)
        dark: {
          bg: '#0a0a0a',
          card: '#141414',
          border: '#222222',
          text: '#fafafa',
          textMuted: '#888888',
        },
        // Subtle accent - just white/gray
        accent: {
          primary: '#ffffff',
          secondary: '#cccccc',
        },
      },
      fontFamily: {
        // Clean sans-serif - Inter or system fonts
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        // Subtle, minimal - no loud gradients
        'gradient-subtle': 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
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
