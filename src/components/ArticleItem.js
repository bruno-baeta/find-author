import React from "react";
import styled from "styled-components";
import articleIcon from "../assets/ic_article_icon.svg";

const ArticleItem = ({ title, author, institution }) => {
  return (
    <ArticleCard>
      <ImageContainer>
        <ArticleImage src={articleIcon} alt="Article Icon" />
      </ImageContainer>
      <ArticleDetails>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Institution>{institution}</Institution>
      </ArticleDetails>
      <ButtonGroup>
        <ActionButton> Acessar Artigo </ActionButton>
        <ActionButton> Acessar Autor </ActionButton>
      </ButtonGroup>
    </ArticleCard>
  );
};

// Estilos

const ArticleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  transition: box-shadow 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ArticleImage = styled.img`
  width: 45px; 
  height: 30px; 
  object-fit: contain;
`;

const ArticleDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1; 
`;

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

const Author = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500; 
  color: ${(props) => props.theme.colors.text};
`;

const Institution = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  right: 20px;
  top: 15px;
`;

const ActionButton = styled.button`
  background: linear-gradient(180deg, #6C5ECF, #6B8AEB 100%);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 24px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default ArticleItem;
