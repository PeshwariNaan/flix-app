import React from 'react';
import styled from 'styled-components';

const SlideButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  margin: 40px 0;
  z-index: 4;

  span {
    width: 25px;
    color: #fff;
    display: block;
    margin: 0 auto;
  }
`

const SliderButton = ({onClick}) => {
  return (
    <SlideButton onClick={onClick}>
      <span>
        <ion-icon name="chevron-forward"></ion-icon>
      </span>
    </SlideButton>
  );
};

export default SliderButton;
