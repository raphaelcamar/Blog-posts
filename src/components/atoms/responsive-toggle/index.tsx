import { useEffect, useState } from 'react';

const breakpoints = {
  xs: 330,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1450,
  xxl: 1920,
} as const;

type BreakpointKey = keyof typeof breakpoints;

type ResponsiveToggleProps = {
  maxBreakpoint: BreakpointKey;
  fallback: React.ReactNode;
  children?: React.ReactNode;
};

const defaultProps = {
  children: <></>,
};

export const ResponsiveToggle = ({ maxBreakpoint, fallback, children }: ResponsiveToggleProps) => {
  const maxWidth = breakpoints[maxBreakpoint];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= maxWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return <>{isSmallScreen ? fallback : children}</>;
};

ResponsiveToggle.defaultProps = defaultProps;
