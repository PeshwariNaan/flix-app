import styled from 'styled-components';

export const ShowCard = styled.article`
  position: relative;
  overflow: hidden;
  transition: 0.4s ease 100ms;
  &:hover {
    transform: scale(1.1);
  }
  img {
    aspect-ratio: 3.3 / 2;
    object-fit: contain;
    max-width: 100%;
    border-radius: 1rem;
  }
  h2 {
    font-size: var(--body-med);
    color: var(--white);
    font-weight: 500;
  }
  p {
    font-size: var(--body-small);
    color: var(--white);
    font-weight: 300;
  }
`;

export const CardPlayButtonContainer = styled.div`
  position: absolute;
  transition: 0.4s ease 100ms;
  left: 30%;
  bottom: 45%;
  opacity: 0;

  @media (max-width: 821px){
    display: none;
  }

  ${ShowCard}:hover & {
    opacity: 1;
  }
`;

export const BookmarkButtonContainer = styled.div`
  position: absolute;  
  right: 5rem;
  top: 1rem; 

  @media (max-width: 600px){
    top: .5rem;
    right: 4.5rem;
  }
 `

export const ShowDetailsButtonContainer = styled.div`
position: absolute;  
right: 5rem;
bottom: 3rem;

@media (max-width: 821px){
    bottom: 8rem;
}
`
