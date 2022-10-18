import React from 'react';
import { StyledSlideButton } from './SlideButton.styles';


const SlideButton = ({ onClick, type, showLeft, showRight }) => (
  <StyledSlideButton
    showLeft={showLeft}
    showRight={showRight}
    onClick={onClick}
  >
    <span>
      {showLeft ? <ion-icon name="chevron-back"></ion-icon> : null}
      {showRight ? <ion-icon name="chevron-forward"></ion-icon> : null}
    </span>
  </StyledSlideButton>
);

export default SlideButton;
