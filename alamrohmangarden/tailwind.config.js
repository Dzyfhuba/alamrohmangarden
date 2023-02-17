/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  important: true,
  theme: {
    extend: {
      boxShadow: {
        hover: 'inset 0 -3px 0 0 rgba(0, 0, 0, 1)'
      },
      colors: {
        base: '#fcfaf7',
        'green-1': '#0b3d2c',
        'green-2': '#2a7d2e'
      }
    },
  },
  plugins: [],
}
