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
        third: '#FF0D00'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
