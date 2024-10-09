/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
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
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

