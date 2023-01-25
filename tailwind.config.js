/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      gold:'#d0a94d',
      mainGray:'#303030',
      bgGray:'#252525',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'mainGold': '#d0a94d',
        'dark': 'rgb(23, 26, 30)',
        'cardDark': '#252525',
        'footerColor': '#131212'
    },

    extend: {},
    extend: {
      fontWeight: {
        medium: 1000,
      },
      colors: {
        'mainGold': '#d0a94d',
        'dark': 'rgb(23, 26, 30)',
        'cardDark': '#252525',
        'footerColor': '#131212'
      },
      height: {
        '-100%': '-100%',
        '100%': '100%',
      },
      screens: {
        'xsm': '350px'
      },
      fontSize: {
        '20px': '20px'
      }
    },
  },
  plugins: [],
});
