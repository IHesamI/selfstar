/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "590px" },
      lg: { min: "590px" },
      xlg: { max: "1190px" },
    },
    extend: {},
  },
  plugins: [],
};
