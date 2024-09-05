import React from "react";
import styled from "styled-components";
import ArticleItem from "./ArticleItem"; 

const ArticleList = ({ articles }) => {
    return (
        <Container>
            <Header>
                <h2>Top 10 Artigos Relevantes</h2>
                <h1>Deep Learning</h1>
            </Header>
            <ArticleContainer>
                {articles.map((article, index) => (
                    <ArticleItem key={index} {...article} />
                ))}
            </ArticleContainer>
        </Container>
    );
};

// Estilos

const Container = styled.div`
  padding: 40px;
  margin: 40px;
  background-color: #252836;
  border-radius: 30px; 
`;

const Header = styled.div`
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
    margin: 30px 0px;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default ArticleList;
