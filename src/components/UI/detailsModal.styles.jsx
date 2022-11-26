import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0%{
    opacity: 0;    
    transform: translateY(-600px) scale(0);
  }
  100% {
    opacity: 1;    
    transform: translateY(0px) scale(1);
  }
  `;

export const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const OverLayDiv = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: [row1-start] min-content [row1-end row2-start] auto [row2-end];
  grid-template-columns: 1;
  top: 5vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 50vw;
  background-color: var(--bg-ele);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 800ms ease-in-out;

  p {
    font-size: var(--body-med);
    color: var(--white);
  }

  @media (max-width: 1100px) {
    width: 60rem;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const ShowImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-column: 1;
  grid-row: 1 / 2;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1;
  overflow: hidden;
`;

export const StyledShowImage = styled.img`
  grid-column: 1;
  grid-row: 1 / 6;
  object-fit: contain;
  min-width: 100%;
  border-radius: 1rem;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const GradientContainer = styled.div`
  grid-row: 3 / 6;
  grid-column: 1;
  background: linear-gradient(to top, #161d2f, rgba(22, 29, 47, 0));
  z-index: 50;
`;

export const ShowDetailsContainer = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 2 / 3;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(3rem, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 25% 40% 35%;
  }
`;

export const TitleRatingContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media (max-width: 600px) {
    grid-column: 1 / 3;   
    padding: 0 0 2rem 0 ;
  }
`;

export const CastList = styled.p`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  padding: 1rem;

  @media (max-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;

export const GenreList = styled.p`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  padding: 1rem;

  @media (max-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

export const DescriptionDiv = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    padding: 0 1rem 3rem 1rem;
  }
`;

export const PlayButtonContainer = styled.div`
  position: absolute;
  left: 2rem;
  top: 75%;
  z-index: 900;
  opacity: 0;
  transition: opacity 500ms ease 100ms;

  ${ShowImageContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 1;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  top: 1rem;
  right: 2rem;
  opacity: 0;
  transition: opacity 500ms ease 100ms;

  ${ShowImageContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 1;
  }

  ion-icon {
    font-size: 3rem;
    color: var(--white);
    cursor: pointer;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export const BookmarkButtonContainer = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 100;
`;
