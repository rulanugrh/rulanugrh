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
        padding: '24px'
      },
      colors: {
        primary: '#0B2447',
        secondary: '#DC3535',
        linked: '#0A66C2',
        insta: '#E4405F',
        linux: '#FCC624',
        docker: '#2496ED',
        nest: '#E0234E',
        tailwind: '#06B6D4',
        kube: '#326CE5'
      },
      fontFamily: {
        firaSans: "'Fira Sans', sans-serif",
        firaCode: "'Fira Code', monospace"
      },
      screens: {
        '2xl': '1280px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}