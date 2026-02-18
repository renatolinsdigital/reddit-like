import isPropValid from '@emotion/is-prop-valid';
import styled, { CSSObject } from 'styled-components';
import { ButtonStyledProps } from './Button.model';

const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<ButtonStyledProps>(
  ({
    top,
    left,
    right,
    bottom,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 12,
    paddingLeft = 24,
    paddingRight = 24,
    paddingBottom = 12,

    theme,
    minWidth,
    isEnabled,
    minHeight,
    colorName,
    backgroundColorName,
    hoverChildrenSvgColorName,

    isVisible = true,
    borderRadius = 4,
    position = 'static',
    borderWidth = '1px',
    borderStyle = 'none',
    hoverColorName = 'white',
    fontWeightName = 'regular',
    borderColorName = 'transparent',
    disabledBackgroundColorName = 'gray3',
    hoverBackgroundColorName = 'primaryDark',
    hoverChildBorderColorName = 'transparent',
    disabledChildBorderColorName = 'transparent'
  }): CSSObject => {
    const { colors, transitions, fontWeights } = theme;

    const enabledBackgroundColor = backgroundColorName
      ? colors[backgroundColorName as keyof typeof colors]
      : colors.primaryDefault;

    return {
      top,
      left,
      right,
      bottom,
      position,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      minWidth,
      minHeight,
      borderStyle,
      borderWidth,
      borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      transition: transitions.defaultAll,
      borderColor: colors[borderColorName as keyof typeof colors],
      display: isVisible ? 'flex' : 'none',
      fontWeight: fontWeights[fontWeightName],
      cursor: isEnabled ? 'pointer' : 'default',
      color: colorName
        ? colors[colorName as keyof typeof colors]
        : colors.white,
      backgroundColor: isEnabled
        ? enabledBackgroundColor
        : colors[disabledBackgroundColorName as keyof typeof colors],

      ' div': {
        borderColor: isEnabled
          ? undefined
          : colors[disabledChildBorderColorName as keyof typeof colors]
      },

      '&:hover': {
        color: isEnabled
          ? colors[hoverColorName as keyof typeof colors]
          : colors.white,
        backgroundColor: isEnabled
          ? colors[hoverBackgroundColorName as keyof typeof colors]
          : colors[disabledBackgroundColorName as keyof typeof colors],
        ' *': {
          borderColor: isEnabled
            ? colors[hoverChildBorderColorName as keyof typeof colors]
            : colors[disabledChildBorderColorName as keyof typeof colors]
        },
        ' svg, path': {
          fill: hoverChildrenSvgColorName
            ? colors[hoverChildrenSvgColorName as keyof typeof colors]
            : undefined
        }
      }
    };
  }
);

export default ButtonStyled;
