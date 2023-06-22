/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      "bg-white": "#F9F8F4",
      "black-text": "#070219",
      "gray-text": "#020101",
      "black-bg": "#0A0D1A",
      "text-footer": "#fdfdfd",
      "dec-text": "#656565",
      "border-color": "#cdd9de",
      error: "#ff5b4a",
      button: "#BABABA",
      nav: "#A9A7B0",
    },
    extend: {
      cursor: {
        point: "url(../assets/images/point.png), default",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin 4s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wave: {
          "0%": { transform: "translate-x-0" },
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
