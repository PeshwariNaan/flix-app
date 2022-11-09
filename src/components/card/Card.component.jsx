import { useContext } from 'react';
import ShowDetailsButton from '../flix-slider/Show-Details-Button/ShowDetailsButton';
import ShowHeading from '../Show-Heading/ShowHeading';
import PlayButton from '../Play-Button/PlayButton';
import { DisplayContext } from '../../store/displayContext';
import { ShowCard, CardPlayButtonContainer } from './card.styles';

const Card = ({ show, trending }) => {
  const { onShowDetails } = useContext(DisplayContext);

  return (
    <ShowCard>
      <img
        src={show.thumbnail.regular.medium}
        alt={`Movie title: ${show.title}`}
      />
      <CardPlayButtonContainer>
        <PlayButton />
      </CardPlayButtonContainer>
      <ShowHeading show={show} trending={trending} />
      <ShowDetailsButton onClick={() => onShowDetails(show)} />
    </ShowCard>
  );
};

export default Card;
