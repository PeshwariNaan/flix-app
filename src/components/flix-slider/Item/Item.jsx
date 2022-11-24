import React, { useContext } from 'react';
import { SliderContext } from '../../../store/sliderContext';
import { DisplayContext } from '../../../store/displayContext';
import ShowDetailsButton from '../Show-Details-Button/ShowDetailsButton';
import ShowHeading from '../../Show-Heading/ShowHeading';
import PlayButton from '../../Play-Button/PlayButton';
import {
  ItemContainer,
  ShowInfoDiv,
  ItemPlayButtonContainer,
} from './item.styles';

const Item = ({ show, trending }) => {
  const { elementRef } = useContext(SliderContext);
  const { onShowDetails, currentSlide, isOpen } = useContext(DisplayContext);
  const isActive = currentSlide && currentSlide.id === show.id;

  return (
    <ItemContainer ref={elementRef} isActive={isActive} isOpen={isOpen}>
      <img
        src={show.thumbnail.regular.medium}
        alt={`Show title: ${show.title}`}
      />
      <ItemPlayButtonContainer>
        <PlayButton />
      </ItemPlayButtonContainer>
      <ShowInfoDiv>
        <ShowHeading show={show} trending={trending} />
      </ShowInfoDiv>
      <ShowDetailsButton onClick={() => onShowDetails(show)} />
    </ItemContainer>
  );
};

export default Item;
