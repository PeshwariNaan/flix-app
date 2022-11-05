import React, { useContext } from 'react';
import { SliderContext } from '../../../store/sliderContext';
import ShowDetailsButton from '../Show-Details-Button/ShowDetailsButton'
import DetailsModal from '../../UI/DetailsModal';
import ShowHeading from '../../Show-Heading/ShowHeading';
import { ItemContainer, ShowInfoDiv } from './item.styles';



const Item = ({ show, trending }) => {
  const { onShowDetails, currentSlide, elementRef, isOpen } =
    useContext(SliderContext);
  const isActive = currentSlide && currentSlide.id === show.id;

  return (
    <ItemContainer
      ref={elementRef}
      isActive={isActive}
      isOpen={isOpen}
    >
      <img
        src={show.thumbnail.regular.medium}
        alt={`Show title: ${show.title}`}
      />
      <ShowInfoDiv>
        <ShowHeading show={show} trending={trending} />
      </ShowInfoDiv>
      <ShowDetailsButton onClick={() => onShowDetails(show)} />
    {/* {isOpen && <DetailsModal  />} */}
    </ItemContainer>
  );
};

export default Item;
