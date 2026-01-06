/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'paper-yellow': '#FFF9C4',
        'sky-blue': '#4FC3F7',
        'warm-orange': '#FFB74D',
        'line-grey': '#d1d1d1',
        'line-red': '#ff6b6b',
        'line-blue': '#4FC3F7',
        'line-pink': '#EF9A9A',
      },
      fontFamily: {
        'comic': ['"Comic Sans MS"', '"Chalkboard SE"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
