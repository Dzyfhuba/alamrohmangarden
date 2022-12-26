/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        first: '#FF8D00',
        second: '#F2FF00',
        third: '#FF0D00',
        light: 'rgb(250 250 250 / 1)',
        dark: 'rgb(15 23 42 / 1)',
        darker: 'rgb(7 15 29 / 1)'
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
