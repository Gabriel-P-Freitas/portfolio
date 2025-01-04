/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    screens: {

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3.75rem',
        '2xl': '3.75rem',
      },
    extend: {},
  },
  plugins: [],
}
}

// npx tailwindcss -i ./src/assets/style.css -o ./src/assets/output.css --watch 