import styled from "styled-components";
import { ShowBoxContainer } from "../show-box-container/showBox.styles";


export const ResultsContainer = styled.div`
   display: grid;
  margin: 2rem 2rem 15rem 0;
  grid-template-columns: repeat(auto-fit, 30rem);
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
  flex-direction: row;
  align-items: center;

  @media (max-width: 600px){
    flex-direction: column;
    }
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
    margin: 0 5rem 0 0 ;

    @media (max-width: 600px){
      font-size: var(--Mhead);
      margin: 0 5rem 2rem 0 ;
    }
  }
  

 
  
`;

