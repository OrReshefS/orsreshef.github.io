/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f0f4f0',
          100: '#e1eae1', 
          200: '#c3d5c3',
          300: '#a7c7ad',
          400: '#8fb896',
          500: '#6fa377',
          600: '#4a7c59',
          700: '#3f6b4f',
          800: '#2f5142',
          900: '#1f3c2e',
        },
        earth: {
          50: '#faf8f3',
          100: '#f5f2e8',
          200: '#ebe5d1',
          300: '#ddd4b4',
          400: '#ccc091',
          500: '#b8a670',
          600: '#8b6914',
          700: '#795c11',
          800: '#65490e',
          900: '#533b0c',
        },
        cream: {
          50: '#fefcf7',
          100: '#fdf9f0',
          200: '#faf4e1',
          300: '#f6eec8',
          400: '#f1e5a9',
          500: '#ebd885',
          600: '#e1c55f',
          700: '#d4ae3a',
          800: '#b59230',
          900: '#94762a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
