import { ThemeProvider, ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { theme } from './theme';

export const StyledThemeProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export const useThemeContext = () => useContext(ThemeContext);
