import { useEffect, useState } from 'react';
import { DropdownButton, SortButton } from '@/components/molecules';
import * as S from './styles';
import { CircularLoader, ConditionalSlot, ResponsiveToggle } from '@/components/atoms';
import { CardList } from '@/components/organisms';
import { Author, Category } from '@/entities';
import { AuthorService } from '@/services/author/author-service';
import { CategoryService } from '@/services/category/category-service';
import Filter from '@/components/organisms/filter';

export const BlogListPage = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  const renderDesktopSubtitle = () => <S.Subtitle>DWS blog</S.Subtitle>;

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

  const getAuthorsAndCategories = async () => {
    try {
      const authorService = new AuthorService();
      const categoryService = new CategoryService();

      const [authorsData, categoriesData] = await Promise.all([
        authorService.getAuthors(),
        categoryService.getCategories(),
      ]);

      setAuthors(authorsData);
      setCategories(categoriesData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAuthorsAndCategories();
  }, []);

  return (
    <>
      <S.SortOptionsAndSubtitle>
        <ResponsiveToggle maxBreakpoint="md" fallback={renderDesktopSubtitle()}>
          <ConditionalSlot renderIf={!loading} fallback={<CircularLoader />}>
            <DropdownButton buttonTitle="Category" items={categories.map(category => category.name)} />
            <DropdownButton buttonTitle="Author" items={authors.map(author => author.name)} />
          </ConditionalSlot>
        </ResponsiveToggle>
        <S.SortOption>
          <p>Sort By:</p>
          <SortButton data-testid="sort-button" onClick={() => updateSortOption()}>
            {getSortButtonTitle()}
          </SortButton>
        </S.SortOption>
      </S.SortOptionsAndSubtitle>

      <S.Container>
        <ResponsiveToggle
          maxBreakpoint="md"
          fallback={<Filter authors={authors} categories={categories} loading={loading} />}
        />
        <CardList />
      </S.Container>
    </>
  );
};
