import { Colors } from 'src/theme/models';

interface BadgeProps {
  text: string;
  textColorName?: keyof Colors;
  backgroundColorName?: keyof Colors;
}

export default BadgeProps;
