import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font: ${({ theme }) => theme.font.bodyLarge};
    font-weight: bold;
  }
`;

export const FilterListItems = styled.div`
  display: flex;
  flex-direction: column;
`;
