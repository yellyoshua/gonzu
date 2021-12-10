module.exports = {
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    transform: {
      mdx: (content) => mdx.sync(content),
    },
    options: {
      keyframes: true, // Removing unused keyframes
    },
    preserveHtmlElements: false,
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        lato: ["Lato", "sans-serif"],
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
