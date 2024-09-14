import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CompleteSearch from "../components/CompleteSearch";
import LabelSelector from "../components/LabelSelector";
import ArticleList from "../components/ArticleList";
import { fetchHomeWorks } from "../services/TopicService";
import { useDebounce } from "../hook/UseDebounce";

const HomePage = () => {
  const [label, setLabel] = useState("Deep Learning");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [clearSelection, setClearSelection] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300); 

  useEffect(() => {
    const loadInitialArticles = async () => {
      const data = await fetchHomeWorks(label);
      setResults(data);
      setShowResults(data.length > 0);
    };
    loadInitialArticles();
  }, []);
  
  useEffect(() => {
    const searchArticles = async () => {
      if (debouncedSearchTerm) {
        const data = await fetchHomeWorks(label);
        setResults(data);
        setLabel(debouncedSearchTerm);
        setShowResults(true);
        setClearSelection(true);
      }
    };
    searchArticles();
  }, [debouncedSearchTerm]);

  const handleArticlesSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleLabelSelect = async (newLabel) => {
    setClearSelection(false);
    setSearchTerm(newLabel); 
    setLabel(newLabel);
  };

  return (
    <PageContainer>
      <Header />
      <CompleteSearch
        onArticlesSearch={handleArticlesSearch}
        clearLabel={() => setClearSelection(true)}
        showSwitch={true}
      />
      <LabelSelector
        onSelect={handleLabelSelect} 
        clearSelection={clearSelection}
        selectedLabel={label}
      />
      {showResults && <ArticleList label={label} articles={results} />}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;

export default HomePage;
