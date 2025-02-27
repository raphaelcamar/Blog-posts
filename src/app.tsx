import { BrowserRouter } from 'react-router';
import './global.css';
import { StyledThemeProvider } from './providers/theme-provider';
import { RootRoutes } from './routes';

export const App = () => (
  <BrowserRouter>
    <StyledThemeProvider>
      <RootRoutes />
    </StyledThemeProvider>
  </BrowserRouter>
);
