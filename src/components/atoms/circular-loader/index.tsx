import { Palette } from '@/providers/theme-provider/styled';
import * as S from './styles';
import { useThemeContext } from '@/providers/theme-provider';

type CircularLoaderProps = {
  color: keyof Palette;
  size: number;
};

const defaultProps: CircularLoaderProps = {
  size: 24,
  color: 'secondary',
};

export const CircularLoader = ({ color, size }: CircularLoaderProps) => {
  const theme = useThemeContext();

  const choicedColor = theme.palette[color].medium;
  return (
    <S.Container>
      <S.RotatingCircle size={size} color={choicedColor} />
    </S.Container>
  );
};

CircularLoader.defaultProps = defaultProps;
