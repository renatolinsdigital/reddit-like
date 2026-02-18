import LinkProps from './Link.model';
import AnchorStyled from '../AnchorStyled/AnchorStyled';

function Link({
  id,
  flex,
  label,
  cursor,
  position,
  wordWrap,
  location,
  children,
  colorName,
  alignItems,

  marginTop,
  marginLeft,
  marginRight,
  marginBottom,

  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,

  isFlexible,
  fontFamily,
  hasUnderline,
  fontSizeName,
  isInUpperCase,
  hoverColorName,
  lineHeightName,
  fontWeightName,
  justifyContent,
  isOpeningInNewTab,
  textUnderlineOffset
}: LinkProps) {
  return (
    <AnchorStyled
      id={id}
      flex={flex}
      cursor={cursor}
      position={position}
      wordWrap={wordWrap}
      href={`${location}`}
      colorName={colorName}
      isFlexible={isFlexible}
      fontFamily={fontFamily}
      alignItems={alignItems}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      hasUnderline={hasUnderline}
      fontSizeName={fontSizeName}
      isInUpperCase={isInUpperCase}
      justifyContent={justifyContent}
      lineHeightName={lineHeightName}
      hoverColorName={hoverColorName}
      fontWeightName={fontWeightName}
      textUnderlineOffset={textUnderlineOffset}
      target={isOpeningInNewTab ? '_blank' : '_self'}>
      <>
        {label}
        {children}
      </>
    </AnchorStyled>
  );
}

export default Link;
