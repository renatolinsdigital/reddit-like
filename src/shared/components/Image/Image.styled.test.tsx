import { render, screen } from '@testing-library/react';
import ImageStyled from './Image.styled';

describe('ImageStyled component', () => {
  it('renders with default styles', () => {
    render(<ImageStyled />);

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveStyle({
      display: 'flex'
    });
  });

  it('renders with isVisible set to true', () => {
    render(<ImageStyled isVisible />);

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveStyle({
      display: 'flex'
    });
  });

  it('does not appear with isVisible set to false', () => {
    render(
      <div data-testid="image-styled-container">
        <ImageStyled isVisible={false} />
      </div>
    );
    const imageContainer = screen.getByTestId('image-styled-container');
    expect(imageContainer.firstChild).toHaveStyle({
      display: 'none'
    });
  });
});
