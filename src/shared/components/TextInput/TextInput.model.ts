import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { Colors, FontSizes, FontWeights, LineHeights } from 'src/theme/models';
import { BoxProps, ReactInputEvent } from 'src/shared/models';

// For the React component

type InputEvents = {
  onENTERKeyPress?(): void;
  onKeyUp?(event?: ReactInputEvent): void;
  onChange?(event?: ReactInputEvent): void;
  onKeyDown?(event?: ReactInputEvent): void;
  onKeyPress?(event?: ReactInputEvent): void;
};

type CustomInputProps = {
  name?: string;
  flex?: number;
  value?: string;
  maxLength?: number;
  textColor?: string;
  isReadOnly?: boolean;
  leftIcon?: ReactNode;
  placeHolder?: string;
  isDisabled?: boolean;
  rightIcon?: ReactNode;
  hasFocusOutline?: boolean;
  placeHolderColor?: string;
  textColorName?: keyof Colors;
  fontSizeName?: keyof FontSizes;
  fontWeightName?: keyof FontWeights;
  lineHeightName?: keyof LineHeights;
  placeHolderColorName?: keyof Colors;
};

export type TextInputProps = Omit<BoxProps, 'theme'> &
  InputEvents &
  CustomInputProps;

// For Styled components

export interface CommonStyledProps {
  theme: DefaultTheme;
  flex?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  textColorName?: keyof Colors;
  placeHolderColorName?: keyof Colors;
}

export type TextInputContainerStyledProps = CommonStyledProps & {
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
};

export type TextInputStyledProps = CommonStyledProps &
  BoxProps & {
    hasFocusOutline?: boolean;
    placeHolderColor?: string;
    isLeftIconRendered?: boolean;
    isRightIconRendered?: boolean;
    fontSizeName?: keyof FontSizes;
    lineHeightName?: keyof LineHeights;
    fontWeightName?: keyof FontWeights;
  };
