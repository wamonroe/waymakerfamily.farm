const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Belleza", ...defaultTheme.fontFamily.serif],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
