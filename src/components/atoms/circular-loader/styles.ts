import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RotatingCircle = styled.div<{ size: number; color: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 2px solid ${({ color }) => color};
  border-top-color: transparent;
  border-radius: 50%;
  position: absolute;
  animation: ${spin} 0.5s linear infinite;
`;
