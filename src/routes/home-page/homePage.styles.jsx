import styled from 'styled-components';

export const ShowsContainer = styled.div`
  width: calc(100% - 20rem);
  float: right;
  display: grid;
  margin: 2rem 2rem 0 0 ;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;
`;

export const TrendingContainer = styled.div`
  display: flex;
  width: calc(100% - 20rem);
  float: right;
  margin-right: 2rem;
`;
export const HeadingsContainer = styled.div`
  display: flex;
  width: calc(100% - 20rem);
  float: right;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`;
