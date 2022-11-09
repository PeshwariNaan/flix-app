import React from 'react';
import {InputContainer, StyledInput} from './searchBox.styles'

const SearchBox = ({ placeholder, onChangeHandler }) => {
    return (
      <InputContainer>
        <ion-icon name="search"></ion-icon>
        <StyledInput
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
          aria-label="Search"
        />
      </InputContainer>
    );
  };

  export default SearchBox
