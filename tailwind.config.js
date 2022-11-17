/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#17171A",
        purple: "#9747FF",
        "dark-purple": "#4521BB",
        green: "#03A571",
        red: "#E15241",
        grey: "#FFFFFF",
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
  plugins: [],
};
