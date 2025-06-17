// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Ensures Tailwind scans all your Astro + JS/TS files
  ],
  darkMode: 'class', // Enables class-based dark mode toggle
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
      }
    },
  },
  plugins: [],
}
