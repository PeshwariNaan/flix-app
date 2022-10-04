import styled from 'styled-components';

export const ShowCard = styled.div`
  overflow: hidden;
  transition: 0.4s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  img {
    aspect-ratio: 3.3 / 2;
    object-fit: cover;
    min-width: 100%;
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

export const CategoryIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
