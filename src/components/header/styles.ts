import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) =>
      `linear-gradient(to right,${theme.palette.neutrals.dark} , ${theme.palette.neutrals.lightest})`};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;

  h1 {
    font: ${({ theme }) => theme.font.h2};
  }

  span {
    font: ${({ theme }) => theme.font.bodySmall};
  }
`;
