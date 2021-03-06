const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./dist/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
