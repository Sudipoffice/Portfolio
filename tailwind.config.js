/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
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