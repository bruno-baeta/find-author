import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/ic_search_icon.svg";
import closeIcon from "../assets/ic_close_search.svg"; 

const SearchBox = ({ searchTerm, onSearch }) => {
  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <SearchInputContainer>
        <SearchIcon src={searchIcon} alt="Search" />
        <SearchInput
          type="text"
          placeholder="Procure por autores..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
        {searchTerm && (
          <ClearButton onClick={() => onSearch("")}>
            <ClearIcon src={closeIcon} alt="Clear" />
          </ClearButton>
        )}
      </SearchInputContainer>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  margin: 30px 0px; 
  width: calc(100% - 80px); 
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;

const SearchInput = styled.input`
  width: 100%; 
  height: 50px; 
  padding-left: 50px; 
  padding-right: 50px; /* Mais espaço à direita para o botão "X" */
  font-family: "Poppins", sans-serif; 
  font-size: 16px; 
  font-weight: 500; 
  border-radius: 24px; 
  border: none; 
  outline: none; 
  background-color: #252836;
  color: #ffffff;
  &::placeholder {
    color: #545454; 
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const ClearIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export default SearchBox;
