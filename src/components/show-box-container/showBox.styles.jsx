import styled from "styled-components";

export const ShowBoxContainer = styled.div`
  display: grid;
  margin: 2rem 2rem 15rem 0;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 0 0 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) !important;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)) !important;
  }
`;

export const HeadingsContainer = styled.div`
  display: flex;
  margin: 0 0 2rem 0;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`;