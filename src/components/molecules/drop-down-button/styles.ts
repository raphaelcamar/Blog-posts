import styled, { css } from 'styled-components';

const OPACITY_FIVE_PERCENT = '0D';

export const ButtonWrapper = styled.button<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.palette.neutrals.lightest};
  color: ${({ theme }) => theme.palette.secondary.medium};
  border-radius: 42px;
  padding: 12px 12px 12px 16px;
  height: 32px;
  transition: all ease 0.5s;
  font-weight: bold;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.palette.secondary.medium};
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.medium};
    background-color: ${({ theme }) => theme.palette.secondary.medium}${OPACITY_FIVE_PERCENT};
  }

  ${({ isOpen, theme }) =>
    isOpen &&
    css`
      color: ${theme.palette.secondary.medium};
      background-color: ${theme.palette.secondary.medium}${OPACITY_FIVE_PERCENT};
    `};
`;

export const BodyItemView = styled.div`
  position: absolute;
  top: 36px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 314px;
  max-height: 204px;
  overflow: auto;
  padding: 16px;
  background: ${({ theme }) => theme.palette.neutrals.lightest};
  -webkit-box-shadow: 0px 0px 16px 5px ${({ theme }) => theme.palette.neutrals.extraLight};
  -moz-box-shadow: 0px 0px 16px 5px ${({ theme }) => theme.palette.neutrals.extraLight};
  box-shadow: 0px 0px 16px 5px ${({ theme }) => theme.palette.neutrals.extraLight};
`;

export const ItemVew = styled.span`
  font-size: 14px;
  height: 28px;
  cursor: pointer;
`;

export const EmptyButton = styled.button`
  all: unset;
`;
