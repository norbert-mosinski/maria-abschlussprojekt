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
      mobile: '393px',
      tablet: '576px',
      laptop: '992px',
      desktop: '1400px'
    },
    fontFamily: {
      'fira-sans': ['Fira Sans'],
      'nuito-sans': ['Nuito Sans'],
    },
  },
  plugins: [],
}

