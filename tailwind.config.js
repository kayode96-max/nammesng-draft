/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
      },
      colors: {
        primary: '#003366',
        gold: '#CBA135',
        silver: '#C0C0C0'
      },
      backgroundImage: {
        'radial-primary': 'radial-gradient(800px 400px at 90% 10%, rgba(0,51,102,0.25), transparent 80%)',
        'grid': 'linear-gradient(#ffffff 12px, transparent 12px), linear-gradient(90deg, #ffffff 12px, transparent 12px)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.98)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 700ms ease-out both',
        'slide-up': 'slide-up 700ms var(--delay, 0ms) ease-out both',
        shimmer: 'shimmer 2s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'scale-in': 'scale-in 300ms ease-out both',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
        glow: '0 0 0 3px rgba(203,161,53,0.25)',
      },
      borderRadius: {
        xl: '1rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
}
