import styled from "styled-components";

export const InfoDiv = styled.div`
  h2 {
    font-size: ${props => props.enlarge? 'var(--Mhead)': 'var(--body-med)'} ;
    color: var(--white);
    font-weight: 500;
  }
  p {
    font-size: var(--body-small);
    color: var(--white);
    font-weight: 300;
  }
  span {
    display: inline-block;
  }
`

