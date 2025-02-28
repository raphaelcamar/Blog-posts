import { Icon } from '@/components/atoms';
import * as S from './styles';
import { useThemeContext } from '@/providers/theme-provider';
import { Button, FilterList } from '@/components/molecules';

export const Filter = () => {
  const theme = useThemeContext();

  return (
    <S.Container>
      <S.Title>
        <Icon icon="filter" color={theme.palette.neutrals.darkest} />
        <h2>Filters</h2>
      </S.Title>
      <FilterList title="Category" />
      <FilterList title="Author" />
      <Button type="button">Apply filter</Button>
    </S.Container>
  );
};
