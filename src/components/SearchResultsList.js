import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SearchResultItem from "./SearchResultItem";

const SearchResultsList = ({ results, onItemClick }) => {
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkForScrollbar = () => {
      if (containerRef.current) {
        const hasOverflow =
          containerRef.current.scrollHeight > containerRef.current.clientHeight;
        setHasScrollbar(hasOverflow);
      }
    };

    checkForScrollbar();

    window.addEventListener("resize", checkForScrollbar);

    return () => {
      window.removeEventListener("resize", checkForScrollbar);
    };
  }, [results]);

  return (
    <ResultsContainer ref={containerRef} hasScrollbar={hasScrollbar}>
      {results.map((result, index) => (
        <SearchResultItem
          key={index}
          name={result.display_name}
          publications={result.works_count}
          citations={result.cited_by_count}
          authorId={result.id.match(/\/([^\/]+)$/)[1]}
          onItemClick={onItemClick}
        />
      ))}
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  padding: ${(props) =>
    props.hasScrollbar ? "20px 0px 20px 20px" : "20px"};
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-height: 320px;
  overflow-y: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 44px;  
    height: 10px;
  }
    
  &::-webkit-scrollbar-thumb {
    height: 1em;
    border: 1em solid rgba(0, 0, 0, 0);  
    background-clip: padding-box;
    border-radius: 2em;
    background-color: #6C5ECF;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export default SearchResultsList;
