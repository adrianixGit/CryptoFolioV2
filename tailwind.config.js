/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#17171A",
        "modal-background": "rgba(97, 88, 128, 0.1)",
        "input-background": "#0C0C0C",
        purple: "#9747FF",
        "dark-purple": "#4521BB",
        green: "#03A571",
        red: "#E15241",
        grey: "rgba(255, 255, 255, 0.26)",
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [require("daisyui")],
};
