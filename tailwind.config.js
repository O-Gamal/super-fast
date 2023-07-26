/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        shadow: '0px 15px 30px -20px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          light: 'var(--primary-light-color)',
          lighter: 'var(--primary-lighter-color)',
        },
        'high-priority': {
          DEFAULT: 'var(--high-priority-color)',
          light: 'var(--high-priority-light-color)',
        },
        'medium-priority': {
          DEFAULT: 'var(--medium-priority-color)',
          light: 'var(--medium-priority-light-color)',
        },
        'low-priority': {
          DEFAULT: 'var(--low-priority-color)',
          light: 'var(--low-priority-light-color)',
        },
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
