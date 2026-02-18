import useMobileMode from './useMobileMode';
import useWindowSize from './useWindowSize';

const useResponsiveBooleans = (): Record<string, boolean> => {
  const isInMobileMode = useMobileMode();
  const { windowWidth, windowHeight } = useWindowSize();
  const isDesktopSmallScreen =
    !isInMobileMode && ['ss', 'xs', 'sm'].includes(String(windowWidth));
  const isSmaller =
    ['ss', 'xs'].includes(String(windowWidth)) || isDesktopSmallScreen;
  const isDesktopBigScreen = !isInMobileMode && !isDesktopSmallScreen;
  const isSmall = isDesktopSmallScreen || isInMobileMode;
  const isSuperSmall =
    (!isSmaller && windowHeight === 'ss') ||
    (isSmaller && windowWidth === 'ss');

  return {
    isSmall,
    isSmaller,
    isSuperSmall,
    isInMobileMode,
    isDesktopBigScreen,
    isDesktopSmallScreen
  };
};

export default useResponsiveBooleans;
