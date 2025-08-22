/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
    },

    spacing: {
      '112': '28rem',
      '128': '32rem',
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
  },
  plugins: [],
}

}

