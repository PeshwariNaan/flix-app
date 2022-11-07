import React, { Fragment, useContext } from 'react';
import DetailsModal from '../../UI/DetailsModal';
import { SliderContext } from '../../../store/sliderContext';
import SlideButton from '../Slide-Button/SlideButton';
import SliderWrapper from '../SliderWrapper';
import useSliding from '../../../hooks/useSliding.hook';
import { OuterContainer } from './Slider.styles';

const Slider = ({ children }) => {
  const { width, onHideDetails, isOpen } = useContext(SliderContext);

  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } =
    useSliding(width, React.Children.count(children));

  return (
    <Fragment>
      <SliderWrapper>
        <OuterContainer isOpen={isOpen}>
          <div ref={containerRef} {...slideProps}>
            {children}
          </div>
        </OuterContainer>
        {hasPrev && (
          <SlideButton showLeft={hasPrev} onClick={handlePrev} type="prev" />
        )}
        {hasNext && (
          <SlideButton showRight={hasNext} onClick={handleNext} type="next" />
        )}
      </SliderWrapper>
      {isOpen && <DetailsModal onClose={onHideDetails} />}
    </Fragment>
  );
};

export default Slider;
