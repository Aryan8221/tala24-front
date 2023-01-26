/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        medium: 1000,
      },
      colors: {
        'gold':'#d0a94d',
        'mainGray':'#303030',
        'bgGray':'#252525',
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
        'md1': '1000px',
        'xsm': '350px'
      },
      fontSize: {
        '20px': '20px'
      }
    },
  },
  plugins: [],
}
