module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "nav-img": "url('./images/nav.jpg')",
        "contact-img": "url('./images/contact.jpg')",
        crowd: "url('./images/crowd.jpeg')",
      },
      colors: {
        pink: "#EC4899",
        gold: "#fec213",
        pinkGrad: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
