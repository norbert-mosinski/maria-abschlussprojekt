/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary": "#bf4c0c",
        "secondary": "#3d503a",
        "action": "#FFFF00",
        "green": {
          "darkest": "#2e332c"
        },
      },
      fontSize: {
        "5xl": "2.625rem",
        "3xl": "1.75rem"
      },
      spacing: {
        4: "0.935rem",
        18: "4.375rem",
        22: "5.5rem"
      }
    },
    screens: {
      mobile: '576px',
      tablet: '992px',
      desktop: '1400px'
    },
    fontFamily: {
      'fira-sans': ['fira-sans'],
      'nuito-sans': ['nuito-sans'],
    },
  },
  plugins: [],
}

