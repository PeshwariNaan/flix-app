import styled from 'styled-components';

export const BookmarkedShowsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20rem);
  float: right;
  @media (max-width: 900px) {
    width: 100%;
    float: null;
    padding: 0 2rem 15rem 2rem;
  }
`;
export const BookmarkedShowsContainer = styled.div`
  display: grid;
  margin: 2rem 2rem 15rem 0;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 0 0 0 0;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) !important;
  }
  @media (max-width: 600px) {
    margin: 0 0 0 0;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)) !important;
  }
`;

export const BookmarkedHeadingsContainer = styled.div`
  display: flex;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`;
