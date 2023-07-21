/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "2md": { max: "886px" },

      "3md": { max: "820px" },

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "475px" },
      xr: {max : "414px" }
    },
    extend: {
      padding: {
        "104px": "104px",
      },
      colors: {
        "#04AC7D": "#04AC7D",
        "cyan": "#EEEAEB"
      },
      fontSize: {
        "2xl": ["28px", "34px"],
        "5xl": ["48px", "59px"],
        "8xl": ["96px", "144px"],
      },
      backgroundImage: {
        "bg-section-four": "url('/assets/image/pic-02.png')",
        "left-bg-section-one": "url('/assets/image/pic-03.png')",
        "left-bg-section-one-mobile": "url('/assets/image/pic-03-mobile.png')",
        "logo-group-mobile-section-one": "url('/assets/image/Group.png')",
        "logo-group-desktop-section-one": "url('/assets/image/Group-main-web.png')",
        "fueling-logo-bg-main": "url('/assets/image/FuelingFutureBig.png')"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
