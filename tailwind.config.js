module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "nav-img": "url('./images/nav.jpg')",
      },
      colors: {
        pink: "#EC4899",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
