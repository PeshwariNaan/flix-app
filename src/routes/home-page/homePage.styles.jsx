import styled from 'styled-components';

export const ShowsContainer = styled.div`
  width: calc(100% - 20rem);
  float: right;
  display: grid;
  margin-right: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  h1 {
    
  }
`;

export const TrendingContainer = styled.div`
  display: flex;
  width: calc(100% - 20rem);
  float: right;
  margin-right: 2rem;
`


