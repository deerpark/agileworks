/** @type {import('tailwindcss').Config} */
const gsAwds = require("gs-awds/tailwind");
const getContent = require("gs-awds-utils/content");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [gsAwds],
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    ...getContent(),
  ],
};
