import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CompleteSearch from "../components/CompleteSearch";
import LabelSelector from "../components/LabelSelector";
import ArticleList from "../components/ArticleList";
import { fetchHomeWorks } from "../services/TopicService";

const HomePage = () => {
  const [label, setLabel] = useState();
  const [results, setResults] = useState([]); 
  const [showResults, setShowResults] = useState(false); 
  const [initialLabel, setInitialLabel] = useState("Deep Learning"); 
  
  const handleLabel = async (label) => {
    if (!label.trim()) {
      setResults([]);
      setShowResults(false); 
      return;
    }

    const data = await fetchHomeWorks(label); 
    setResults(data);
    setLabel(label)
    setShowResults(data.length > 0);
  };

  useEffect(() => {
    handleLabel(initialLabel);
  }, [initialLabel]);

  return (
    <PageContainer>
      <Header />
      <CompleteSearch />
      <LabelSelector onSelect={handleLabel} /> 
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
