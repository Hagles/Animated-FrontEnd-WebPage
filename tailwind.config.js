/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerPic: "url('../src/LandingPage/Banner/Stock1.jpg')",
      },
    },
  },
  plugins: [],
};
