import styled from 'styled-components';

export const DetailsHeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 2rem;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  h2 {
    font-size: var(--Mhead);
    font-weight: 500;
    padding-bottom: 1rem;
  }
  p {
    font-size: var(--body-med);
    color: var(--white);
    font-weight: 300;
  }
  span {
    display: inline-block;
  }
`;
