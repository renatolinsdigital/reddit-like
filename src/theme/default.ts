const defaultTheme = {
  /* Company & App colors */

  colors: {
    // Branding
    primaryDark: '#CB3720',
    primaryDefault: '#E3472F',

    // Neutrals
    white: '#fff',
    dark: '#131313',
    gray1: '#fcfcfc',
    gray2: '#ECECEC',
    gray3: '#c3c3c3',
    inherit: 'inherit',
    transparent: 'transparent',

    // Semantic
    info: '#00BBFF',
    alert: '#F4973C',
    success: '#00E2AD',

    ux_ui: '#3498db',
    discussion: '#2ecc71',
    case_study: '#e74c3c',
    product_design: '#f39c12'
  },

  /* Typography */

  fontSizes: {
    smallest: 0.75,
    small: 0.875,
    default: 1,
    large: 1.125,
    extraLarge: 1.375,
    huge: 1.5,
    jumbo: 2,
    biggest: 2.5
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },

  lineHeights: {
    small: 1,
    default: 1.2,
    tall: 1.5,
    taller: 1.8,
    big: 2,
    biggest: 2.4
  },

  /* Timings */

  transitions: {
    defaultAll: 'all .2s ease',
    defaultTime: '.2s'
  }
};

export default defaultTheme;
