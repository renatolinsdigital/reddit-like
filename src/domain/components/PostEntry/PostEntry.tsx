import { User } from 'src/domain/models';
import { Colors } from 'src/theme/models';
import { useEffect, useState } from 'react';
import { postCategoryToLabel } from './utils';
import PostEntryProps from './PostEntry.model';
import { Meta, UpVote } from './sub-components';
import { Badge, BoxStyled, Link } from 'src/shared/components';

function PostEntry({ postEntryInfo }: PostEntryProps) {
  const [currentUpvotes, setCurrentUpvotes] = useState(0);
  const [isVotedByCurrentUser, setIsVotedByCurrentUser] = useState(false);
  const { meta, upvotes, category, comments, isOwner, user, created_at } =
    postEntryInfo;

  const postCategory = postCategoryToLabel(category);

  const handleUpVote = (postId: number) => {
    console.log(`New upvote for post with id: ${postId}`);
    setCurrentUpvotes(upvotes => upvotes + 1);
    setIsVotedByCurrentUser(true);
  };

  useEffect(() => {
    setCurrentUpvotes(upvotes);
  }, [upvotes]);

  return (
    <BoxStyled
      marginTop={30}
      marginBottom={30}
      isStretched={false}
      justifyContent="flex-start">
      <UpVote
        postId={-1}
        onVoted={handleUpVote}
        votesCount={currentUpvotes}
        isVotedByCurrentUser={isVotedByCurrentUser}
      />
      <BoxStyled paddingLeft={20} paddingRight={20} flexDirection="column">
        <BoxStyled
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start">
          <Link
            isInUpperCase
            paddingLeft={0}
            isOpeningInNewTab
            colorName="gray3"
            fontSizeName="small"
            fontWeightName="medium"
            justifyContent="flex-start"
            location={`https://${meta.url}`}>
            {meta.url}
          </Link>
          <Link
            marginTop={2}
            paddingLeft={0}
            location="."
            fontSizeName="huge"
            fontWeightName="medium"
            hoverColorName="primaryDark">
            {meta.title}
          </Link>
        </BoxStyled>
        <BoxStyled paddingTop={12} justifyContent="flex-start">
          <Badge
            text={postCategory}
            backgroundColorName={category as keyof Colors}
          />
          <Meta
            isOwner={isOwner}
            comments={comments}
            author={meta.author}
            createdAt={created_at}
            user={user || ({} as User)}
          />
        </BoxStyled>
      </BoxStyled>
    </BoxStyled>
  );
}

export default PostEntry;
