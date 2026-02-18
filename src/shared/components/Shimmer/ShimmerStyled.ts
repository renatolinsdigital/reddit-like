import isPropValid from '@emotion/is-prop-valid';
import styled, { CSSObject } from 'styled-components';
import { ShimmerStyledProps } from './Shimmer.model';

const ShimmerStyled = styled.div.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<ShimmerStyledProps>(({ theme, width, height }): CSSObject => {
  const { gray2, transparent } = theme.colors;
  return {
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' }
    },
    width,
    height,
    backgroundSize: '100% 100%',
    transform: 'translateX(-100%)',
    animation: 'shimmer 1.1s infinite',
    background: `linear-gradient(to right, ${transparent} 0%, ${gray2} 50%, ${transparent} 50%)`
  };
});

export default ShimmerStyled;
