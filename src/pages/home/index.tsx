import { Outlet } from 'react-router';
import { Header } from '@/components/molecules/header';
import * as S from './styles';

export const HomePage = () => (
  <S.Wrapper>
    <Header />
    <S.Spacing>
      <Outlet />
    </S.Spacing>
  </S.Wrapper>
);
