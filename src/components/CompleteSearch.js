import React, { useState } from "react";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import Switch from "../components/Switch";

const CompleteSearch = () => {
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (term) => {
    setSearchResult(`Resultados para: ${term}`);
  };

  return (
    <PageContainer>
      <SearchAndSwitchContainer>
        <SearchBox onSearch={handleSearch} />
        <Switch />
      </SearchAndSwitchContainer>
      <p>{searchResult}</p>
    </PageContainer>
  );
};

// Estilos

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  margin: 0;
  padding: 0;
`;

const SearchAndSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 30px 20px 16px 40px;

  @media (max-width: 768px) {
    flex-direction: column; 
    margin: 20px; 
    gap: 16px; 
  }
`;

export default CompleteSearch;
