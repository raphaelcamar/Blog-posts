import { Suspense } from 'react';
import { Icons } from './available-icons';

export type AvailableIcons = keyof typeof Icons;

type IconProps = {
  icon: AvailableIcons;
  color: string;
};

export const Icon = ({ icon, color }: IconProps) => {
  const ChoicedIcon = Icons[icon];

  return (
    <Suspense fallback={<></>}>
      <ChoicedIcon color={color} />
    </Suspense>
  );
};
