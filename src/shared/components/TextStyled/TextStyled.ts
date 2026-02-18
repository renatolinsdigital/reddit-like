import isPropValid from '@emotion/is-prop-valid';
import styled, { CSSObject } from 'styled-components';
import TextProps from './TextStyled.model';

const TextStyled = styled.span.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<TextProps>(
  ({
    theme,

    top,
    left,
    right,
    bottom,

    maxWidth,
    minWidth,
    maxHeight,
    minHeight,

    overflow,
    overflowX,
    overflowY,

    border,
    borderTop,
    borderLeft,
    borderRight,
    borderBottom,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 8,
    paddingLeft = 12,
    paddingRight = 12,
    paddingBottom = 8,

    textAlign,
    borderRadius = 0,
    isFlexible = false,
    isStretched = false,
    isInUpperCase = false,
    isCapitalized = false,

    flex = 'none',
    cursor = 'inherit',
    colorName = 'dark',
    wordWrap = 'normal',
    position = 'static',
    alignItems = 'center',
    fontFamily = 'inherit',
    hoverColorName = 'dark',
    fontSizeName = 'default',
    lineHeightName = 'small',
    fontWeightName = 'regular',
    justifyContent = 'flex-start',
    borderColorName = 'transparent',
    backgroundColorName = 'transparent',
    hoverBackgroundColorName = 'transparent'
  }): CSSObject => {
    const { colors, transitions, fontSizes, lineHeights, fontWeights } = theme;

    const textTransform = isInUpperCase
      ? 'uppercase'
      : isCapitalized
        ? 'capitalize'
        : 'none';

    return {
      top,
      left,
      right,
      bottom,

      flex,
      cursor,
      wordWrap,

      overflow,
      overflowX,
      overflowY,

      maxHeight,
      minHeight,
      alignItems,
      fontFamily,

      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      border,
      borderTop,
      borderLeft,
      borderRight,
      borderBottom,

      position,
      textAlign,
      borderRadius,
      textTransform,
      justifyContent,

      transition: transitions.defaultAll,
      borderColor: colors[borderColorName as keyof typeof colors],
      width: isStretched ? '100%' : 'auto',
      height: isStretched ? '100%' : 'auto',
      maxWidth: maxWidth ? maxWidth : '100%',
      display: isFlexible ? 'flex' : 'inline',
      fontWeight: fontWeights[fontWeightName],
      lineHeight: lineHeights[lineHeightName],
      fontSize: `${fontSizes[fontSizeName]}rem`,
      backgroundColor: colors[backgroundColorName as keyof typeof colors],
      color: colorName ? colors[colorName as keyof typeof colors] : 'inherit',
      minWidth: isStretched ? 'max-content' : minWidth,

      '&:hover': {
        color: hoverColorName
          ? colors[hoverColorName as keyof typeof colors]
          : 'inherit',
        backgroundColor: hoverBackgroundColorName
          ? colors[hoverBackgroundColorName as keyof typeof colors]
          : colors.transparent
      }
    };
  }
);

export default TextStyled;
