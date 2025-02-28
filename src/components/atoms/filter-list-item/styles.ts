import styled, { css } from 'styled-components';

export const Container = styled.button<{ selected?: boolean }>`
  padding: 12px 8px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutrals.extraLight};
  cursor: pointer;
  transition: all ease 0.5s;
  border-radius: 8px;
  text-align: left;
  margin: 4px 0;

  span {
    font: ${({ theme }) => theme.font.bodySmall};

    color: ${({ theme }) => theme.palette.neutrals.darkest};
  }

  &:hover {
    border-bottom-color: ${({ theme }) => theme.palette.neutrals.extraLight};

    span {
      color: ${({ theme }) => theme.palette.accent1.dark};
    }
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background-color: ${theme.palette.accent1.light}0D;
      border: 1px solid ${theme.palette.accent1.dark};

      span {
        color: ${theme.palette.accent1.dark};
      }

      &:hover {
        border: 1px solid ${theme.palette.accent1.dark};
      }
    `}
`;
