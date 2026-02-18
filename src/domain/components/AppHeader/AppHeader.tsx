import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { ReactInputEvent } from 'src/shared/models';
import { AppDispatch, filterByText } from 'src/store';
import { SearchIcon, MenuIcon } from 'src/shared/icons';
import { useResponsiveBooleans } from 'src/shared/hooks';
import { UserInfo, AddPostButton } from 'src/domain/components';
import { BoxStyled, TextInput, Button, Image } from 'src/shared/components';

function AppHeader() {
  const [inputText, setInputText] = useState('');
  const [inputQuery, setInputQuery] = useState('');
  const { isSmaller, isSuperSmall } = useResponsiveBooleans();

  const postsDispatch = useDispatch<AppDispatch>();

  const onSearchByText = () => {
    setInputQuery(inputText);
  };

  const onInputChange = (event: ReactInputEvent) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    if (inputQuery) {
      postsDispatch(filterByText(inputQuery));
    } else {
      postsDispatch(filterByText('all'));
    }
  }, [inputQuery, postsDispatch]);

  return (
    <BoxStyled borderColorName="gray2" borderBottom="1px solid" maxWidth="100%">
      <BoxStyled
        maxWidth={1600}
        paddingTop={20}
        paddingLeft={15}
        paddingRight={15}
        paddingBottom={25}
        justifyContent="space-between">
        <BoxStyled paddingLeft={isSmaller ? 0 : 10} justifyContent="flex-start">
          <BoxStyled
            minWidth={65}
            cursor="pointer"
            marginRight={15}
            paddingRight={15}
            isStretched={false}
            borderRight="1px solid"
            borderColorName="gray2">
            <Image
              width="50"
              fileName="company_logo.svg"
              alternativeText="Company logo"
            />
          </BoxStyled>
          <Button
            minWidth={52}
            marginRight={15}
            paddingLeft={15}
            paddingRight={15}
            borderWidth="1px"
            borderStyle="solid"
            borderColorName="gray2"
            backgroundColorName="white"
            hoverBackgroundColorName="gray2">
            <MenuIcon width={20} height={19} />
          </Button>
          <TextInput
            maxWidth={320}
            borderRadius={4}
            lineHeightName="tall"
            onChange={onInputChange}
            backgroundColorName="gray2"
            onENTERKeyPress={onSearchByText}
            borderColorName="primaryDefault"
            leftIcon={<SearchIcon colorName="gray3" />}></TextInput>
        </BoxStyled>

        <BoxStyled justifyContent="flex-end">
          <AddPostButton
            isTextVisible={!isSmaller}
            isButtonVisible={!isSuperSmall}
          />
          <UserInfo isVisible={!isSmaller} />
        </BoxStyled>
      </BoxStyled>
    </BoxStyled>
  );
}

export default AppHeader;
