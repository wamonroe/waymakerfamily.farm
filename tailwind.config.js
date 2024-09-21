import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
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
