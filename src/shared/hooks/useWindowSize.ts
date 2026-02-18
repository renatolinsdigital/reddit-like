import { useState, useEffect } from 'react';
import { BreakPoints } from 'src/shared/models';

function getBreakPoint(windowMeasure: number): BreakPoints {
  if (windowMeasure) {
    return windowMeasure <= 375
      ? 'ss'
      : windowMeasure < 560
      ? 'xs'
      : windowMeasure < 960
      ? 'sm'
      : windowMeasure < 1280
      ? 'md'
      : windowMeasure < 1920
      ? 'lg'
      : 'xl';
  }
  return false;
}

function useWindowSize() {
  const isWindowClient = typeof window === 'object';

  const [windowWidth, setWindowWidth] = useState(
    isWindowClient ? getBreakPoint(window.innerWidth) : undefined
  );
  const [windowHeight, setWindowHeight] = useState(
    isWindowClient ? getBreakPoint(window.innerHeight) : undefined
  );

  useEffect(() => {
    function setSize() {
      setWindowWidth(getBreakPoint(window.innerWidth));
      setWindowHeight(getBreakPoint(window.innerHeight));
    }

    if (isWindowClient) {
      window.addEventListener('resize', setSize);
      return () => window.removeEventListener('resize', setSize);
    }
  }, [isWindowClient, setWindowWidth, setWindowHeight]);

  return { windowWidth, windowHeight };
}

export default useWindowSize;
