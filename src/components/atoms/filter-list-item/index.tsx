import { useState } from 'react';
import * as S from './styles';

type FilterListItem = {
  label: string;
};

export const FilterListItem = ({ label }: FilterListItem) => {
  const [selected, setSelected] = useState(false);

  return (
    <S.Container onClick={() => setSelected(!selected)} selected={selected}>
      <span>{label}</span>
    </S.Container>
  );
};
