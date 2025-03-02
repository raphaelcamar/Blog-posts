import { BrowserRouter } from 'react-router';
import './global.css';
import { StyledThemeProvider } from './providers/theme-provider';
import { RootRoutes } from './routes';
import { ProfileProvider } from './providers/filter-provider';

export const App = () => (
  <BrowserRouter>
    <StyledThemeProvider>
      <ProfileProvider>
        <RootRoutes />
      </ProfileProvider>
    </StyledThemeProvider>
  </BrowserRouter>
);
