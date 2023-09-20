/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.vue',
    './src/**/*.php',
  ],
  
  theme: {
    
    extend: {
      colors:{
        yellowLogo: '#ffdc00'
      },
     
      fontFamily:{
        fontNavBar: 'Oswald',
        kontakt: 'Roboto Condensed'
      }
    },
  },
  plugins: [],
}

