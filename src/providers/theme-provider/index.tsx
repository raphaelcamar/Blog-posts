import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const StyledThemeProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
