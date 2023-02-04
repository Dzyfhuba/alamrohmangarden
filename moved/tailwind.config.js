/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        first: '#274f13',
        'first-darker': '#1d3b0e',
        'first-darkest': '#132709',
        second: '#659003',
        'second-darker': '#4c6c02',
        'second-darkest': '#324802',
        light: '#e8e5b8',
        dark: '#312a1a',
        darker: '#251f13',
        darkest: '#18150d'
      },
      boxShadow:{
        'soft': 'inset 0px -4px 0px 0px rgb(0 0 0 / 30%)',
        'hard': 'inset 0px -4px 0px 0px rgb(0 0 0 / 70%)'
      }
    },
  },
  darkMode: 'class',
  important: true,
  plugins: [],
}
