import { Image } from 'src/shared/components';
import UserInfoProps from './UserInfo.model';
import { BoxStyled, TextStyled } from 'src/shared/components';

function UserInfo({ isVisible }: UserInfoProps) {
  const notificationsCount = 5;

  return (
    <BoxStyled
      marginLeft={5}
      marginRight={5}
      cursor="pointer"
      position="relative"
      isStretched={false}
      isVisible={isVisible}
      justifyContent="flex-end">
      <TextStyled
        right={1}
        paddingTop={4}
        paddingLeft={6}
        paddingRight={6}
        borderRadius={4}
        paddingBottom={4}
        colorName="white"
        position="absolute"
        hoverColorName="white"
        fontSizeName="smallest"
        fontWeightName="medium"
        backgroundColorName="primaryDefault"
        hoverBackgroundColorName="primaryDefault">
        {notificationsCount}
      </TextStyled>
      <Image
        width="50"
        isDomainImage
        isShimmerCircular
        alternativeText="User"
        fileName="user_photo.png"
      />
    </BoxStyled>
  );
}

export default UserInfo;
