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
        'inset-blue-left-border': 'inset 2px 0 0 0 #106acb',
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
        100: '#ffd700',
        200: '#e6c200',
        300: '#ccac00',
        400: '#b39700',
        500: '#998100',
        600: '#806c00',
        700: '#665600',
        800: '#4c4000',
        900: '#332b00'
      },
      
      green: {
        100: '#13ed34',
        200: '#11d52f',
        300: '#0fbe2a',
        400: '#0da624',
        500: '#0b8e1f',
        600: '#0a771a',
        700: '#085f15',
        800: '#064710',
        900: '#042f0a'
      },

      purple: {
        100: '#5d3fd3',
        200: '#5439be',
        300: '#4a32a9',
        400: '#412c94',
        500: '#38267f',
        600: '#2f206a',
        700: '#251954',
        800: '#1c133f',
        900: '130d2a',
      }
    },
  },
  plugins: [],
}
