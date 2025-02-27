import { Outlet } from 'react-router';
import { DropdownButton } from '@/components/drop-down-button';
import { Header } from '@/components/header';
import * as S from './styles';
import SortIcon from '@/components/icons/sort-icon';
import { useThemeContext } from '@/providers/theme-provider';
import { ResponsiveToggle } from '@/components/responsive-toggle';

export const HomePage = () => {
  const theme = useThemeContext();

  const renderDesktopSubtitle = () => <S.Subtitle>DWS blog</S.Subtitle>;

  return (
    <S.Wrapper>
      <Header />
      <S.SortOptionsAndSubtitle>
        <ResponsiveToggle maxBreakpoint="md" fallback={renderDesktopSubtitle()}>
          <DropdownButton
            buttonTitle="Category"
            items={['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']}
          />
          <DropdownButton
            buttonTitle="Author"
            items={['Author A', 'Author b', 'Author c', 'Author D', 'Author E', 'Author F']}
          />
        </ResponsiveToggle>
        <S.SortOption>
          <p>Sort By:</p>
          <span>Newest first</span>
          <SortIcon color={theme.palette.accent1.medium} />
        </S.SortOption>
      </S.SortOptionsAndSubtitle>
      <Outlet />
    </S.Wrapper>
  );
};
