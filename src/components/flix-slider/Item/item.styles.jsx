import styled from 'styled-components';

export const ItemContainer = styled.div`
  flex: 0 0 35%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;
  //z-index: 100;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    aspect-ratio: 2 / 1;
    vertical-align: top;
    border-radius: 1rem;
  }

  &:hover {
    transform: ${(props) => (props.isOpen ? null : 'scale(1.1)')} !important;
    z-index: 100;
  }

  /* &:hover ~ &{
    transform: ${(props) => ( (props.isOpen) ? null : 'translateX(10%);')};
  } */
`;

export const ShowInfoDiv = styled.div`
  position: absolute;
  width: 10rem;
  bottom: 5rem;
  left: 2rem;
`
