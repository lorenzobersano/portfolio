module.exports = {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
            ],
            whitelist: ['body', '.bg-gradient-r-tailwind-logo'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
    'postcss-preset-env': { stage: 2 },
  },
}
