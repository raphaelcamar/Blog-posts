import { Outlet } from 'react-router';
import { useState } from 'react';
import { DropdownButton, SortButton } from '@/components/molecules';
import { Header } from '@/components/header';
import * as S from './styles';
import { ResponsiveToggle } from '@/components/atoms';

export const HomePage = () => {
  const renderDesktopSubtitle = () => <S.Subtitle>DWS blog</S.Subtitle>;

  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  const getSortButtonTitle = () => {
    if (sortBy === 'newest') return 'Newest First';

    return 'Oldest first';
  };

  const updateSortOption = () => {
    if (sortBy === 'newest') {
      setSortBy('oldest');
    } else {
      setSortBy('newest');
    }
  };

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
          <SortButton onClick={() => updateSortOption()}>{getSortButtonTitle()}</SortButton>
        </S.SortOption>
      </S.SortOptionsAndSubtitle>
      <S.Spacing>
        <Outlet />
      </S.Spacing>
    </S.Wrapper>
  );
};
