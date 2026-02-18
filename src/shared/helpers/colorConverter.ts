export const rgbToHex = (rgbColor: string): string => {
  const rgbMatch = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!rgbMatch) {
    // Returns the input if it doesn't match the expected RGB format
    return rgbColor;
  }

  const componentToHex = (component: number): string =>
    ('0' + component.toString(16)).slice(-2);

  const [_, red, green, blue] = rgbMatch;

  return `#${componentToHex(Number(red))}${componentToHex(
    Number(green)
  )}${componentToHex(Number(blue))}`;
};

export const hexToRgb = (hexColor: string): string | null => {
  const hexMatch = hexColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

  if (!hexMatch) {
    const shortHexMatch = hexColor.match(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);
    if (!shortHexMatch) {
      return null;
    }

    const hexToDecimal = (hex: string): number => parseInt(hex, 16);

    const [_, red, green, blue] = shortHexMatch;

    return `rgb(${hexToDecimal(red + red)}, ${hexToDecimal(
      green + green
    )}, ${hexToDecimal(blue + blue)})`;
  }

  const hexToDecimal = (hex: string): number => parseInt(hex, 16);

  const [_, red, green, blue] = hexMatch;

  return `rgb(${hexToDecimal(red)}, ${hexToDecimal(green)}, ${hexToDecimal(
    blue
  )})`;
};
