import { fireEvent, render, screen } from '@testing-library/react';
import { BlogListPage } from '.';
import { StyledThemeProvider } from '@/providers/theme-provider';
import '@testing-library/jest-dom';

describe('Unit tests - Blog list component', () => {
  test('Should switch the title of the button if clicked', () => {
    render(
      <StyledThemeProvider>
        <BlogListPage />
      </StyledThemeProvider>,
    );

    const button = screen.getByTestId('sort-button');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Oldest first');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Newest First');
  });
});
