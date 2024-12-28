/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-login': "url('./src/assets/Frame.png')",
      },
      fontFamily: { 
        'ubuntu': ['"Ubuntu"', 'serif'], 
      }, 
      ontWeight: { 
        'light': 300, 
        'regular': 400, 
        'medium': 500, 
        'bold': 700, 
      },
    },
  },
  plugins: [],
}

