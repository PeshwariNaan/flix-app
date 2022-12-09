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
    z-index: 10;
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
    bottom: 0.5rem;
    left: 1rem;
  }
  @media (max-width: 500px) {
    bottom: 0.5rem;
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
  bottom: -1rem;

  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
    bottom: 0;
    left: 77%;
  }
`;

export const BookmarkButtonContainer = styled.div`
  position: absolute;
  left: 88%;
  top: 2rem;

  @media (max-width: 821px) {
    top: 0.5rem;
  }
  @media (max-width: 500px) {
    left: 77%;
    height: 3rem;
    width: 3rem;
  }
`;
