import { BoxProps } from 'src/shared/models';

export interface ShimmerStyledProps {
  width?: number;
  height?: number;
  isCircular?: boolean;
}

export type ShimmerProps = {
  minWidth: number;
  minHeight: number;
  isCircular?: boolean;
} & BoxProps;
