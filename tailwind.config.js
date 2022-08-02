/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      '2xl' : '1320px'
    },
  },
  plugins: [],
}
