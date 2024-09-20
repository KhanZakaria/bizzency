/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1170px",
          "2xl": "1170px",
        },
      },
      fontFamily: {
        ubuntu: ['"Ubuntu"', '"sans-serif"'],
        abril: ['"Abril Fatface"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
