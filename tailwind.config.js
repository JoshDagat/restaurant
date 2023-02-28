const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary_beaver: "#9e7f66",
        primary_cod: "#111111",
        secondary_mirage: "#17192b",
        secondary_ebony: "#242b37",
        secondary_shuttle: "#5c6779"
      },
      fontFamily: {
        league_spartan : ["League Spartan", "sans-serif"]
      },
      backgroundImage: {
        hero_desktop: "url(./assets/hero-deskto.jpg)",
        hero_mobile: "url(./assets/hero-mobile.jpg)"
      }
    },
  },
  plugins: [],
}
