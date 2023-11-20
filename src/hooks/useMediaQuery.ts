import { useCallback, useEffect, useState } from 'react';

const breakpoints = {
  xs: 330,
  sm: 450,
  md: 850,
  lg: 1024,
  xl: 1280,
};

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default function useMediaQuery() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');

  useEffect(() => {
    handleGetBreakpoint();

    window.addEventListener('resize', handleGetBreakpoint);
  }, []);

  const handleGetBreakpoint = useCallback(() => {
    const currentBreakpoint = getCurrentBreakpoint(breakpoints);
    setBreakpoint(currentBreakpoint);
  }, [breakpoint]);

  const isXsSmaller = breakpoint
    ? breakpoints[breakpoint] === breakpoints.xs
    : false;
  const isSmSmaller = breakpoint
    ? breakpoints[breakpoint] === breakpoints.sm
    : false;
  const isMdSmaller = breakpoint
    ? breakpoints[breakpoint] === breakpoints.md
    : false;
  const isLgSmaller = breakpoint
    ? breakpoints[breakpoint] === breakpoints.lg
    : false;
  const isXlSmaller = breakpoint
    ? breakpoints[breakpoint] === breakpoints.xl
    : false;

  return {
    breakpoint,
    isXsSmaller,
    isSmSmaller,
    isMdSmaller,
    isLgSmaller,
    isXlSmaller,
  };
}

const getCurrentBreakpoint: (breakpoints: {
  [key: string]: number;
}) => Breakpoint = (breakpoints) => {
  let newBreakpoint;
  let biggestBreakpointValue = 0;

  for (const breakpoint of Object.keys(breakpoints)) {
    const breakpointValue = breakpoints[breakpoint];
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      newBreakpoint = breakpoint;
    }
  }

  if (!newBreakpoint) {
    newBreakpoint = 'xs';
  }

  return newBreakpoint as Breakpoint;
};
