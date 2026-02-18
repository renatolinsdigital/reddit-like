import { ButtonProps } from './Button.model';
import ButtonStyled from './Button.styled';

function Button({
  id,
  top,
  left,
  right,
  bottom,
  children,
  minWidth,
  minHeight,

  marginTop,
  marginLeft,
  marginRight,
  marginBottom,

  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,

  borderWidth,
  borderStyle,
  borderRadius,
  borderColorName,

  position,
  colorName,
  isVisible,
  fontWeightName,
  hoverColorName,
  isEnabled = true,
  backgroundColorName,
  hoverBackgroundColorName,
  hoverChildBorderColorName,
  hoverChildrenSvgColorName,
  disabledBackgroundColorName,
  disabledChildBorderColorName,

  onClick,
  onMouseDown
}: ButtonProps) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const handleMouseDown = () => {
    if (onMouseDown) onMouseDown();
  };

  return (
    <ButtonStyled
      id={id}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      position={position}
      minWidth={minWidth}
      minHeight={minHeight}
      marginTop={marginTop}
      isEnabled={isEnabled}
      disabled={!isEnabled}
      isVisible={isVisible}
      colorName={colorName}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      marginRight={marginRight}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      marginBottom={marginBottom}
      borderRadius={borderRadius}
      paddingBottom={paddingBottom}
      fontWeightName={fontWeightName}
      hoverColorName={hoverColorName}
      borderColorName={borderColorName}
      backgroundColorName={backgroundColorName}
      hoverBackgroundColorName={hoverBackgroundColorName}
      hoverChildBorderColorName={hoverChildBorderColorName}
      hoverChildrenSvgColorName={hoverChildrenSvgColorName}
      disabledBackgroundColorName={disabledBackgroundColorName}
      disabledChildBorderColorName={disabledChildBorderColorName}
      onClick={handleClick}
      onMouseDown={handleMouseDown}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
