import isPropValid from '@emotion/is-prop-valid';
import { BoxStyledProps } from 'src/shared/models';
import styled, { CSSObject } from 'styled-components';

const BoxStyled = styled.div.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<BoxStyledProps>(
  ({
    top,
    left,
    right,
    bottom,

    theme,
    cursor,
    flex = 1,
    maxWidth,
    maxHeight,

    overflow,
    overflowX,
    overflowY,
    transform,
    minWidth = 0,

    border,
    borderTop,
    borderLeft,
    borderRight,
    borderBottom,
    borderRadius = 0,
    minHeight = 'auto',

    paddingTop = 0,
    paddingLeft = 0,
    paddingRight = 0,
    paddingBottom = 0,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    borderWidth,
    isVisible = true,
    isStretched = true,
    flexDirection = 'row',
    position = 'relative',

    verticalBreakPoint,
    borderStyle = 'solid',
    alignItems = 'center',
    isFlexWrapping = false,
    justifyContent = 'center',
    borderColorName = 'transparent',
    backgroundColorName = 'transparent'
  }): CSSObject => {
    const { colors } = theme;

    return {
      top,
      left,
      right,
      bottom,

      border,
      borderTop,
      borderLeft,
      borderRight,
      borderBottom,

      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      cursor,
      overflow,
      position,
      minWidth,
      overflowX,
      overflowY,
      minHeight,
      transform,
      alignItems,
      borderStyle,
      borderWidth,
      borderRadius,
      flexDirection,
      justifyContent,

      maxWidth: maxWidth ?? '100%',
      maxHeight: maxHeight ?? 'auto',
      flex: isStretched ? flex : 'none',
      width: isStretched ? '100%' : 'auto',
      display: isVisible ? 'flex' : 'none',
      borderColor: colors[borderColorName as keyof typeof colors],

      height: isStretched ? '100%' : 'auto',
      flexWrap: isFlexWrapping ? 'wrap' : 'nowrap',

      ...(verticalBreakPoint && {
        [`@media(max-width: ${verticalBreakPoint}px)`]: {
          flexDirection: 'column'
        }
      }),

      backgroundColor: colors[backgroundColorName as keyof typeof colors]
    };
  }
);

export default BoxStyled;
