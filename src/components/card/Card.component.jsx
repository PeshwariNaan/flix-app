import { useContext } from 'react';
import ShowDetailsButton from '../flix-slider/Show-Details-Button/ShowDetailsButton';
import ShowHeading from '../Show-Heading/ShowHeading';
import PlayButton from '../Play-Button/PlayButton';
import BookmarkButton from '../Bookmark-button/BookmarkButton';
import { DisplayContext } from '../../store/displayContext';
import { UserContext } from '../../store/userContext';
import { ShowContext } from '../../store/showContext';
import { addBookmarkForUser } from '../../utils/Firebase/firebase.utils';
import {
  ShowCard,
  CardPlayButtonContainer,
  BookmarkButtonContainer,
  ShowDetailsButtonContainer,
} from './card.styles';

const Card = ({ show, trending, bookmarked }) => {
  const { onShowDetails } = useContext(DisplayContext);
  const { currentUser } = useContext(UserContext);
  const { toggleIsBookmarked } = useContext(ShowContext);

  return (
    <ShowCard>
      <img
        src={show.thumbnail.regular.medium}
        alt={`Movie title: ${show.title}`}
      />
      <BookmarkButtonContainer>
        <BookmarkButton
          bookmarked={bookmarked}
          onClick={() => {
            toggleIsBookmarked(show.id);
          }}
        />
      </BookmarkButtonContainer>
      <CardPlayButtonContainer>
        <PlayButton />
      </CardPlayButtonContainer>
      <ShowHeading show={show} trending={trending} />
      <ShowDetailsButtonContainer>
        <ShowDetailsButton onClick={() => onShowDetails(show)} />
      </ShowDetailsButtonContainer>
    </ShowCard>
  );
};

export default Card;
