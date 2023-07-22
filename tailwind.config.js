/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        primary: '0px 15px 30px -20px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: {
          default: '#7374EC',
          light: '#EDEDF6',
        },
        'high-priority': '#FE6D6E',
        'medium-priority': '#FFA447',
        'low-priority': '#1ECCC3',
      },
    },
  },
  plugins: [],
};
