import isPropValid from '@emotion/is-prop-valid';
import { TextElementProps } from 'src/shared/models';
import styled, { CSSObject } from 'styled-components';

const AnchorStyled = styled.a.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<TextElementProps>(
  ({
    theme,
    hasUnderline,
    isInUpperCase,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 2,
    paddingLeft = 4,
    paddingRight = 4,
    paddingBottom = 2,

    flex = 'none',
    cursor = 'pointer',
    colorName = 'dark',
    isFlexible = false,
    wordWrap = 'normal',
    position = 'static',
    alignItems = 'center',
    fontFamily = 'inherit',
    fontSizeName = 'default',
    lineHeightName = 'small',
    fontWeightName = 'regular',
    textUnderlineOffset = '4px',
    justifyContent = 'flex-start',
    hoverColorName = 'primaryDefault'
  }): CSSObject => {
    const { colors, transitions, fontWeights, fontSizes, lineHeights } = theme;

    return {
      flex,
      position,
      wordWrap,
      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      cursor,
      alignItems,
      fontFamily,
      justifyContent,
      textUnderlineOffset,
      color: colors[colorName as keyof typeof colors],
      transition: transitions.defaultAll,
      display: isFlexible ? 'flex' : 'inline',
      textDecoration: hasUnderline ? 'underline' : 'none',

      fontWeight: fontWeights[fontWeightName],
      lineHeight: lineHeights[lineHeightName],
      fontSize: `${fontSizes[fontSizeName]}rem`,
      textTransform: isInUpperCase ? 'uppercase' : 'none',

      '&:hover': {
        color: colors[hoverColorName as keyof typeof colors]
      }
    };
  }
);

export default AnchorStyled;
