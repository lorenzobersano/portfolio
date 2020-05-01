module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    },
    linearGradientColors: {
      'tailwind-logo': ['#2ca0af', '#16d8bd'],
      styledcomponents: ['#db7093', '#daa357'],
      netwebapi: ['#7014e8', '#0e5ecf'],
      ui: ['#FF9F2F', '#FF6026'],
      ux: ['#4AC4E2', '#109CBF'],
      solidity: ['#1c1c1c', '#383838', '#333333', '#656565'],
    },
    radialGradientShapes: {
      // defaults to this value
      default: 'ellipse',
    },
    radialGradientSizes: {
      // defaults to this value
      default: '',
    },
    radialGradientPositions: {
      // defaults to these values
      default: 'center',
      bc: 'bottom center',
      t: 'top',
      tr: 'top right',
      r: 'right',
      br: 'bottom right',
      b: 'bottom',
      bl: 'bottom left',
      l: 'left',
      tl: 'top left',
    },
    radialGradientColors: (theme) => ({
      // defaults to {}
      home: [theme('colors.gray.800'), theme('colors.gray.900')],
    }),
    extend: {
      colors: {
        html: {
          bg: '#f16529',
          text: '#ffffff',
        },
        css: { bg: '#34aadc', text: '#ffffff' },
        js: { bg: '#f0da50', text: '#000000' },
        reactjs: { bg: '#282c34', text: '#56d5fa' },
        nextjs: { bg: '#000000', text: '#ffffff' },
        redux: { bg: '#764abc', text: '#ffffff' },
        nodejs: { bg: '#ffffff', text: '#689f63' },
        express: { bg: '#ffffff', text: '#000000' },
      },
    },
  },
  variants: {
    linearGradients: ['responsive', 'hover'],
  },
  plugins: [require('tailwindcss-gradients')],
}
