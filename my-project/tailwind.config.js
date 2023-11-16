/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1250: "1250px",
      },
      maxHeight: {
        860: "860px",
      },
      colors: {
        "theme-bg": "var(--theme-bg-color)", // Define your custom background color here
      },
      boxShadow: {
        'custom': "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)",
        'input': "0 0 0 2px rgb(134 140 160 / 2%);",
        'custom1': '24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65',
      },
    },
  },
  plugins: [],
};
