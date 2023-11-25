/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#000",
        tertiary: "#155783",
        fourth: "#3D3D3D",
        fifth: "rgba(212, 40, 40, 0.12)",
        sixth: "#f5f5f5",
        seventh: "#C0C0C0",
        eighth: "#d42828",
        nineth: "#eee",
        tenth: "#4ac24f",
        eleventh: "#333",
        twelveth: "rgba(0, 0, 0, 0.5)",
        thirteenth: "#d9d9d9",
        modal: "rgba(0,0,0, .7)",
        navcolor: "#313131",
        mainColor: "#FF5C17",
        lightGray:"rgba(49, 49, 49, .7)",
        modal2:" rgba(12, 12, 12, .5)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        dd: '1280px',
        mm: "1410px",
      },
    },
  },
  plugins: [],
};
