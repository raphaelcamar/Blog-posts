import styled from 'styled-components';

export const InputWrapper = styled.div`
  border-radius: 46px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 4px;

  input {
    all: unset;
  }
`;

export const Action = styled.button`
  all: unset;
`;
