import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  border-radius: 46px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.palette.neutrals.extraDark};
  transition: all ease 0.2s;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.palette.accent1.medium};
    color: ${({ theme }) => theme.palette.neutrals.extraLight};

    svg {
      fill: ${({ theme }) => theme.palette.neutrals.extraLight};
    }
  }
`;
