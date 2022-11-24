import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  /* @media (max-width: 600px) {
    flex-direction: column;
    } */

  h1 {
    font-size: var(--Mhead);
    margin: 0 2rem 0 0;
    @media (max-width: 800px) {
      font-size: var(--Shead);
      margin: 0 1rem 0 0;
    }
    @media (max-width: 600px) {
      font-size: var(--body-med);
      margin: 0 1rem 0 0;
    }
  }
  span {
    color: var(--red);
    
  }
`;
