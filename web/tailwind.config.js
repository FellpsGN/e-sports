/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background.png')",
        "game-gradient": "linear-gradient(100deg, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
}

