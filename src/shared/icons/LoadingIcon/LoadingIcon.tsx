import { defaultTheme } from 'src/theme';
import { SvgContainer } from 'src/shared/components';
import { AnimatedIcon, IconProps } from 'src/shared/models';

function LoadingIcon({
  id,
  title,
  isSpinning,
  width = 18,
  height = 18,
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
}: IconProps & AnimatedIcon) {
  const { colors } = defaultTheme;
  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      viewBox="0 0 42 30"
      marginTop={marginTop}
      paddingTop={paddingTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingLeft={paddingLeft}
      marginBottom={marginBottom}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      rotationDegrees={rotationDegrees}>
      <>
        <title>{title || 'Loading icon'}</title>
        <path
          fill={colors[colorName as keyof typeof colors]}
          d={`M35.6667 15L41.1667 15L33.8333 22.3333L26.5 15L32 15C32 8.93167 27.0683 4 21 \
        4C19.1483 4 17.3883 4.45834 15.8667 5.28334L13.19 2.60667C15.445 1.17667 18.1217 0.333337 \
        21 0.333337C29.1033 0.333337 35.6667 6.89667 35.6667 15ZM9.99999 15C9.99999 21.0683 14.9317 \
        26 21 26C22.8517 26 24.6117 25.5417 26.1333 24.7167L28.81 27.3933C26.555 28.8233 23.8783 \
        29.6667 21 29.6667C12.8967 29.6667 6.33332 23.1033 6.33333 15L0.833326 15L8.16666 \
        7.66667L15.5 15L9.99999 15Z`}>
          {isSpinning && (
            <animateTransform
              dur="1s"
              type="rotate"
              from="0 21 15"
              to="360 21 15"
              repeatCount="indefinite"
              attributeName="transform"
            />
          )}
        </path>
      </>
    </SvgContainer>
  );
}

export default LoadingIcon;
