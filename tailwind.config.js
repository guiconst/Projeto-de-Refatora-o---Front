/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1D4FFE',
          dark: '#1a1a1a',
          gray: '#7F7F7F',
          light: '#F9F9F9',
          border: '#D9D9D9',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}