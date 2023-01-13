/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackbrown: "#1c1512",
        coba: "#a67f6f",
        darkbrownblack: "#3B2C26",
        coba1: "#9e7764",
        darkbrown: "#B68973",
        lightbrown: "#EABF9F",
        lightbrownmuda: "#f5d6bf",
        whitebrown: "#FAF3E0",
        whitemaster: "#f6f4ef",
      },
      fontFamily: {
        coba: ["Poppins", "system-ui"],
      },
      backgroundImage: {
        Profile: "url('/src/images/Profile_Icon.png')",
      },
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
