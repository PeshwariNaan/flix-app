import styled from 'styled-components'

export const SeriesMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20rem);
  float: right;
`
export const SeriesContainer = styled.div`
  display: grid;
  margin: 2rem 2rem 15rem 0 ;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;
`;

export const SeriesHeadingsContainer = styled.div`
  display: flex;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`;