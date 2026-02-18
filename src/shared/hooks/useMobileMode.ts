import { default as MobileDetect } from 'mobile-detect/mobile-detect';

function useMobileMode() {
  const device = new MobileDetect(window.navigator.userAgent);
  const isInMobileMode = device.mobile() !== null || device.tablet() !== null;

  return isInMobileMode;
}

export default useMobileMode;
