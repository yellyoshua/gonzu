const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        darkPrimarySoft: colors.gray["700"],
        darkPrimary: colors.gray["800"],
        darkPrimaryBold: colors.gray["900"],
        darkTextBold: colors.white,
        darkTextParagraph: colors.gray["200"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    invert: true,
    float: false,
  },
};
