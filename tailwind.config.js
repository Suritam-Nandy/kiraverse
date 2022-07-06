const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgBlack: " #2A2D36",
      bgHome: "#22252C",
      txtGrey: "#686870",
      bgYl: "#FFEABB",
      white: colors.white,
      black: colors.black,
      indigo: colors.indigo,
      rose: colors.rose,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      purple: colors.purple,
      pink: colors.pink,
      amber: colors.amber,
      orange: colors.orange,
      warmGray: colors.warmGray,
      lime: colors.lime,
      trueGray: colors.trueGray,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
};
