import isPropValid from '@emotion/is-prop-valid';
import TitleProps from './TitleStyled.model';
import styled, { CSSObject } from 'styled-components';

const TitleStyled = styled.h1.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<TitleProps>(
  ({
    theme,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    textAlign,
    flex = 'auto',

    marginTop = 10,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 10,

    paddingTop = 0,
    paddingLeft = 0,
    paddingRight = 0,
    paddingBottom = 0,

    colorName = 'dark',
    isFlexible = false,
    isStretched = true,
    isInUpperCase = true,

    overflowX = 'visible',
    overflowY = 'visible',
    alignItems = 'center',
    fontFamily = 'inherit',
    fontSizeName = 'default',
    justifyContent = 'center',
    fontWeightName = 'medium',
    lineHeightName = 'default'
  }): CSSObject => {
    const { colors, fontSizes, lineHeights, fontWeights } = theme;

    return {
      overflowX,
      overflowY,
      alignItems,
      fontFamily,

      maxHeight,
      minHeight,
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      textAlign,
      justifyContent,
      textWrap: 'nowrap',
      color: colors[colorName as keyof typeof colors],

      flex: isStretched ? flex : 'none',
      width: isStretched ? '100%' : 'auto',
      maxWidth: maxWidth ? maxWidth : '100%',
      display: isFlexible ? 'flex' : 'inline',

      fontWeight: fontWeights[fontWeightName],
      lineHeight: lineHeights[lineHeightName],
      fontSize: `${fontSizes[fontSizeName]}rem`,
      minWidth: isStretched ? 'max-content' : minWidth,
      textTransform: isInUpperCase ? 'uppercase' : 'none'
    };
  }
);

export default TitleStyled;
