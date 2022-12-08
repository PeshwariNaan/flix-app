import styled from 'styled-components';

export const MoviesMainContainer = styled.div`
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
