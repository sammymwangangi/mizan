/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false, //
    divideStyle: true,
  },
  prefix: "tw-",
  important: true,
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      letterSpacing: {
        tightest: '-.06em',
      },
      gradientColorStops: {
        'gradient-1-start': '#000000',
        'gradient-1-end': '#9E7AFC',
        'gradient-2-start': '#000000',
        'gradient-2-end': '#9E7AFC',
        'gradient-3-start': '#000000',
        'gradient-3-end': '#9E7AFC',
      },
      keyframes: {
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: 1,
          },
          '33.333%, 83.333%': {
            opacity: 0,
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: 0,
          },
          '25%, 91.667%': {
            opacity: 1,
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 66.667%': {
            opacity: 0,
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: 1,
          },
          '33.333%, 50%': {
            opacity: 0,
          },
          '25%, 58.333%': {
            opacity: 1,
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: 1,
          },
          '66.667%, 83.333%': {
            opacity: 0,
          },
        },
      },
      animation: {
        'gradient-background-1': 'gradient-background-1 1s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 1s infinite',
        'gradient-background-2': 'gradient-background-2 1s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 1s infinite',
        'gradient-background-3': 'gradient-background-3 1s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 1s infinite',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("tailwind-scrollbar"),
    // require("daisyui"),
  ],
};
