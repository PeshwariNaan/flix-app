import React from 'react'
import { SquareLoader } from 'react-spinners';
import { DivLoading } from './loader.styles';

const Loader = () => {
    return (
       <DivLoading>
          <SquareLoader size={150} color={'#fc4747'}  />
          <h1>Loading...</h1>
       </DivLoading>
    );
 }

export default Loader