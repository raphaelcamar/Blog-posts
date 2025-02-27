import 'styled-components';

export type BreakpointTypes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

// export type FunctionBreakpointTypes = {
//   up: (breakpoint: keyof BreakpointTypes) => string;
//   down: (breakpoint: keyof BreakpointTypes) => string;
// };

export type FontProps = {
  h1: string;
  h2: string;
  h3: string;
  bodyLarge: string;
  bodySmall: string;
  caption: string;
};

export type ColorThemeProps = {
  light: string;
  medium: string;
  dark: string;
};

export type NeutralColor = ColorThemeProps & {
  lightest: string;
  extraLight: string;
  extraDark: string;
  darkest: stirng;
};

export type Palette = {
  neutrals: NeutralColor;
  primary: ColorThemeProps;
  secondary: ColorThemeProps;
  accent1: ColorThemeProps;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    font: FontProps;
    // breakpoints: FunctionBreakpointTypes;
  }
}
