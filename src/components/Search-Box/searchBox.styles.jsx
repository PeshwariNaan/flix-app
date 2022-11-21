import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  background-color: none;
  margin: 3rem 0;
 
  ion-icon {
    font-size: 3rem;
    color: var(--white);
    align-self: center;
  }
  form {
    width: 100%;
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