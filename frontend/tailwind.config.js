import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#eae9e5", // Override DaisyUI's primary color
          secondary: "#f5f5f5", // Override DaisyUI's secondary color
          accent: "#212529", // Override DaisyUI's accent color
          neutral: "#6c757d", // Override DaisyUI's neutral color
          "base-100": "#eae9e5", // Override background
        },
      },
    ],
  },
  
};
