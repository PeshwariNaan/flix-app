import styled from 'styled-components';

export const ItemContainer = styled.div`
  flex: 0 0 35%;
  position: relative;
  transition: 0.4s ease 100ms;
  margin: 0 2px;
  overflow: hidden;
  min-height: 15rem;
  min-width: 30rem;

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
`;

export const ShowInfoDiv = styled.div`
  position: absolute;
  width: 10rem;
  bottom: 3rem;
  left: 2rem;
`;
export const ItemPlayButtonContainer = styled.div`
  position: absolute;
  transition: 0.4s ease 100ms;
  left: 35%;
  top: 40%;
  z-index: 900;
  opacity: 0;

  ${ItemContainer}:hover & {
    opacity: 1;
  }
`;
