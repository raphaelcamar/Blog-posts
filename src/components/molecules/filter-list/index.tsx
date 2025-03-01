import { FilterListItem } from '@/components/atoms/filter-list-item';
import * as S from './styles';

type FilterListProps = {
  title: string;
  items?: {
    name: string;
    id: string;
  }[];
};

export const FilterList = ({ title, items }: FilterListProps) => (
  <S.Container>
    <h3>{title}</h3>
    <S.FilterListItems>
      {items.map(item => (
        <FilterListItem key={item.id} label={item.name} id={item.id} />
      ))}
    </S.FilterListItems>
  </S.Container>
);
