import { HasDynamicProps } from 'src/shared/models';

export type ImageProps = {
  id?: string;
  fileName?: string;
  className?: string;
  isVisible?: boolean;
  isDomainImage?: boolean;
  alternativeText: string;
  shimmerMinWidth?: number;
  externalImageUrl?: string;
  shimmerMinHeight?: number;
  isShimmerCircular?: boolean;
} & HasDynamicProps;

export type StyledImageProps = {
  isVisible?: boolean;
};

export interface ImageData {
  isLoading: boolean;
  error: Error | string;
  image: HTMLImageElement | null;
}

export default ImageProps;
