import React, { useState } from "react";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import Switch from "../components/Switch";
import SearchResultsList from "../components/SearchResultsList";
import { fetchAuthors } from "../services/AuthorService";

const CompleteSearch = ({ onArticlesSearch, clearLabel, showSwitch = true }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isArticleSearch, setIsArticleSearch] = useState(false);

  const handleSearch = async (term) => {
    setSearchTerm(term);

    if (!term.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    if (isArticleSearch) {
      onArticlesSearch(term);
      clearLabel();
    } else {
      const data = await fetchAuthors(term);
      setResults(data);
      setShowResults(data.length > 0);
    }
  };

  const handleSwitchChange = () => {
    setIsArticleSearch(!isArticleSearch);
    setSearchTerm("");
    setResults([]);
    setShowResults(false);
    if (!isArticleSearch) {
      clearLabel();
    }
  };

  return (
    <>
      {showResults && !isArticleSearch && <Overlay />}
      <SearchContainer>
        <SearchAndSwitchContainer showSwitch={showSwitch}>
          <SearchBox
            searchTerm={searchTerm}
            onSearch={handleSearch}
            placeholder={isArticleSearch ? "Procure por tópicos..." : "Procure por autores..."}
          />
          {showSwitch && (
            <Switch isActive={isArticleSearch} onToggle={handleSwitchChange} />
          )}
        </SearchAndSwitchContainer>

        {!isArticleSearch && showResults && results.length > 0 && (
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

  @media (max-width: 768px) {
    padding: 0px 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const SearchAndSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 40px 0px 40px;

  ${({ showSwitch }) => !showSwitch && `
    gap: 0;
    flex-direction: column;
    & > * {
      width: 100%;
    }
  `}

  @media (max-width: 768px) {
    gap: 12px;
    margin: 20px;
  }

  @media (max-width: 480px) {
    margin: 10px;
    gap: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px 10px 0px;
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
  z-index: 1001;

  @media (max-width: 768px) {
    left: 20px;
    right: 20px;
    top: 70px;
  }

  @media (max-width: 480px) {
    left: 10px;
    right: 10px;
    top: 60px;
  }
`;

export default CompleteSearch;
