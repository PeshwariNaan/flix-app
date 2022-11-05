import styled from 'styled-components';

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: ${props => props.trending? 'var(--Lhead)': 'var(--body-med)'};
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
`;
