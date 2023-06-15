/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px'
      },
      colors: {
        primary: '#0B2447',
        secondary: '#F9D949'
      },
      fontFamily: {
        firaSans: "'Fira Sans', sans-serif",
        firaCode: "'Fira Code', monospace"
      },
      screens: {
        '2xl': '1440px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}