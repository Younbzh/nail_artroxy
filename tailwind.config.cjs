/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Direction « Blanc & Rose poudré »
        paper: '#FFFFFF',
        chalk: '#FAF8F8', // fond alterné, très légèrement rosé
        ink: {
          DEFAULT: '#141414',
          soft: '#4A4646', // texte courant
          mut: '#7A7474', // légendes, mentions
        },
        blush: {
          DEFAULT: '#F4A8B4', // aplats : boutons, tuiles
          ink: '#A8505F', // accent lisible sur blanc (5,3:1)
          pale: '#FDF2F4', // fonds de pastille
        },
        line: '#E9E5E5',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
