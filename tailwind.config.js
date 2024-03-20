/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        keyboard: 'repeat(auto-fit, minmax(50px, 1fr))'
      }
    }
  },
  plugins: []
};
