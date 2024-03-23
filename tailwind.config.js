/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: { max: "299px" },
      sm: {max: "599px" },
      lg: { min: "590px" },
      medium: { min: "600px", max: "1000px" },
      xlg: { max: "1190px" },
    },
    extend: {},
  },
  plugins: [],
};
