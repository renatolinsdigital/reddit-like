import { defaultTheme } from 'src/theme';
import { IconProps } from 'src/shared/models';
import { SvgContainer } from 'src/shared/components';

function ChevronIcon({
  id,
  title,
  width = 18,
  height = 27,
  rotationDegrees,
  colorName = 'dark',

  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingBottom = 0
}: IconProps) {
  const { colors } = defaultTheme;

  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      marginTop={marginTop}
      paddingTop={paddingTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingLeft={paddingLeft}
      marginBottom={marginBottom}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      viewBox="0 0 18 27"
      rotationDegrees={rotationDegrees}>
      <>
        <title>{title || 'Chevron icon'}</title>
        <path
          fill={colors[colorName as keyof typeof colors]}
          d={`M17.0571 13.2095C17.0571 13.7899 16.8507 14.2977 16.4377 14.733L5.52254 \
        25.6314C5.10959 26.0444 4.60736 26.2508 4.01584 26.2508C3.42432 26.2508 2.92209 26.0444 2.50914 \
        25.6314L1.23682 24.3758C0.823874 23.9406 0.617401 23.4328 0.617401 22.8524C0.617401 22.2609 0.823874 \
        21.7587 1.23682 21.3457L9.37298 13.2095L1.23682 5.09012C0.823874 4.65486 0.617401 4.14704 0.617401 \
        3.56669C0.617401 2.97517 0.823874 2.47294 1.23682 2.05999L2.50914 0.804409C2.91093 0.380301 3.41316 \
        0.168248 4.01584 0.168248C4.61852 0.168248 5.12075 0.380301 5.52254 0.804409L16.4377 11.7028C16.8507 \
        12.1158 17.0571 12.618 17.0571 13.2095Z`}
        />
      </>
    </SvgContainer>
  );
}

export default ChevronIcon;
