import { ArticleTag, TextEllipsis } from '@/components/atoms';
import * as S from './styles';

export const ArticleCard = () => (
  <S.Container>
    <S.backgroundImage url="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
    <S.Body>
      <S.Informations>
        <S.DateAndAuthor>
          <data>Jan 20, 2024</data>
          <S.Bullet />
          <p>Author lastname</p>
        </S.DateAndAuthor>

        <S.TitleAndDescription>
          <S.Title>This is the title of the article with two lines</S.Title>

          <S.Description>
            <TextEllipsis rows={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem nesciunt quibusdam
              pariatur porro eos reprehenderit fugit accusamus, error, ullam alias vero rerum, obcaecati quidem.
              Blanditiis doloremque atque animi numquam.
            </TextEllipsis>
          </S.Description>
        </S.TitleAndDescription>
      </S.Informations>
      <S.Tags>
        <ArticleTag text="Category 1" />
        <ArticleTag text="Category 2" />
      </S.Tags>
    </S.Body>
  </S.Container>
);
