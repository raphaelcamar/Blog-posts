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

export const CardList = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
`;
