import { useState } from 'react';
import * as S from './styles';
import { useThemeContext } from '@/providers/theme-provider';
import { ClickAwayListener, ConditionalSlot, Icon } from '@/components/atoms';

type DropdownButtonProps = {
  items: string[];
  buttonTitle: string;
};

export const DropdownButton = ({ buttonTitle, items }: DropdownButtonProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const theme = useThemeContext();

  const selectItem = (item: string) => {
    if (!selected.find(selectedItem => selectedItem === item)) {
      setSelected(oldState => [...oldState, item]);
    }
  };

  const getButtonTitle = () => {
    if (selected.length > 2) {
      const firstItem = selected[0];
      const secondItem = selected[1];
      const remainingCount = selected.length - 2;

      return `${firstItem}, ${secondItem} and more ${remainingCount}`;
    }

    const formatter = new Intl.ListFormat('en', {
      style: 'long',
      type: 'conjunction',
    });

    return formatter.format(selected);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)} style={{ position: 'relative' }}>
      <S.ButtonWrapper isOpen={open} onClick={() => setOpen(!open)}>
        <p>
          <ConditionalSlot renderIf={selected.length > 0} fallback={buttonTitle}>
            {getButtonTitle()}
          </ConditionalSlot>
        </p>
        <ConditionalSlot
          renderIf={selected.length === 0}
          fallback={
            <S.EmptyButton type="button" onClick={() => setSelected([])}>
              <Icon icon="close" color={theme.palette.secondary.medium} />
            </S.EmptyButton>
          }
        >
          <Icon icon="arrowDown" color={theme.palette.secondary.medium} />
        </ConditionalSlot>
      </S.ButtonWrapper>
      {open && (
        <S.BodyItemView>
          {items.map(item => (
            <S.ItemVew key={item} role="button" onClick={() => selectItem(item)}>
              {item}
            </S.ItemVew>
          ))}
        </S.BodyItemView>
      )}
    </ClickAwayListener>
  );
};
