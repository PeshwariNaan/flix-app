import styled from 'styled-components';

export const ItemContainer = styled.div`
  flex: 0 0 60rem;
  position: relative;
  margin: 0 2px;
  overflow: hidden;
  transition: all 0.4s ease 100ms;

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

  @media (max-width: 811px) {
    flex: 0 0 50rem;
  }
  @media (max-width: 500px) {
    flex: 0 0 25rem;
  }
`;

export const ShowInfoDiv = styled.div`
  position: absolute;
  width: 10rem;
  bottom: 3rem;
  left: 2rem;

  @media (max-width: 811px) {
    bottom: 1rem;
    left: 2rem;
  }
`;
export const ItemPlayButtonContainer = styled.div`
  position: absolute;
  transition: 0.4s ease 100ms;
  width: 11rem;
  left: 35%;
  top: 40%;
  z-index: 900;
  opacity: 0;

  ${ItemContainer}:hover & {
    opacity: 1;
  }
`;
