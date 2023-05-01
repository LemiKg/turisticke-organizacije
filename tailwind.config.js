/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#393646",
        secondary: "#4F4557",
        tertiary: "#6D5D6E",
        quaternary: "#F4EEE0",
      },
      gridTemplateColumns: {
        pageLayout: "300px 1fr 100px",
      },
    },
  },
  plugins: [],
};
