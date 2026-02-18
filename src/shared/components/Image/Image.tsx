/**
 * NOTE: This component resolves local images using Vite's import.meta.glob.
 * Configure the image folder paths in the .env file:
 *   VITE_SHARED_IMAGES_PATH=src/shared/images
 *   VITE_DOMAIN_IMAGES_PATH=src/domain/images
 * For external images, provide the externalImageUrl prop directly.
 */

import ImageStyled from './Image.styled';
import { useEffect, useState } from 'react';
import { useImageLoader } from 'src/shared/hooks';
import { ImageData, ImageProps } from './Image.model';
import { Shimmer, TextStyled } from 'src/shared/components';

// Vite requires a literal pattern in import.meta.glob — this covers all src images.
// The actual folder used at runtime is determined solely by the .env variables.
const allImages = import.meta.glob('/src/**/*.{svg,png,jpg,jpeg,gif,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const sharedImagesPath = import.meta.env.VITE_SHARED_IMAGES_PATH as string;
const domainImagesPath = import.meta.env.VITE_DOMAIN_IMAGES_PATH as string;

const resolveLocalImage = (
  fileName: string,
  isDomainImage: boolean
): string | undefined => {
  const basePath = isDomainImage ? domainImagesPath : sharedImagesPath;
  return allImages[`/${basePath}/${fileName}`];
};

const Image = ({
  id,
  fileName,
  className,
  isVisible,
  alternativeText,
  externalImageUrl,
  shimmerMinWidth = 50,
  shimmerMinHeight = 50,
  isDomainImage = false,
  isShimmerCircular = false,
  ...rest
}: ImageProps) => {
  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  useEffect(() => {
    const resolveImagePath = async () => {
      try {
        let imagePath = '';
        if (externalImageUrl) {
          imagePath = externalImageUrl;
        } else {
          if (!fileName) throw new Error('Image file name is required');
          const resolved = resolveLocalImage(fileName, isDomainImage);
          if (!resolved) throw new Error(`Image not found: ${fileName}`);
          imagePath = resolved;
        }
        setImagePath(imagePath);
      } catch (error) {
        console.error(error);
      }
    };

    resolveImagePath();
  }, [fileName, isDomainImage, externalImageUrl]);

  const imageData: ImageData = useImageLoader(imagePath);

  const { isLoading, image, error } = imageData;

  if (isLoading && !error) {
    return (
      <Shimmer
        minWidth={shimmerMinWidth}
        minHeight={shimmerMinHeight}
        isCircular={isShimmerCircular}
      />
    );
  }

  if (image) {
    return (
      <ImageStyled
        id={id}
        {...rest}
        src={image.src}
        alt={alternativeText}
        isVisible={isVisible}
        className={className}
      />
    );
  }

  return <TextStyled>{alternativeText}</TextStyled>;
};

export default Image;
