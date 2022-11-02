import React, { useContext } from 'react';
import { SliderContext } from '../../../store/sliderContext';
import ShowDetailsButton from '../Show-Details-Button/ShowDetailsButton'
import { ItemContainer } from './item.styles';


const Item = ({ show }) => {
  const { onShowDetails, currentSlide, elementRef, isOpen } =
    useContext(SliderContext);
  const isActive = currentSlide && currentSlide.id === show.id;
  //console.log('element ref', elementRef)

  return (
    <ItemContainer
      className={isOpen ? 'open' : null}
      ref={elementRef}
      isActive={isActive}
      isOpen={isOpen}
    >
      <img
        src={show.thumbnail.regular.medium}
        alt={`Show title: ${show.title}`}
      />
      <ShowDetailsButton onClick={() => onShowDetails(show)} />
      {/* {isActive && <Mark />} */}
    </ItemContainer>
  );
};

export default Item;
