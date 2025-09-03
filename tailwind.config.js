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
        // Primary accent (blue) and secondary accent (orange)
        accent: '#2563EB',
        accentBlue: '#2563EB',
        accentOrange: '#F59E0B',
        border: '#EAEAEA',
        textMuted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

