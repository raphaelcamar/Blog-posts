import * as S from './styles';

type ArticleTagProps = {
  text: string;
};

export const ArticleTag = ({ text }: ArticleTagProps) => <S.Tag>{text}</S.Tag>;
