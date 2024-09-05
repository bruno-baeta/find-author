import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CompleteSearch from "../components/CompleteSearch";
import LabelSelector from "../components/LabelSelector";
import ArticleList from "../components/ArticleList"; 

const HomePage = () => {

  const articles = [
    {
      title: "Semi-Supervised Classification with Graph Convolutional Networks",
      author: "Max Welling",
      institution: "University of Amsterdam",
    },
    {
      title: "Semi-Supervised Classification with Graph Convolutional Networks",
      author: "Max Welling",
      institution: "University of Amsterdam",
    },
    {
      title: "Semi-Supervised Classification with Graph Convolutional Networks",
      author: "Max Welling",
      institution: "University of Amsterdam",
    },
    {
      title: "Semi-Supervised Classification with Graph Convolutional Networks",
      author: "Max Welling",
      institution: "University of Amsterdam",
    },
  ];

  return (
    <PageContainer>
      <Header />
      <CompleteSearch />
      <LabelSelector />
      <ArticleList articles={articles}/>
    </PageContainer>
  );
};

// Estilos

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;

export default HomePage;
