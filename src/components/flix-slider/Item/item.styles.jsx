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
    transform: ${(props) => (props.isOpen ? null : 'scale(1.1)')};
    z-index: 100;
  }

  @media (max-width: 821px) {
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

  @media (max-width: 821px) {
    bottom: .5rem;
    left: 1rem;
  }
  @media (max-width: 500px) {
    bottom: .5rem;
    left: 0rem;
  }
`;

export const ItemPlayButtonContainer = styled.div`
  position: absolute;
  width: 11rem;
  left: 40%;
  top: 40%;
  z-index: 5;
  opacity: 0;
  transition: 0.4s ease 100ms;

  ${ItemContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 821px) {
    display: none !important;
  }
`;

export const ShowDetailsButtonContainer = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: 45%;
  bottom: 0;

  @media (max-width: 500px) {
    bottom: null;
    top: 0;
    left: 0;
  }
`;

export const BookmarkButtonContainer = styled.div`
  position: absolute;
  left: 88%;
  top: 2rem;

  @media (max-width: 821px) {
    top: 1rem;
  }
  @media (max-width: 500px) {
    top: 1rem;
    left: 75%;
  }
`;
