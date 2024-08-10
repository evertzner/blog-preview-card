/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      colors: {
        yellow: '#F4D04E',
        gray: {
          500: '#6B6B6B',
          950: '#111111'
        },
        white: '#ffffff'
      }
    }
  },
  plugins: []
};
