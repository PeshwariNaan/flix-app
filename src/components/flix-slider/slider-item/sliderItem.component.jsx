import React from 'react'
import SliderContext from '../../../store/sliderContext'
import { ItemContainer } from './sliderItem.styles';


const SliderItem = ({show}) => {
  <SliderContext.Consumer>
  {({ currentSlide, elementRef }) => {
    const isActive = currentSlide && currentSlide.id === movie.id;

    return (
      <ItemContainer
        ref={elementRef}
      >
        <img src={show.image} alt="" />
        </ItemContainer>
    );
  }}
</SliderContext.Consumer>
 
}

export default SliderItem