/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    aspectRatio:{
      '5/3' : '5/3',
    },
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        hop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(59,130,246,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(59,130,246,0.6)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideInBottom: 'slideInBottom 1s ease-out forwards',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        hop: 'hop 0.5s ease-in-out infinite',
        shimmer: 'shimmer 3s ease infinite',
        glowPulse: 'glowPulse 2s ease-in-out infinite',
      },
      lineHeight: {
        'extra-tight': '0.73', // Example for tighter line height
      },
      fontFamily: {
        extenda10: ['Extenda10', 'sans-serif'],
        extenda20: ['Extenda20', 'sans-serif'],
        extenda30: ['Extenda30', 'sans-serif'],
        extenda40: ['Extenda40', 'sans-serif'],
        extenda50: ['Extenda50', 'sans-serif'],
        extenda80: ['Extenda80', 'sans-serif'],
        extenda90: ['Extenda90', 'sans-serif'],
        klein: ['klein', 'sans-serif'],
        cfReg: ['cfReg', 'sans-serif'],
        cfMed: ['cfMed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}