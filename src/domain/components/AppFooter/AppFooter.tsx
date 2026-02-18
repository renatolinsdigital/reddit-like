import { BoxStyled, TextStyled, Link } from 'src/shared/components';

function AppFooter() {
  return (
    <BoxStyled
      paddingTop={15}
      paddingLeft={15}
      paddingRight={15}
      paddingBottom={15}
      backgroundColorName="primaryDark">
      <TextStyled
        paddingLeft={0}
        paddingRight={2}
        colorName="white"
        hoverColorName="white">
        Developed by
      </TextStyled>
      <Link
        colorName="white"
        isOpeningInNewTab
        fontWeightName="bold"
        hoverColorName="gray2"
        location="https://www.linkedin.com/in/renatolinsdigital">
        Renato Lins
      </Link>
    </BoxStyled>
  );
}

export default AppFooter;
