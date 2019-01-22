/**
 * @overview Define the typography styles.
 */

import Typography from 'typography';

const typography = new Typography({
  baseFontSize: 16,
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'serif'],
  headerGray: 12,
  bodyGray: 12,
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '500', '600', '700'],
    },
    {
      name: 'Montserrat',
      styles: ['400', '500', '600', '700'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
