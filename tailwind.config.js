/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackbrown: "#1c1512",
        darkbrownblack: "#3B2C26",
        darkbrown: "#B68973",
        lightbrown: "#EABF9F",
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
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
