import { Ellipsis } from './styles';

type TextEllipsisProps = {
  rows?: number;
  title?: string;
  children: React.ReactNode;
};

export const TextEllipsis = ({ children, rows = 1, title }: TextEllipsisProps) => (
  <Ellipsis rows={rows} title={title}>
    {children}
  </Ellipsis>
);
