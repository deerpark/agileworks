/** @type {import('tailwindcss').Config} */
const gsAwds = require("gs-awds/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [gsAwds],
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./node_modules/gs-awds/dist/{button,card,select}.js",
  ],
};
