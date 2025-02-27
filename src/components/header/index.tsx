import { SearchIcon } from '../icons/search-icon';
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
    <SearchIcon color="black" />
  </S.HeaderContainer>
);
