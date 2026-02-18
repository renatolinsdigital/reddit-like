import { useEffect, useState } from 'react';

const useImageLoader = (imageUrl: string | undefined) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | string>('');
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => resolve(image);
      image.onerror = () => reject('Error loading image');
    });
  };

  useEffect(() => {
    const createImage = async () => {
      try {
        if (imageUrl) {
          const image = await loadImage(imageUrl);
          setImage(image);
        }
      } catch (error) {
        setError(String(error));
      } finally {
        setIsLoading(false);
      }
    };

    createImage();
  }, [imageUrl]);

  return {
    error,
    isLoading,
    image
  };
};

export default useImageLoader;
