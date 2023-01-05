/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{html,js}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { max: "1023px" },
      lg: { max: "1279px" },
      xl: { max: "1535px" },
      "2xl": { min: "1536px" },
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      main: "#2B2B2B",
      secondary: "#6D67E4",
      tertiary: "#FF6E31",
      quaternary: "#171010",
      "sub-main": "#B9FFF8",
      "sub-secondary": "#6FEDD6",
      "sub-tertiary": "#FF9551",
      "sub-quaternary": "#FF4A4A",
    },
    fontFamily: {
      monospace: ["Courier New", "monospace"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
