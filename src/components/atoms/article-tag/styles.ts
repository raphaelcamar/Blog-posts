import styled from 'styled-components';

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.palette.neutrals.light};
  border-radius: 42px;
  font: ${({ theme }) => theme.font.caption};
  height: 32px;
  text-align: center;
  padding: 8px 12px;
`;
