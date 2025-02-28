import { useEffect } from 'react';
import { ArticleCard } from '@/components/molecules';
import * as S from './styles';
import { ResponsiveToggle } from '@/components/atoms';
import { Filter } from '@/components/organisms';
import { PostService } from '@/services/posts/post-service';

export const BlogListPage = () => {
  const getPosts = async () => {
    const service = new PostService();
    const data = await service.getPosts();
    console.log(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
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
};
