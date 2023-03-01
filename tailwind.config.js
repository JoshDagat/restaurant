const { url } = require('inspector');
const plugin = require('tailwindcss/plugin')

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
        hero_desktop: "url(/src/assets/hero-deskto.jpg)",
        hero_mobile: "url(/src/assets/hero-mobile.jpg)",
        feature_one: "url(/src/assets/country-side-mobile.jpg)",
        feature_two: "url(/src/assets/locally-source-mobile.jpg)",
        cta: `url(/src/assets/reservation-bg-mobile.jpg)`
      },
      background: {

      }
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('not-last', '&:not(:last-child)')
    })
  ],
}
