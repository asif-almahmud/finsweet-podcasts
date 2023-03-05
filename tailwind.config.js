// # If we have to change this "colors" object then we will have to change the "colors" object in the static-data.ts file accordingly and vice-versa
const colors = {
  primary: {
    light: "#F4F2FF",
    DEFAULT: "#503AE7",
    dark: "#3E2DB2",
    contrast: "#ffffff",
  },
  secondary: {
    light: "#AFB0B9",
    DEFAULT: "#14142B",
    dark: "#111127",
    contrast: "#ffffff",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
