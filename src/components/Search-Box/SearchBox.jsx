import React from 'react';
import { InputContainer, StyledInput } from './searchBox.styles';

const SearchBox = ({
  placeholder,
  handleSearchQuery,
  handleSearchSubmit,
  searchQuery,
}) => {
  return (
    <InputContainer>
      <ion-icon name="search"></ion-icon>
      <form onSubmit={handleSearchSubmit}>
        <StyledInput
          type="text"
          placeholder={placeholder}
          onChange={handleSearchQuery}
          value={searchQuery}
          aria-label="Search"
        />
      </form>
    </InputContainer>
  );
};

export default SearchBox;
