/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "custom-24": "24px",
      },
      lineHeight: {
        "custom-65": "65.59px",
      },
    },
  },
  plugins: [],
};

