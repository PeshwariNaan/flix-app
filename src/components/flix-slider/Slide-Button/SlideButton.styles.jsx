import styled from 'styled-components';

export const StyledSlideButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.showRight ? 0: null};
  left: ${props => props.showLeft ? 0 : null};
  width: 55px; // Double this for value of padding in useSliding hook - i.e PADDING = 120
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
  ion-icon {
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    transition: all 1s linear;    
    }
`;
