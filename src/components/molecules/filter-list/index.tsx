import { FilterListItem } from '@/components/atoms/filter-list-item';
import * as S from './styles';

type FilterListProps = {
  title: string;
  items?: {
    name: string;
    id: string;
    onClick?: (id: string) => void;
  }[];
};

export const FilterList = ({ title, items }: FilterListProps) => (
  // Adicionar setState para selecionados. AO clicar no item, ser retornado o ID para o filtro
  // no filtro, separar pelo Título talvez, vamos ver mais a frente

  <S.Container>
    <h3>{title}</h3>
    <S.FilterListItems>
      {items.map(item => (
        <FilterListItem key={item.id} label={item.name} />
      ))}
      {/* <FilterListItem label="Category 2" />
      <FilterListItem label="Category 3" />
      <FilterListItem label="Category 4" />
      <FilterListItem label="Category 5" /> */}
    </S.FilterListItems>
  </S.Container>
);
