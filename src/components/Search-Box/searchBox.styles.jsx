import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 40rem;
  height: 6rem;
  background-color: none;
  margin: 3rem 0;
 
  ion-icon {
    font-size: 3rem;
    color: var(--white);
    align-self: center;
  }
  form {
    width: 40rem;
  }
`;

export const StyledInput = styled.input`
  -webkit-appearance: none;
  padding: 0 0 0 3rem;  
  height: 100%; 
  width: 100%;
  color: var(--white);
  background-color: transparent;
  border: none;
  outline: none;
  line-height: 2rem;
    &::placeholder{
        font-size: var(--Mhead) ;
  }
`;

export const ClearInputButton = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  color: #fff;
  background: rgba(0, 0, 0, .5);
  top: 15px;
  right: -2rem;
  opacity: 0;
  transition: opacity 500ms ease 100ms;

  ${InputContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 1;
  }

  ion-icon {
    font-size: 3rem;
    color: var(--white);
    cursor: pointer;
   
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

