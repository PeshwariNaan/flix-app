import React from "react";
import SliderContext from "../../../store/sliderContext";
import SliderButton from "../slider-button/sliderButton.component";
import SliderWrapper from "../slider-wrapper/sliderWrapper.component";
import useSliding from "../../../hooks/useSliding.hook";
import useSizeElement from "../../../hooks/useSizeElement.hook";
import { InnerContainer, OuterContainer } from "./slider.styles";



const Slider = ({ children, activeSlide }) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlide);
    const { width, elementRef } = useSizeElement();
    const {
      handlePrev,
      handleNext,
      slideProps,
      containerRef,
      hasNext,
      hasPrev
    } = useSliding(width, React.Children.count(children));
  
    const handleSelect = movie => {
      setCurrentSlide(movie);
    };
  
    const handleClose = () => {
      setCurrentSlide(null);
    };
  
    const contextValue = {
      onSelectSlide: handleSelect,
      onCloseSlide: handleClose,
      elementRef,
      currentSlide,
    };
  
    return (
      <SliderContext.Provider value={contextValue}>
        <SliderWrapper>
          <OuterContainer>
            <InnerContainer ref={containerRef} {...slideProps}>{children}</InnerContainer>
          </OuterContainer>
          {hasPrev && <SliderButton onClick={handlePrev}  />}
          {hasNext && <SliderButton onClick={handleNext}  />}
        </SliderWrapper>
        {/* {currentSlide && <Content movie={currentSlide} onClose={handleClose} />} */}
      </SliderContext.Provider>
    );
  };
  
  export default Slider;