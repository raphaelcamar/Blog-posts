import { useState } from 'react';
import * as S from './styles';

type FilterListItem = {
  label: string;
};

export const FilterListItem = ({ label }: FilterListItem) => {
  const [selected, setSelected] = useState();

  return (
    <S.Container>
      <span>{label}</span>
    </S.Container>
  );
};
