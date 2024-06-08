/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary": "#bf4c0c",
        "secondary": "#3d503a",
        "yellow": "#FFFF00",
        "green": {
          "darkest": "#2e332c"
        },
      },
    },
    screens: {
      mobile: '576px',
      tablet: '992px',
      laptop: '1400px'
    },
    fontFamily: {
      'fira-sans': ['fira-sans'],
      'nuito-sans': ['nuito-sans'],
    },
  },
  plugins: [],
}

