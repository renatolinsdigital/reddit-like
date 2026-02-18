/**
 * - The approach to test local images rendering:
 *
 * The Image component dynamically configures local and domain image paths using environment variables. Correct
 * path resolution is not tested here due to its dependency on .env configurations. However it is important
 * to provide accurate local file names because internally the component will use it to resolve the url.
 *
 * - The approach to test external images rendering:
 *
 * The test will pass once the url has the correct format, despite the image existing or not. The objective
 * of this component is to render images to be rendered within React, not to validate external urls.
 * If an external url is not valid, it is possible that the loadImage method of the useImageLoader hook
 * will capture and update its state with error information.
 */

import { vi, expect, describe, it } from 'vitest';
import Image from './Image';
import { defaultTheme } from 'src/theme';
import { ThemeProvider } from 'styled-components';
import { useImageLoader } from 'src/shared/hooks';
import { render, screen, act } from '@testing-library/react';

vi.mock('src/shared/hooks/useImageLoader');

const defaultAltText = 'Alt text for rendered image';
const externalImageUrl = 'https://random-site.xyz/my-image.png';

const localSharedFileName = 'company_logo.svg';
const localSharedImageUrl = `any-shared-path/${localSharedFileName}`;
const localDomainFileName = 'user_photo.png';
const localDomainImageUrl = `any-domain-path/${localDomainFileName}`;

describe('Image component', () => {
  it('renders local shared images', async () => {
    vi.mocked(useImageLoader).mockReturnValue({
      error: '',
      isLoading: false,
      image: { src: localSharedImageUrl } as unknown as HTMLImageElement
    });

    render(
      <ThemeProvider theme={defaultTheme}>
        <Image
          width="50"
          alternativeText={defaultAltText}
          fileName={localSharedFileName}
        />
      </ThemeProvider>
    );

    await act(async () => {
      const imageElement = screen.getByAltText(defaultAltText);
      expect(imageElement).toBeInTheDocument();
      expect((imageElement as HTMLImageElement).src).toContain(
        localSharedFileName
      );
    });
  });

  it('renders local domain images', async () => {
    vi.mocked(useImageLoader).mockReturnValue({
      error: '',
      isLoading: false,
      image: { src: localDomainImageUrl } as unknown as HTMLImageElement
    });

    render(
      <ThemeProvider theme={defaultTheme}>
        <Image
          width="50"
          isDomainImage
          fileName={localDomainFileName}
          alternativeText={defaultAltText}
        />
      </ThemeProvider>
    );

    await act(async () => {
      const imageElement = screen.getByAltText(defaultAltText);
      expect(imageElement).toBeInTheDocument();
      expect((imageElement as HTMLImageElement).src).toContain(
        localDomainFileName
      );
    });
  });

  it('renders external images', async () => {
    vi.mocked(useImageLoader).mockReturnValue({
      error: '',
      isLoading: false,
      image: { src: externalImageUrl } as unknown as HTMLImageElement
    });

    render(
      <ThemeProvider theme={defaultTheme}>
        <Image
          width="50"
          alternativeText={defaultAltText}
          externalImageUrl={externalImageUrl}
        />
      </ThemeProvider>
    );

    await act(async () => {
      const imageElement = screen.getByAltText(defaultAltText);
      expect(imageElement).toBeInTheDocument();
      expect((imageElement as HTMLImageElement).src).toBe(externalImageUrl);
    });
  });

  it('renders the shimmer component while image is being loaded', async () => {
    vi.mocked(useImageLoader).mockReturnValue({
      error: '',
      isLoading: true,
      image: null
    });

    render(
      <ThemeProvider theme={defaultTheme}>
        <Image
          alternativeText={defaultAltText}
          externalImageUrl={externalImageUrl}
        />
      </ThemeProvider>
    );

    await act(async () => {
      expect(screen.queryByAltText(defaultAltText)).not.toBeInTheDocument();
      const shimmerElement = screen.getByTestId('shimmer');
      expect(shimmerElement).toBeInTheDocument();
    });
  });

  it('renders the alternative text if there was an error while loading the image', async () => {
    vi.mocked(useImageLoader).mockReturnValue({
      error: 'Error loading image',
      isLoading: false,
      image: null
    });

    render(
      <ThemeProvider theme={defaultTheme}>
        <Image
          alternativeText={defaultAltText}
          externalImageUrl={externalImageUrl}
        />
      </ThemeProvider>
    );

    await act(async () => {
      expect(screen.queryByAltText(defaultAltText)).not.toBeInTheDocument();
      const textElement = screen.getByText(defaultAltText);
      expect(textElement).toBeInTheDocument();
    });
  });
});
