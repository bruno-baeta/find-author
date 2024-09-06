import React, { useState, useEffect } from "react";
import styled from "styled-components";
import articleIcon from "../assets/ic_article_icon.svg";

const ArticleItem = ({ title, author, institution, year, citedByCount, concepts, doi, openAccess }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ArticleCard>
      <ArticleContent>
        <ImageContainer>
          <ArticleImage src={articleIcon} alt="Article Icon" />
        </ImageContainer>
        <ArticleDetails>
          <Title>{title}</Title>
          <Metadata>
            <MetadataItem>
              <strong>Autor:</strong> {author}
            </MetadataItem>
            <MetadataItem>
              <strong>Citações:</strong> {formatNumber(citedByCount)}
            </MetadataItem>
            <MetadataItem>
              <strong>Ano:</strong> {year}
            </MetadataItem>
            <MetadataItem>
              <strong>Instituição:</strong> {institution}
            </MetadataItem>
          </Metadata>
          {concepts && !isMobile && (
            <ConceptList>
              {concepts.slice(0, 8).map((concept, index) => (
                <Concept key={index}>{concept.display_name}</Concept>
              ))}
            </ConceptList>
          )}
        </ArticleDetails>
        <ActionContainer>
          <ActionButton onClick={() => window.open(doi, "_blank")}>Acessar Artigo</ActionButton>
          <ActionButton onClick={() => window.open(author.link, "_blank")}>Acessar Autor</ActionButton>
        </ActionContainer>
      </ArticleContent>
    </ArticleCard>
  );
};

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// Estilos

const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.large};
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


    @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  
`;

const ArticleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  margin-right: ${(props) => props.theme.spacing.medium};
`;

const ArticleImage = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 480px) {
    margin-left: -7px;
  }
`;

const ArticleDetails = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.text};
`;

const MetadataItem = styled.div`
  margin-right: ${(props) => props.theme.spacing.medium};
`;

const ConceptList = styled.div`
  margin-top: ${(props) => props.theme.spacing.medium};
  display: flex;
  gap: ${(props) => props.theme.spacing.small};
  flex-wrap: wrap;
`;

const Concept = styled.span`
  background: ${(props) => props.theme.colors.gradient};
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 4px 8px;
  border-radius: 16px;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  gap: 16px;  
  margin-top: 16px; 

  @media (max-width: 768px) {
    flex-direction: row;  
    justify-content: flex-start;  
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: row;  
    justify-content: flex-start;  
    gap: 8px;
    margin-top: 12px;
  }
`;

const ActionButton = styled.button`
  background: ${(props) => props.theme.colors.gradient};
  color: white;
  border: none;
  padding: 8px 16px;  
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 12px;  
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #5a4ecf;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 6px 14px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 4px 12px;
    font-size: 10px;
  }
`;

export default ArticleItem;
