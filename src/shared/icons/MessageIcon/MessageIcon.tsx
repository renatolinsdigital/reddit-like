import { defaultTheme } from 'src/theme';
import { IconProps } from 'src/shared/models';
import { SvgContainer } from 'src/shared/components';

function MessageIcon({
  id,
  title,
  width = 18,
  height = 18,

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
      viewBox="0 0 41 36"
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
        <title>{title || 'Message Icon'}</title>
        <path
          fill={colors[colorName as keyof typeof colors]}
          d={`M0.244003 8.84855C0.244003 4.22881 3.98904 0.483765 8.60879 \
          0.483765H32.2014C36.8211 0.483765 40.5661 4.22881 40.5661 8.84855V19.7078C40.5661 24.3276 \
          36.8211 28.0726 32.2014 28.0726H8.6088C3.98905 28.0726 0.244003 24.3276 0.244003 19.7078V8.84855Z`}
        />
        <path
          fill={colors[colorName as keyof typeof colors]}
          d="M11.8969 35.0776C11.2445 35.6148 10.2613 35.1507 10.2613 34.3056V28.0726H20.4051L11.8969 35.0776Z"
        />
      </>
    </SvgContainer>
  );
}

export default MessageIcon;
