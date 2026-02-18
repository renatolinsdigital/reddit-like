import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  BoxStyled,
  TextStyled,
  PageContainer
} from 'src/shared/components';
import { PostEntry } from 'src/domain/components';
import { PostEntryInfo, User } from 'src/domain/models';
import {
  AppDispatch,
  fetchPostEntries,
  orderByComments,
  orderByUpvotes,
  RootState,
  setLoggedUser
} from 'src/store';
import { LoadingIcon } from 'src/shared/icons';

const NO_POSTS_MESSAGE = '- No posts found -';

const AppBody = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [fakeUser] = useState<User>({
    id: -1,
    name: 'Test user',
    username: 'test_user',
    imageFileName: 'user_photo.png'
  });

  const {
    hasError,
    isLoading,
    filteredValue: postEntries
  } = useSelector((state: RootState) => state.postEntries);

  useEffect(() => {
    dispatch(setLoggedUser(fakeUser));
    dispatch(fetchPostEntries());
  }, [dispatch, fakeUser]);

  const onPostsRefresh = () => {
    dispatch(fetchPostEntries());
  };

  const onOrderByUpvotes = () => {
    dispatch(orderByUpvotes());
  };

  const onOrderByComments = () => {
    dispatch(orderByComments());
  };

  return (
    <PageContainer>
      <TextStyled
        isFlexible
        minWidth="100%"
        fontSizeName="smallest"
        fontWeightName="medium"
        justifyContent="flex-end"></TextStyled>
      <BoxStyled
        paddingBottom={40}
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start">
        <BoxStyled
          paddingBottom={15}
          isStretched={false}
          justifyContent="flex-start">
          {!isLoading && !hasError && postEntries.length === 0 ? (
            <TextStyled
              marginTop={20}
              marginBottom={20}
              fontWeightName="medium"
              colorName="primaryDefault">
              {NO_POSTS_MESSAGE}
            </TextStyled>
          ) : (
            <>
              <TextStyled paddingLeft={0}>Order results by</TextStyled>
              <Button onClick={onOrderByUpvotes}>+ upvotes</Button>
              <Button marginLeft={15} onClick={onOrderByComments}>
                + comments
              </Button>
            </>
          )}
        </BoxStyled>
        {postEntries.map((postEntryInfo: PostEntryInfo, index) => (
          <PostEntry
            postEntryInfo={{ ...postEntryInfo, user: fakeUser }}
            key={`post-entry-for-${index}-${postEntryInfo.created_at}`}
          />
        ))}
        <Button
          minWidth="100%"
          paddingTop={20}
          paddingBottom={20}
          fontWeightName="medium"
          onClick={onPostsRefresh}
          colorName="primaryDefault"
          backgroundColorName="gray2"
          hoverColorName="primaryDark"
          hoverBackgroundColorName="gray2"
          hoverChildrenSvgColorName="primaryDark">
          <LoadingIcon
            width={25}
            height={25}
            marginRight={4}
            isSpinning={isLoading}
            colorName="primaryDefault"
          />
          {isLoading && !hasError && <TextStyled>Loading...</TextStyled>}
          {hasError && (
            <TextStyled>Posts entries could not be fetched</TextStyled>
          )}
          {!isLoading && !hasError && (
            <TextStyled>Refresh (Reload original data)</TextStyled>
          )}
        </Button>
      </BoxStyled>
    </PageContainer>
  );
};

export default AppBody;
