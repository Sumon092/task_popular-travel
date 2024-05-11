/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#192A3A",
        secondary: "#F1F3F7",
        black: "#0D0D10",
      },
    },
  },
  plugins: [],
};
