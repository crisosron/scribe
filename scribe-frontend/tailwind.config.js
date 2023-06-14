/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inset-left-border': 'inset 2px 0 0 0 #106acb',
      }
    },

    colors: {
      white: {
        100: "#ffffff",
        200: "#e6e6e6",
        250: "#dbdbdb",
        300: "#cccccc",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4c4c4c",
        800: "#333333",
        900: "#191919"
      },
      
      'soft-black': {
        100: '#353839',
        200: '#303233',
        300: '#2a2d2e',
        400: '#252728',
        500: '#202222',
        600: '#151617',
        700: '#151617',
        800: '#101111',
        900: '#0b0b0b'
      },

      'sky-blue': {
        100: '#699fc0',
        200: '#78a9c6',
        300: '#87b2cd',
        400: '#96bcd3',
        500: '#a5c5d9',
        600: '#b4cfe0',
        700: '#c3d9e6',
        800: '#d2e2ec',
        900: '#e1ecf2'
      },

      'bright-blue': {
        100: '#106acb'
      },

      gold: {
        100: '#ffd700'
      },
      
      green: {
        100: '#13ed34'
      }
    },
  },
  plugins: [],
}
