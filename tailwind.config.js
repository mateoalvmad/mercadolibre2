/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'section-black': '#333333',
        'categories-black': '#33333399',
        'card-green': '#00a650',
        'section-title': '#666666',
        'section-subtitle': '#3483fa',
        'input-text': '#cecccc',
        'buttons': '#00000040',
        'yellow-color': '#FFF159',
        'section-color': '#EBEBEB',
        'footer-text-black':'#333333',
        'link-prefooter-blue':'#3483FA',
        'background-index':'#666666',
        'category-color':'#EAE6E6',
        'mcgray': '#ebebeb',
      },
      spacing: {
        'psections': '10.25rem',
        'hcombo': '21.25rem',
      },
    },
  },
  plugins: [],
}
