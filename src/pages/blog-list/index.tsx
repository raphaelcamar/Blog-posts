import { ArticleCard } from '@/components/molecules';
import * as S from './styles';
import { ResponsiveToggle } from '@/components/atoms';
import { Filter } from '@/components/organisms';

export const BlogListPage = () => (
  <S.Container>
    <ResponsiveToggle maxBreakpoint="md" fallback={<Filter />} />
    <S.CardList>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </S.CardList>
  </S.Container>
);
