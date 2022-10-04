import styled from 'styled-components';

export const ShowsContainer = styled.div`
  width: calc(100% - 15rem);
  float: right;
  display: grid;
  margin-right: 2rem;
  grid-template-columns: repeat(4, minmax(18rem, 1fr)) !important;
  grid-template-rows: auto;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;
`;


