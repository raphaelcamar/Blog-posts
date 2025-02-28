import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  outlined?: boolean;
};

export const Button = ({ children, leftIcon, outlined, ...props }: ButtonProps) => {
  const hasIcon = !!leftIcon;

  return (
    <S.Button outlined={outlined} {...props} hasIcon={hasIcon}>
      {leftIcon && leftIcon}
      {children}
    </S.Button>
  );
};
