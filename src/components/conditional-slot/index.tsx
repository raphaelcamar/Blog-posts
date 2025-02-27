import React, { ReactNode } from 'react';

const defaultProps = {
  fallback: <></>,
};

type ConditionalSlotProps = {
  renderIf: boolean;
  fallback: ReactNode;
  children: ReactNode;
};

export const ConditionalSlot = ({ renderIf, fallback, children }: ConditionalSlotProps) => (
  <>{renderIf ? children : fallback}</>
);

ConditionalSlot.defaultProps = defaultProps;
