import { useEffect, useState } from 'react';
import * as S from './styles';
import { Post } from '@/entities';
import { CircularLoader, ConditionalSlot } from '@/components/atoms';
import { ArticleCard } from '@/components/molecules';
import { PostService } from '@/services/posts/post-service';

export const CardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    <ConditionalSlot renderIf={!loading && !!posts.length} fallback={renderLoading()}>
      <S.CardList>{posts?.map(post => <ArticleCard key={post.id} post={post} />)}</S.CardList>
    </ConditionalSlot>
  );
};
