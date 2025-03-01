const defaultProps = {
  fallback: <></>,
};

type ConditionalSlotProps = {
  renderIf: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
};

export const ConditionalSlot = ({ renderIf, fallback, children }: ConditionalSlotProps) => (
  <>{renderIf ? children : fallback}</>
);

ConditionalSlot.defaultProps = defaultProps;
