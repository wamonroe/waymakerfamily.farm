const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['index.html', 'src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Belleza', ...defaultTheme.fontFamily.serif],
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
