/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      sans: ["Karla", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        brightYellow: "hsl(71, 73%, 54%)",
        lightGray: "hsl(204, 43%, 93%)",
        grayishBlue: "hsl(218, 22%, 67%)",
      },
      fontSize: {
        base: "16px",
        title: "1.25rem",
      },
      dropShadow: {
        "3xl-faint": "0 30px 30px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
