import isPropValid from '@emotion/is-prop-valid';
import styled, { CSSObject } from 'styled-components';
import { StyledImageProps } from './Image.model';

const ImageStyled = styled.img.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<StyledImageProps>(({ isVisible = true }): CSSObject => {
  return {
    display: isVisible ? 'flex' : 'none'
  };
});

export default ImageStyled;
