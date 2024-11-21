/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        primary: "#772AB1",
        secondary: "#ADB2B1",
      },
      fontFamily: {
        mPlus1: ["M PLUS 1", "sans - serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}