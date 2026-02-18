import { ReactNode } from 'react';
import { TextElementProps } from 'src/shared/models';

type LinkProps = Omit<TextElementProps, 'theme'> & {
  label?: string;
  location?: string;
  children?: ReactNode;
  isOpeningInNewTab?: boolean;
};

export default LinkProps;
