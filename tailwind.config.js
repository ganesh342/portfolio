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
                '100dvh': '100dvh', 
                '150dvh': '150dvh',
                '200dvh': '200dvh',
      },
      width: {
                '100dvw': '100dvw', 
      },
      screens: {
        xs: '370px', // Or whatever size you prefer
      },
    },
  },
  plugins: [],
}
