/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    backgroundImage: {
      'hero-img': "url('./images/hero.png')",
      'rodo': "url('./images/rodo.png')",
      'logo': "url('./images/logo.png')",
      'gordito': "url('./images/gordito.png')",
      'piramide': "url('./images/piramide.jpg')",
      'tulum': "url('./images/tulum.jpeg')"
    },
    extend: {
      fontSize: {
        'header': '10.052rem',
        'subheader': '6.052rem',
        'storieheader': '3.052rem',
        '15xl': '80.052rem',
      },
      fontFamily: {
        'Abril': ['Abril Fatface'],
        'neue': ['Neue']
      }

    },
    
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
