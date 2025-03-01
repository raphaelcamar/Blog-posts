import { CircularLoader, ConditionalSlot, Icon } from '@/components/atoms';
import * as S from './styles';
import { useThemeContext } from '@/providers/theme-provider';
import { Button, FilterList } from '@/components/molecules';
import { Author, Category } from '@/entities';

type FilterProps = {
  authors: Author[];
  categories: Category[];
  loading: boolean;
};

export const Filter = ({ authors, categories, loading }: FilterProps) => {
  const theme = useThemeContext();

  return (
    <S.Container>
      <S.Title>
        <Icon icon="filter" color={theme.palette.neutrals.darkest} />
        <h2>Filters</h2>
      </S.Title>
      <ConditionalSlot renderIf={!loading} fallback={<CircularLoader size={36} />}>
        <FilterList title="Category" items={categories} />
        <FilterList title="Author" items={authors} />
      </ConditionalSlot>
      <Button type="button">Apply filter</Button>
    </S.Container>
  );
};
