import MetaProps from './Meta.model';
import { Image } from 'src/shared/components';
import { MessageIcon } from 'src/shared/icons';
import { useResponsiveBooleans } from 'src/shared/hooks';
import { BoxStyled, Link, TextStyled } from 'src/shared/components';
import { getTimeDifference } from 'src/shared/helpers';

function Meta({ user, isOwner, author, comments, createdAt }: MetaProps) {
  const { imageFileName } = user;
  const { isSmaller } = useResponsiveBooleans();
  const { value: timeDifferenceValue, unit: timeDifferenceUnit } =
    getTimeDifference(createdAt);

  return (
    <BoxStyled
      marginLeft={15}
      paddingLeft={10}
      borderLeft="2px solid"
      borderColorName="gray2"
      justifyContent="flex-start">
      <BoxStyled
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection={isSmaller ? 'column' : 'row'}>
        <BoxStyled isStretched={false}>
          <Image
            width="25"
            isDomainImage
            alternativeText={author}
            fileName={String(imageFileName)}
          />
          <Link
            hasUnderline
            marginLeft={2}
            fontWeightName="medium"
            colorName="primaryDefault"
            hoverColorName="primaryDark">
            {author}
          </Link>
        </BoxStyled>
        <BoxStyled isStretched={false}>
          <TextStyled
            paddingLeft={5}
            colorName="gray3"
            fontSizeName="small"
            hoverColorName="gray3"
            paddingRight={isSmaller ? 2 : 8}>
            {createdAt && timeDifferenceValue > 0
              ? `created ${timeDifferenceValue} ${timeDifferenceUnit} ago`
              : null}
          </TextStyled>
          <BoxStyled
            top={1}
            minWidth={4}
            minHeight={4}
            borderRadius="50%"
            position="relative"
            isStretched={false}
            isVisible={!isSmaller}
            backgroundColorName="gray3"
          />
          <BoxStyled
            isStretched={false}
            flexDirection="row-reverse"
            paddingLeft={isSmaller ? 2 : 10}>
            {!isSmaller && (
              <MessageIcon marginTop={2} colorName="primaryDefault" />
            )}
            <Link
              hasUnderline
              colorName="primaryDefault"
              hoverColorName="primaryDark"
              marginLeft={isSmaller ? 0 : 5}
              fontSizeName={isSmaller ? 'small' : 'default'}>
              {`${comments} Comment${Number(comments) !== 1 ? 's' : ''}`}
            </Link>
          </BoxStyled>
          {isOwner && (
            <Link
              hasUnderline
              marginLeft={2}
              colorName="primaryDefault"
              hoverColorName="primaryDark"
              fontSizeName={isSmaller ? 'small' : 'default'}>
              Edit
            </Link>
          )}
        </BoxStyled>
      </BoxStyled>
    </BoxStyled>
  );
}

export default Meta;
