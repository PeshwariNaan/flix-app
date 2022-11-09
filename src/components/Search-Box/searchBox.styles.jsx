import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: calc(100% - 20rem);
  height: 6rem;
  float: right;
  background-color: none;
  margin: 3rem 0;
 
  ion-icon {
    font-size: 3rem;
    color: var(--white);
    align-self: center;
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