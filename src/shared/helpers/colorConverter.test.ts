import { rgbToHex, hexToRgb } from './colorConverter';

describe('rgbToHex', () => {
  it('converts valid RGB to hex', () => {
    const hexColor = rgbToHex('rgb(255, 0, 128)');
    expect(hexColor).toBe('#ff0080');
  });

  it('returns the original input for invalid RGB', () => {
    const invalidRgb = 'invalidRgb';
    const result = rgbToHex(invalidRgb);
    expect(result).toBe(invalidRgb);
  });
});

describe('hexToRgb', () => {
  it('converts valid hex to RGB', () => {
    const rgbColor = hexToRgb('#00ffaa');
    expect(rgbColor).toBe('rgb(0, 255, 170)');
  });

  it('converts valid short hex to RGB', () => {
    const rgbColor = hexToRgb('#123');
    expect(rgbColor).toBe('rgb(17, 34, 51)');
  });

  it('returns null for invalid hex', () => {
    const invalidHex = 'invalidHex';
    const result = hexToRgb(invalidHex);
    expect(result).toBeNull();
  });

  it('returns null for hex with invalid format', () => {
    const invalidHexFormat = '#invalid';
    const result = hexToRgb(invalidHexFormat);
    expect(result).toBeNull();
  });

  it('returns null for empty hex input', () => {
    const emptyHex = '';
    const result = hexToRgb(emptyHex);
    expect(result).toBeNull();
  });
});
