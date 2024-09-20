/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPrimary: "#eae9e5",
        lightSecondary: "#f5f5f5",
        darkPrimary: "#212529",
        darkSecondary: "#6c757d",
      
      },
    },
  },
  plugins: [],
};
