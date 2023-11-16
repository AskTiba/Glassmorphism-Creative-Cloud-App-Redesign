/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1250': '1250px',
      },
      maxHeight: {
        '860': '860px',
      },
      colors: {
        'theme-bg': 'var(--theme-bg-color)', // Define your custom background color here
      },
      boxShadow: {
        'custom': '-1px 3px 8px -1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}