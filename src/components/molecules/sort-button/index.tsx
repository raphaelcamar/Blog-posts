import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import { Icon } from '@/components/atoms';
import { useThemeContext } from '@/providers/theme-provider';

type SortButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SortButton = ({ ...props }: SortButtonProps) => {
  const theme = useThemeContext();

  return (
    <S.Button {...props}>
      {props.children}
      <Icon icon="sort" color={theme.palette.accent1.medium} />
    </S.Button>
  );
};
