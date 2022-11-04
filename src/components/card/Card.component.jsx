import {useContext} from 'react'
import ShowDetailsButton from '../flix-slider/Show-Details-Button/ShowDetailsButton';
import ShowHeading from '../Show-Heading/ShowHeading';
import { SliderContext } from '../../store/sliderContext';
import { ShowCard } from './card.styles';

const Card = (props) => {
  const {onShowDetails} = useContext(SliderContext)
  return (
    <ShowCard>
      <img src={props.show.thumbnail.regular.medium} alt={`Movie title: ${props.show.title}`} />
      <ShowHeading show={props.show} />
      <ShowDetailsButton onClick={() => onShowDetails(props.show)} />
    </ShowCard>
  );
};

export default Card;
