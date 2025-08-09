/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--inter-font), system-ui, sans-serif'
      },
      colors: {
        'blanco-1': '#ffffff',
        'blanco-2': '#fffdfb',
        'gris-1': '#878787',
        'gris-2': '#b1b1b1',
        'gris-3': '#f3e7dd',
        'gris-4': '#f6f6f6',
        'marron-0': '#3d302d',
        'marron-1': '#59423c',
        'marron-2': '#967166',
        'negro-1': '#252525',
        'negro-2': '#3F3F3F',
        'naranja-1': '#fa7c44',
        'naranja-2': '#FEC390',
        'naranja-3': '#ffe2c9',
        'oro': '#ce9848',
        'main-bg': '#FFF6EE'
      }
    }
  },
  plugins: [
  ]
};
