import { GiOrange } from 'react-icons/gi';

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
    extend: {
       colors: {
        gray: ['#F8F9FB', ],
        violet: ["#A435F3"],
        orange:["#F3CA8C"]
      },
    },
  },
  plugins: [],
}

