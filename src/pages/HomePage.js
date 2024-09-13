import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CompleteSearch from "../components/CompleteSearch";
import LabelSelector from "../components/LabelSelector";
import ArticleList from "../components/ArticleList";
import { fetchHomeWorks } from "../services/TopicService";

const HomePage = () => {
  const [label, setLabel] = useState("Deep Learning");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [clearSelection, setClearSelection] = useState(false);

  useEffect(() => {
    const loadInitialArticles = async () => {
      const data = await fetchHomeWorks(label);
      setResults(data);
      setShowResults(data.length > 0);
    };
    loadInitialArticles();
  }, [label]);

  const handleLabel = async (newLabel) => {
    setClearSelection(false);
    const data = await fetchHomeWorks(newLabel);
    setResults(data);
    setLabel(newLabel);
    setShowResults(data.length > 0);
  };

  const handleArticlesSearch = async (searchTerm) => {
    const data = await fetchHomeWorks(searchTerm);
    setResults(data);
    setLabel(searchTerm);
    setShowResults(true);
    setClearSelection(true);
  };

  return (
    <PageContainer>
      <Header />
      <CompleteSearch
        onArticlesSearch={handleArticlesSearch}
        clearLabel={() => setClearSelection(true)}
        showSwitch={true} />
      <LabelSelector
        onSelect={handleLabel}
        clearSelection={clearSelection}
        selectedLabel={label} />
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
