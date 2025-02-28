import { Icon } from '../icon';
import * as S from './styles';

export const SearchButton = () => (
  <S.InputWrapper>
    <S.Action />
    <input placeholder="search" />
    <S.Action>
      <Icon icon="close" color="black" />
    </S.Action>
  </S.InputWrapper>
);
