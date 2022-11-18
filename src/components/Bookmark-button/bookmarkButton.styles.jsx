import styled from "styled-components";

export const StyledBookmarkButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  //color: #fff;
  background: rgba(0, 0, 0, .5);
  

  ion-icon {
    font-size: 2rem;
    color: var(--white);
    cursor: pointer;
    transition: all 1s linear;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  `