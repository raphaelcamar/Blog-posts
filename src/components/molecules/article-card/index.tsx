import { ArticleTag, TextEllipsis } from '@/components/atoms';
import * as S from './styles';
import { Post } from '@/entities';

type ArticleCardProps = {
  post: Post;
};

export const ArticleCard = ({ post }: ArticleCardProps) => {
  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString('en', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

    return formattedDate;
  };
  return (
    <S.Container>
      <S.backgroundImage url={post.thumbnail_url} />
      <S.Body>
        <S.Informations>
          <S.DateAndAuthor>
            <span>{formatDate(post.updatedAt)}</span>
            <S.Bullet />
            <p>{post.author.name}</p>
          </S.DateAndAuthor>

          <S.TitleAndDescription>
            <S.Title>{post.title}</S.Title>

            <S.Description title={post.content}>
              <TextEllipsis rows={2}>{post.content}</TextEllipsis>
            </S.Description>
          </S.TitleAndDescription>
        </S.Informations>
        <S.Tags>
          {post.categories.map(category => (
            <ArticleTag text={category.name} />
          ))}
        </S.Tags>
      </S.Body>
    </S.Container>
  );
};
