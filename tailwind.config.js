/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "color-705aaa": "#705AAA",
        "color-cbc8d4": "#CBC8D4",
        "color-d8fcf7": "#D8FCF7",
        "color-01f0d0": "#01F0D0",
        "color-0bd984": "#0BD984",
        "color-072635": "#072635",
        "color-0c3d5d": "#0C3D5D",
        "color-084c77": "#084C77",
        "color-055a92": "#055A92",
        "color-006aac": "#006AAC",
        "color-007bc7": "#007BC7",
        "color-707070": "#707070",
        "color-f6f6f6": "#F6F6F6",
        "color-ededed": "#EDEDED",
        "color-000000": "#000000",
        "color-878787": "#878787",
        "color-ffffff": "#FFFFFF",
        "color-ff6200": "#FF6200",
        "color-E0F3FA": "#E0F3FA",
        "color-FFE6F1": "#FFE6F1",
        "color-FFE6E9": "#FFE6E9",
        "color-f6f7f8": "#F6F7F8",
      },
      extend: {
        fontFamily: {
          manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  plugins: [],
};
