/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': '#F4F4F4',
        'black': '#252422',
        'fadeGray': '#7F8696',
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

