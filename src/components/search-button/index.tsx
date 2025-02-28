import CloseIcon from '../icons/close-icon';
import * as S from './styles';

export const SearchButton = () => (
  <S.InputWrapper>
    <S.Action />
    <input placeholder="search" />
    <S.Action>
      <CloseIcon color="black" />
    </S.Action>
  </S.InputWrapper>
);
