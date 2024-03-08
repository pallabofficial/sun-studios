/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: { 
      screens: {
      'sm': '1px',
      'md': '481px',
      'lg': '769px',
      'xl': '1160px',
    },
    fontFamily: {
      montserrat: ["Montserrat", 'sans-serif'],
    },},
  },
  plugins: [],
}

