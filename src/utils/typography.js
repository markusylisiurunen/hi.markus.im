/**
 * @overview Define the typography styles.
 */

import Typography from 'typography';

const typography = new Typography({
  baseFontSize: 15,
  headerFontFamily: ['Noto Sans', 'sans-serif'],
  bodyFontFamily: ['Noto Serif', 'serif'],
  headerGray: 12,
  bodyGray: 12,
  googleFonts: [
    {
      name: 'Noto Sans',
      styles: ['400', '700'],
    },
    {
      name: 'Noto Serif',
      styles: ['400', '700'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
