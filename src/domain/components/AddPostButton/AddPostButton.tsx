import { PlusIcon } from 'src/shared/icons';
import AddPostButtonProps from './AddPostButton.model';
import { BoxStyled, Button, TextStyled } from 'src/shared/components';

function AddPostButton({ isButtonVisible, isTextVisible }: AddPostButtonProps) {
  return (
    <Button
      paddingTop={0}
      paddingLeft={0}
      paddingRight={0}
      paddingBottom={0}
      isVisible={isButtonVisible}
      disabledChildBorderColorName="gray2"
      hoverChildBorderColorName="primaryDefault">
      <BoxStyled
        minWidth={50}
        minHeight={44}
        marginRight={10}
        paddingTop={10}
        paddingLeft={10}
        paddingBottom={10}
        borderColorName="primaryDark"
        paddingRight={isTextVisible ? 14 : undefined}
        borderRight={isTextVisible ? '1px solid' : undefined}>
        <PlusIcon width={15} height={15} colorName="white" />
      </BoxStyled>
      {isTextVisible && (
        <TextStyled
          marginRight={10}
          colorName="white"
          hoverColorName="white"
          fontWeightName="medium">
          Add Post
        </TextStyled>
      )}
    </Button>
  );
}

export default AddPostButton;
