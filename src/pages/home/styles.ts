import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
`;

export const SortOptionsAndSubtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media (min-width: 960px) {
    padding-top: 36px;
  }
`;

export const SortOption = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font: ${({ theme }) => theme.font.bodySmall};
    font-weight: bold;
  }

  span {
    font: ${({ theme }) => theme.font.bodySmall};
    font-weight: lighter;
  }
`;

export const Subtitle = styled.h2`
  font: ${({ theme }) => theme.font.h2};
`;
