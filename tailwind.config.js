module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    },
    linearGradientColors: {
      'tailwind-logo': ['#2ca0af', '#16d8bd'],
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
        jquery: { bg: '#0868ac', text: '#ffffff' },
        'react.js': { bg: '#282c34', text: '#56d5fa' },
        'next.js': { bg: '#000000', text: '#ffffff' },
        'node.js': { bg: '#ffffff', text: '#689f63' },
        '.netwebapi': { bg: '#623893', text: '#ffffff' },
      },
    },
  },
  variants: {
    linearGradients: ['responsive', 'hover'],
  },
  plugins: [require('tailwindcss-gradients')],
}
