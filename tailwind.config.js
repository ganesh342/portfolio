/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        // custom height using the --vh variable
        'screen-dynamic': 'calc(var(--vh, 1vh) * 100)',
      },
      width: {
        'screen-dynamic': 'calc(var(--vw, 1vw) * 100)',
      },
    },
  },
  plugins: [],
}
