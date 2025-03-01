import { useState } from 'react';
import * as S from './styles';

type FilterListItem = {
  label: string;
  id: string;
};

export const FilterListItem = ({ label, id }: FilterListItem) => {
  const [selected, setSelected] = useState(false);

  return (
    <S.Container data-selected={selected ? id : false} onClick={() => setSelected(!selected)} selected={selected}>
      <span>{label}</span>
    </S.Container>
  );
};
