/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#D2E6E4",
        600: "#0B7077"
      },
      secondary: {
        DEFAULT: "#FD661F"
      }
    }
  },
  plugins: [],
}

