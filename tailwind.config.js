/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "mobile-screen": "375px",
      },
      colors: {
        // Primary
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",

        // Neutral
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",

        // Footer
        "a-color": "hsl(228, 45%, 44%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
        "press-start-2p": ['"Press Start 2P"'],
      },
      backgroundImage: {
        "image-product-desktop":
          "url('/assets/images/image-product-desktop.jpg')",
        "image-product-mobile":
          "url('/assets/images/image-product-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
