import ShimmerStyled from './ShimmerStyled';
import { ShimmerProps } from './Shimmer.model';
import { BoxStyled } from 'src/shared/components';

const Shimmer = ({ isCircular = false, minWidth, minHeight }: ShimmerProps) => {
  return (
    <BoxStyled
      overflow="hidden"
      position="relative"
      minWidth={minWidth}
      minHeight={minHeight}
      data-testid="shimmer-box"
      backgroundColorName="gray1"
      borderRadius={isCircular ? '50%' : undefined}>
      <ShimmerStyled
        width={minWidth}
        height={minHeight}
        data-testid="shimmer"
        isCircular={isCircular}
      />
    </BoxStyled>
  );
};

export default Shimmer;
