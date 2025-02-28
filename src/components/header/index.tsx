import { Icon } from '../icon';
import * as S from './styles';

export const Header = () => (
  <S.HeaderContainer>
    <S.HeaderTitle>
      <h1>dentsu</h1>
      <span>world services</span>
    </S.HeaderTitle>
    {/* <ResponsiveToggle
      maxBreakpoint="md"
      fallback={
        <>
        </>
      }
    >
      <SearchButton /> */}
    {/* </ResponsiveToggle> */}
    <Icon icon="search" color="black" />
  </S.HeaderContainer>
);
