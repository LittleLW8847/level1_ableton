/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      Flex:{
        '1/10': 10%rem,
      }
    },
  },
  plugins: [],
}

