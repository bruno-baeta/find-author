import React, { useState } from "react";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import Switch from "../components/Switch";
import SearchResultsList from "../components/SearchResultsList";
import { fetchAuthors } from "../services/AuthorService";

const CompleteSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (term) => {
    setSearchTerm(term);

    if (!term.trim()) {
      setResults([]);
      setShowResults(false); 
      return;
    }

    const data = await fetchAuthors(term);
    setResults(data);
    setShowResults(data.length > 0);
  };

  return (
    <>
      {showResults && <Overlay />}
      <SearchContainer>
        <SearchAndSwitchContainer>
          <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
          <Switch />
        </SearchAndSwitchContainer>

        {showResults && results.length > 0 && (
          <ResultsWrapper>
            <SearchResultsList results={results} />
          </ResultsWrapper>
        )}
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  position: relative;
  z-index: 1001;
`;

const SearchAndSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 30px 20px 10px 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
    gap: 16px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000; 
`;

const ResultsWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 40px;
  right: 50px;
  max-width: calc(100% - 100px); 
  z-index: 1001; 
`;

export default CompleteSearch;
