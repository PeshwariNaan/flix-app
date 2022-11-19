import React from 'react';
import { StyledBookmarkButton } from './bookmarkButton.styles';

const BookmarkButton = (props) => {
  return (
    <StyledBookmarkButton onClick={props.onClick}>
      {props.bookmarked ? (
        <ion-icon name="bookmark"></ion-icon>
      ) : (
        <ion-icon name="bookmark-outline"></ion-icon>
      )}
    </StyledBookmarkButton>
  );
};

export default BookmarkButton;
