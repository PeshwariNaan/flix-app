import React from 'react';
import {
  InputContainer,
  StyledInput,
  ClearInputButton,
} from './searchBox.styles';

const SearchBox = ({
  placeholder,
  handleSearchQuery,
  handleSearchSubmit,
  searchQuery,
  maxLength,
  clearInput
}) => {
  return (
    <>
      <InputContainer>
        <ion-icon name="search"></ion-icon>
        <form onSubmit={handleSearchSubmit}>
          <StyledInput
            type="text"
            placeholder={placeholder}
            onChange={handleSearchQuery}
            value={searchQuery}
            aria-label="Search"
            maxLength={maxLength}
          />
        </form>
        <ClearInputButton onClick={clearInput}>
          <ion-icon name="close"></ion-icon>
        </ClearInputButton>
      </InputContainer>
    </>
  );
};

export default SearchBox;
