import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    neutrals: {
      lightest: '#F0F0F2',
      extraLight: '#E0E2E6',
      light: '#C0C2C8',
      medium: '#9EA0A5',
      dark: '#7F8185',
      extraDark: '#5E5F63',
      darkest: '#202122',
    },
    primary: {
      light: '#0B0E3A',
      medium: '#060725',
      dark: '#020318',
    },
    secondary: {
      light: '#EF4C84',
      medium: '#D31450',
      dark: '#8C1038',
    },
    accent1: {
      light: '#00BFC1',
      medium: '#009598',
      dark: '#006E6E',
    },
  },
  font: {
    h1: '3.5rem/130% 700',
    h2: '2.25rem/130% 700',
    h3: '1.25rem/130% 700',
    caption: '0.75rem/130% 400',
    bodyLarge: '1rem/150% 400',
    bodySmall: '0.875rem/150% 400',
  },
};
