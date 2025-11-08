/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Your existing colors are set up correctly with CSS variables.
        "x-100": "var(--x-100)",   // rgba(255, 210, 199, 1)
        "x-1000": "var(--x-1000)", // rgba(51, 24, 17, 1)
        "x-200": "var(--x-200)",   // rgba(255, 187, 171, 1)
        "x-300": "var(--x-300)",   // rgba(255, 164, 143, 1)
        "x-400": "var(--x-400)",   // rgba(255, 142, 115, 1)
        "x-50": "var(--x-50)",     // rgba(255, 228, 221, 1)
        "x-500": "var(--x-500)",   // rgba(255, 119, 87, 1)
        "x-600": "var(--x-600)",   // rgba(212, 99, 73, 1)
        "x-700": "var(--x-700)",   // rgba(170, 79, 58, 1)
        "x-800": "var(--x-800)",   // rgba(128, 60, 44, 1)
        "x-900": "var(--x-900)",   // rgba(85, 40, 29, 1)
      },
      fontFamily: {
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-background": "url('/src/assets/hero-background.jpg')",
      },
    },
  },
  plugins: [],
};
