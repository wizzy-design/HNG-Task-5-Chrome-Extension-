/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      work: ["Work Sans", "sans-serif"],
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        navShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px", // #59 by Shopify on https://getcssscan.com/css-box-shadow-examples
      },
    },
  },
  plugins: [],
};
