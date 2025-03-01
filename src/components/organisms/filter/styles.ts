import styled from 'styled-components';

export const Container = styled.aside`
  border-radius: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.palette.neutrals.light};
  background-color: ${({ theme }) => theme.palette.neutrals.lightest};
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h2 {
    font: ${({ theme }) => theme.font.h3};
  }
`;

export const ListContainer = styled.div`
  h3 {
    font: ${({ theme }) => theme.font.bodyLarge};
    font-weight: bold;
  }
`;

export const FilterListItems = styled.div`
  display: flex;
  flex-direction: column;
`;
