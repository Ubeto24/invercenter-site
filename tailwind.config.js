/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: {
          primary: '#0A3D91',
          secondary: '#1E40AF',
          accent: '#2563EB',
        },
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

