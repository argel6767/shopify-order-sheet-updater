/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2E5698', // Surfie Green
        secondary: '#4D74B0', // Aquamarine
        accent: '#1C3A69', // Muted Gray
        background: '#f0f0f0', // Dark Background
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2E5698',
          secondary: '#4D74B0',
          accent: '#1C3A69',
          neutral: '#1C1C1C',
          'base-100': '#f0f0f0', // For default background in DaisyUI
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

