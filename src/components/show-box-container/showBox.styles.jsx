import styled from "styled-components";

export const ShowBoxContainer = styled.div`
  display: grid;
  margin: 2rem 2rem 15rem 0;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 2rem 0 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

export const HeadingsContainer = styled.div`
  display: flex;
  margin: 0 0 0 0;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`;