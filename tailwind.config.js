/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0B',
        surface: '#111111',
        accent: '#7C3AED',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

