import { FilterListItem } from '@/components/atoms/filter-list-item';
import * as S from './styles';

type FilterListProps = {
  title: string;
  items?: {
    label: string;
    onClick: () => void;
  };
};

export const FilterList = ({ title }: FilterListProps) => (
  <S.Container>
    <h3>{title}</h3>
    <S.FilterListItems>
      <FilterListItem label="Category 1" />
      <FilterListItem label="Category 2" />
      <FilterListItem label="Category 3" />
      <FilterListItem label="Category 4" />
      <FilterListItem label="Category 5" />
    </S.FilterListItems>
  </S.Container>
);
