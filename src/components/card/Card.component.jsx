import {useContext} from 'react'
import ShowDetailsButton from '../flix-slider/Show-Details-Button/ShowDetailsButton';
import ShowHeading from '../Show-Heading/ShowHeading';
import { SliderContext } from '../../store/sliderContext';
import { ShowCard } from './card.styles';

const Card = ({show, trending}) => {
  const {onShowDetails} = useContext(SliderContext)
  return (
    <ShowCard>
      <img src={show.thumbnail.regular.medium} alt={`Movie title: ${show.title}`} />
      <ShowHeading show={show} trending={trending} />
      <ShowDetailsButton onClick={() => onShowDetails(show)} />
    </ShowCard>
  );
};

export default Card;
