import BadgeProps from './Badge.model';
import { TextStyled } from 'src/shared/components';

function Badge({
  text,
  textColorName = 'white',
  backgroundColorName = 'gray2'
}: BadgeProps) {
  return (
    <TextStyled
      isCapitalized
      paddingLeft={15}
      paddingRight={15}
      borderRadius={20}
      fontWeightName="medium"
      colorName={textColorName}
      hoverColorName={textColorName}
      backgroundColorName={backgroundColorName}
      hoverBackgroundColorName={backgroundColorName}>
      {text}
    </TextStyled>
  );
}

export default Badge;
