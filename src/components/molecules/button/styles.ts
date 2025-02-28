import styled, { css, DefaultTheme } from 'styled-components';

const getOutlinedStyle = (theme: DefaultTheme) => css`
  background: none;
  color: ${theme.palette.secondary.medium};
  border: 1px solid ${theme.palette.secondary.medium};

  svg {
    fill: ${theme.palette.secondary.medium};
  }

  &:hover {
    background: none;
    color: ${theme.palette.secondary.dark};
    border: 1px solid ${theme.palette.secondary.dark};

    svg {
      fill: ${theme.palette.secondary.dark};
    }
  }
`;

const getFilledStyled = (theme: DefaultTheme) => css`
  background: ${theme.palette.secondary.medium};
  color: ${theme.palette.neutrals.lightest};

  &:hover {
    background: ${theme.palette.secondary.dark};
  }
`;

export const Button = styled.button<{ outlined: boolean; hasIcon: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ hasIcon }) => (hasIcon ? ' space-between' : 'center')};
  padding: 12px 16px;
  border-radius: 46px;
  text-align: center;
  border: none;
  cursor: pointer;
  font: ${({ theme }) => theme.font.bodyLarge};
  font-weight: 600;
  transition: all ease 0.2s;

  ${({ outlined, theme }) => (outlined ? getOutlinedStyle(theme) : getFilledStyled(theme))};
`;
