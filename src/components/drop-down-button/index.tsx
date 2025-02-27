import { useState } from 'react';
import * as S from './styles';
import ArrowDownIcon from '../icons/arrow-down-icon';
import { useThemeContext } from '@/providers/theme-provider';
import { ClickAwayListener } from '../click-away-listener';
import { ConditionalSlot } from '../conditional-slot';
import CloseIcon from '../icons/close-icon';

type DropdownButtonProps = {
  items: string[];
  buttonTitle: string;
};

export const DropdownButton = ({ buttonTitle, items }: DropdownButtonProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const theme = useThemeContext();

  // Consertar lógica
  const selectItem = (item: string) => {
    if (!selected.find(selectedItem => selectedItem === item)) {
      setSelected(oldState => [...oldState, item]);
    }
  };

  const getButtonTitle = () => {
    if (selected.length > 2) {
      return `${selected[0]}, ${selected[1]} and more ${selected.length - 2}`;
    }

    return selected.join(',');
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
              <CloseIcon color={theme.palette.secondary.medium} />
            </S.EmptyButton>
          }
        >
          <ArrowDownIcon color={theme.palette.secondary.medium} />
        </ConditionalSlot>
      </S.ButtonWrapper>
      {open && (
        <S.BodyItemView>
          {items.map(item => (
            <S.ItemVew role="button" onClick={() => selectItem(item)}>
              {item}
            </S.ItemVew>
          ))}
        </S.BodyItemView>
      )}
    </ClickAwayListener>
  );
};
