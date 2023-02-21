/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  content: ["node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
