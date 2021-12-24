const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.+(js|ts|tsx|mdx|md)'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: {
        dim0: colors.slate[900],
        bright0: colors.slate[100],
        dim: colors.slate[800],
        bright: colors.slate[200],
        dim1: colors.slate[700],
        bright1: colors.slate[300],
        dim2: colors.slate[600],
        bright2: colors.slate[400]
      },
      primary: {
        dim: colors.sky[800],
        bright: colors.sky[200]
      },
      secondary: {
        dim: colors.emerald[600],
        bright: colors.lime[200]
      },
      danger: {
        dim: colors.red[700],
        bright: colors.red[200],
        dim1: colors.red[600],
        bright1: colors.red[300]
      }
    },
    stroke: (theme) => theme('colors'),
    fill: (theme) => theme('colors')
  },
  plugins: [
    plugin(({ addUtilities }) => {
      /** @type {Record<string, React.CSSProperties>} */
      const newUtilities = {
        '.h-header': {
          height: '4.5rem'
        },
        '.h-footer': {
          height: '10rem'
        },
        '.layout-full': {
          minHeight: 'calc(100vh - 14.5rem)',
          width: '100%'
        },
        '.placeholder': {
          color: colors.slate[700]
        },
        '.placeholder-dark': {
          color: colors.slate[300]
        },
        '.placeholder-labeled-not-focus': {
          visibility: 'hidden'
        },
        '.placeholder-focus': {
          visibility: 'visible'
        }
      };

      addUtilities(newUtilities);
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
};
