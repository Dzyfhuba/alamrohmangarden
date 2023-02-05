/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      boxShadow: {
        hover: 'inset 0 -4px 0px 0px rgb(0 0 0)',
      }
    },
  },
  plugins: [],
}
