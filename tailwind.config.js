/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: {
          MarineBlue: "hsl(213, 96%, 18%)",
          PurplishBlue: "hsl(243, 100%, 62%)",
          PastelBlue: "hsl(228, 100%, 84%)",
          LightBlue: "hsl(206, 94%, 87%)",
          StrawberryRed: " hsl(354, 84%, 57%)",
        },
        footer: "hsl(228, 45%, 44%)",
        neutral: {
          CoolGray: "hsl(231, 11%, 63%)",
          LightGray: "hsl(229, 24%, 87%)",
          Magnolia: "hsl(217, 100%, 95%)",
          Alabaster: "hsl(231, 100%, 98%)",
          White: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
