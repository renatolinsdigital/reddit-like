import { BoxStyledProps } from 'src/shared/models';
import { FontSizes, LineHeights, FontWeights } from 'src/theme/models';

type TextElementProps = BoxStyledProps & {
  wordWrap?: 'normal' | 'break-word' | 'initial' | 'inherit';

  textAlign?:
    | 'left'
    | 'end'
    | 'start'
    | 'right'
    | 'unset'
    | 'center'
    | 'justify'
    | 'inherit'
    | 'initial'
    | 'match-parent';

  alignItems?: string;
  fontFamily?: string;
  isFlexible?: boolean;
  isStretched?: boolean;
  flex?: number | string;
  hasUnderline?: boolean;
  justifyContent?: string;
  isInUpperCase?: boolean;
  isCapitalized?: boolean;
  fontSizeName?: keyof FontSizes;
  lineHeightName?: keyof LineHeights;
  fontWeightName?: keyof FontWeights;
  textUnderlineOffset?: 'auto' | number | string;
};

export default TextElementProps;
