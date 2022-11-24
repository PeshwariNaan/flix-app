import styled from 'styled-components';

export const ShowsContainer = styled.div`
  display: grid;
  margin: 2rem 2rem 15rem 0 ;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 2rem 0 0 0 ;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) !important;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)) !important;
  }
`;

export const TrendingContainer = styled.div`
  display: flex;
  margin-right: 2rem;
`;
export const HeadingsContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  h1 {
    margin: 0;
    font-size: var(--Lhead);
    color: var(--white);
  }
`;


export const MainShowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20rem);
  float: right;

  @media (max-width: 900px) {
    width: 100%;
    float: null;
    padding: 0 2rem 15rem 2rem;
  }
`
