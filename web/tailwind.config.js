/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background.png')"
      },
    },
  },
  plugins: [],
}

