/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        russo: ['Russo One', 'sans-serif'],
        secular: ['Secular One', 'sans-serif'],
      },
      colors:{
        Default: '#F1F4F6',
      }
    }
  },
  plugins: [],
}