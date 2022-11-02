import styled from 'styled-components';

export const ItemContainer = styled.div`
  flex: 0 0 25%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;
  z-index: 100;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    aspect-ratio: 7 / 3;
    vertical-align: top;
    border-radius: 1rem;
  }

  &:hover {
    transform: ${(props) => (props.isOpen ? null : 'scale(1.2)')} !important;
    z-index: 100;
  }
  
  /* &:not(open):hover ~ & {
    transform: ${(props) =>
      ((props.isOpen) ? null : 'translateX(-25%);')};
  } */

  /* &:hover ~ &{
    transform: ${(props) => ( (props.isOpen) ? null : 'translateX(25%);')};
  } */
`;
