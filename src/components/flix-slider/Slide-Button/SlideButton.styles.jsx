import styled from 'styled-components';

export const StyledSlideButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.showRight ? 0: null};
  left: ${props => props.showLeft ? 0 : null};
  width: 5.5rem; 
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 4rem 0;
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

    @media (max-width: 600px) {
      width: 3rem
    }
`;
