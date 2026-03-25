/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00D4AA',
          dark: '#00A888',
          light: '#33DDBB',
          glow: 'rgba(0, 212, 170, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 170, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 170, 0.6)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,212,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
