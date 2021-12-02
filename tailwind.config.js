const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "nav-img": "url('./images/nav.jpg')",
        "contact-img": "url('./images/contact.jpg')",
        crowd: "url('./images/crowd.jpeg')",
        crowd2: "url('./images/crowd2.jpeg')",
        cabina: "url('./images/cabina-photobooth.jpg')",
        sceno: "url('./images/scenotehnica.jpeg')",
        sonor: "url('./images/sonorizare.jpg')",
        footer: "url('./images/footer.jpg')",
        footer2: "url('./images/footer2.jpg')",
        footer3: "url('./images/footer3.jpg')",
        pinkFloyd: "url('./images/pink-floyd.jpg')",
        sceno1: "url('./images/scenoBG.jpeg')",
        sceno2: "url('./images/scenoBG2.jpeg')",
        sceno3: "url('./images/scenoBG3.jpeg')",
        pbCover: "url('./images/pb-coverBW.jpg')",
        accesorii: "url('./images/Fraps.lnk.jpg')",
      },
      gradients: {},

      colors: {
        pink: "#EC4899",
        gold: "#fec213",
        pinkGrad: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
        dblue: "#2f4a67",
        yellow: {
          ...colors.yellow,
          "bg-gradient-to-b from-black via-gray-900 to-gray-500": "",
        },
        darkGrey: "#303030",
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
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "25v": "25vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
