import React from "react";
import styled from "styled-components";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ label, articles }) => {
  return (
    <Container>
      <Header>
        <h2>Top 10 Artigos Relevantes</h2>
        <h1>{label}</h1>
      </Header>
      <ArticleContainer>
        {articles.map((article, index) => {
          const articleData = mapArticleData(article);
          return (
            <ArticleItem 
            key={index}
            title={articleData.title}
            author={articleData.author.name}
            institution={articleData.institution}
            year={articleData.year}
            citedByCount={articleData.citedByCount}
            concepts={articleData.concepts}
            doi={articleData.doi}
            />
          );
        })}
      </ArticleContainer>
    </Container>
  );
};

const mapArticleData = (article) => {
  const primaryAuthor = article.authorships.find(auth => auth.author_position === 'first');
  const authorName = primaryAuthor ? primaryAuthor.author.display_name : 'Autor desconhecido';
  const authorLink = primaryAuthor ? primaryAuthor.author.id : '#';

  const institution = primaryAuthor && primaryAuthor.institutions.length > 0
    ? primaryAuthor.institutions[0].display_name
    : 'Instituição desconhecida';

  return {
    title: article.display_name || article.title,
    author: {
      name: authorName,
      link: authorLink,
    },
    institution,
    year: article.publication_year,
    citedByCount: article.cited_by_count,
    concepts: article.concepts,
    doi: article.doi || "#",
  };
};


const Container = styled.div`
  padding: 40px;
  margin: 40px;
  background-color: #252836;
  border-radius: 30px;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 10px 15px;
    margin: 10px;
  }
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

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin: 20px 0px;
    }

    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 12px;
    }
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;


export default ArticleList;
