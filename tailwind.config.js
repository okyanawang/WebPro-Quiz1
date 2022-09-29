/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html',
   "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        tourist: '#a5f3fc'
      },
      screens: {
        '2xl' : '1320px'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
