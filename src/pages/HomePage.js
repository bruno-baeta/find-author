import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CompleteSearch from "../components/CompleteSearch";
import LabelSelector from "../components/LabelSelector";
import ArticleList from "../components/ArticleList"; 

const HomePage = () => {
  return (
    <PageContainer>
      <Header />
      <CompleteSearch />
      <LabelSelector />
      <ArticleList /> {}
    </PageContainer>
  );
};

// Estilos

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

export default HomePage;
