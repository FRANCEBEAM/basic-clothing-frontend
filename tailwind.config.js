/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': '#F9F9F9',
        'black': '#252422',
        'fadeGray': '#7F8696',
        'fadeFont': '#CBCBCB',
        'pink': '#F9CDCD',
        'bg-white': '#F5F7FB',
        'bg-deepwhite': '#FFFFFF',
        'btn-bg': '#3B38C0',
        'violet': '#423EFF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

