import React, { useContext } from 'react';
import { SliderContext } from '../../store/SliderContext.context';
import { ItemContainer } from './item.styles';
import ShowDetailsButton from './ShowDetailsButton';
import Mark from './Mark';

const Item = ({ show }) => {
  const { onShowDetails, currentSlide, elementRef, isOpen } =
    useContext(SliderContext);
  const isActive = currentSlide && currentSlide.id === show.id;

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
      {isActive && <Mark />}
    </ItemContainer>
  );
};

export default Item;
