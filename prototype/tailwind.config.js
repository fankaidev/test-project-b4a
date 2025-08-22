/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(249, 129, 110, 1)',
        background: 'rgba(231, 231, 219, 1)',
        cardBg: 'rgba(249, 249, 245, 1)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'mobile': '390px',
      },
    },
  },
  plugins: [],
}