import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  border-radius: 1rem;
  padding: 0 2rem 4rem 2rem;
  background-color: var(--bg-ele) ;
  h2 {
    margin: 0 0 0 0;
  }
  span, a {
    color: var(--white);
    font-size:var(--body-med) ;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem 0 2rem 0;
`;