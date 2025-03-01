import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 12fr;
    align-items: center;
    justify-content: center;
  }
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

    @media (max-width: 960px) {
      display: none;
    }
  }

  span {
    font: ${({ theme }) => theme.font.bodySmall};
    font-weight: lighter;
  }
`;

export const Subtitle = styled.h2`
  font: ${({ theme }) => theme.font.h2};
`;
