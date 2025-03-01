import { useEffect, useState } from 'react';
import { ArticleCard } from '@/components/molecules';
import * as S from './styles';
import { CircularLoader, ConditionalSlot, ResponsiveToggle } from '@/components/atoms';
import { Filter } from '@/components/organisms';
import { PostService } from '@/services/posts/post-service';
import { Post } from '@/entities';

export const BlogListPage = () => {
  const [posts, setPosts] = useState<Post[]>(null!);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const service = new PostService();
      const data = await service.getPosts();

      setPosts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderLoading = () => (
    <S.WrapperLoader>
      <CircularLoader size={48} />
    </S.WrapperLoader>
  );

  return (
    <S.Container>
      <ResponsiveToggle maxBreakpoint="md" fallback={<Filter />} />
      <ConditionalSlot renderIf={!loading && !!posts.length} fallback={renderLoading()}>
        <S.CardList>{posts?.map(post => <ArticleCard post={post} />)}</S.CardList>
      </ConditionalSlot>
    </S.Container>
  );
};
