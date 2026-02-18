import { defaultTheme } from 'src/theme';
import { IconProps } from 'src/shared/models';
import { SvgContainer } from 'src/shared/components';

function PlusIcon({
  id,
  title,
  width = 20,
  height = 20,

  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingBottom = 0,

  rotationDegrees,
  colorName = 'dark'
}: IconProps) {
  const { colors } = defaultTheme;

  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      viewBox="0 0 31 31"
      marginTop={marginTop}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      marginRight={marginRight}
      paddingRight={paddingRight}
      marginBottom={marginBottom}
      paddingBottom={paddingBottom}
      rotationDegrees={rotationDegrees}>
      <>
        <title>{title || 'Plus Icon'}</title>
        <path
          fill={colors[colorName as keyof typeof colors]}
          d={`M30.2283 18.5885C30.2283 19.1408 29.7806 19.5885 \
        29.2283 19.5885H18.9783V29.8385C18.9783 30.3908 18.5306 30.8385 17.9783 30.8385H12.4783C11.9261 \
        30.8385 11.4783 30.3908 11.4783 29.8385V19.5885H1.22835C0.676063 19.5885 0.228348 19.1408 0.228348 \
        18.5885V13.0885C0.228348 12.5362 0.676063 12.0885 1.22835 12.0885H11.4783V1.83853C11.4783 1.28625 \
        11.9261 0.838531 12.4783 0.838531H17.9783C18.5306 0.838531 18.9783 1.28625 18.9783 \
        1.83853V12.0885H29.2283C29.7806 12.0885 30.2283 12.5362 30.2283 13.0885V18.5885Z`}
        />
      </>
    </SvgContainer>
  );
}

export default PlusIcon;
