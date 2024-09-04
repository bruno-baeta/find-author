import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/ic_search_icon.svg"; 

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchInputContainer>
        <SearchIcon src={searchIcon} alt="Search" />
        <SearchInput
          type="text"
          placeholder="Procure por autores..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchInputContainer>
    </SearchForm>
  );
};

// Estilos

const SearchForm = styled.form`
  margin: 30px 0px; 
  width: calc(100% - 80px); 

  @media (max-width: 768px) {
    margin: 30px 0px; 
    width: calc(100% - 40px);
  }

  @media (max-width: 480px) {
    margin: 20px 0px; 
    width: calc(100% - 20px); 
  }
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

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    left: 12px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    left: 10px; 
  }
`;

const SearchInput = styled.input`
  width: 100%; 
  height: 50px; 
  padding-left: 50px; 
  padding-right: 16px;
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

  @media (max-width: 768px) {
    height: 45px; 
    font-size: 15px; 
    padding-left: 45px;
  }

  @media (max-width: 480px) {
    height: 40px; 
    font-size: 14px; 
    padding-left: 40px; 
  }
`;

export default SearchBox;
