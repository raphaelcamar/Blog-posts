import styled from 'styled-components';

export const Container = styled.button`
  all: unset;
  border-radius: 16px;
  width: 314px;
  background-color: ${({ theme }) => theme.palette.neutrals.lightest};
`;

export const backgroundImage = styled.div<{ url: string }>`
  height: 196px;
  border-radius: 16px 16px 0 0;
  background: url(${({ url }) => url}) center/cover no-repeat;
`;

export const Body = styled.div`
  padding: 16px;
  height: 229px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10fr 2fr;
  border-radius: 0 0 16px 16px;
  border: 1px solid ${({ theme }) => theme.palette.neutrals.light};
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DateAndAuthor = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  span,
  p {
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.palette.neutrals.dark};
  }
`;

export const Bullet = styled.circle`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.secondary.medium};
`;

export const Title = styled.h3`
  font: ${({ theme }) => theme.font.h3};
`;

export const Description = styled.p`
  font: ${({ theme }) => theme.font.bodySmall};
`;

export const Tags = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  height: auto;
  width: 180px;
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
