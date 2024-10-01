import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const RelevantArticlesList = ({ title, subtitle, articles }) => {
    const citationRefs = useRef([]);
    const [maxLabelWidth, setMaxLabelWidth] = useState(0);

    useEffect(() => {
        if (citationRefs.current.length > 0) {
            const widths = citationRefs.current.map(ref => ref.offsetWidth);
            const maxWidth = Math.max(...widths);
            setMaxLabelWidth(maxWidth);
        }
    }, [articles]);

    return (
        <CardContainer>
            <ListContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>

                {articles.map((article, index) => (
                    <ItemCard key={index}>
                        <IconWrapper>
                            <img src={article.icon} alt="icon" width="30" height="30" />
                        </IconWrapper>
                        <ArticleText>
                            <ArticleTitle>{article.title}</ArticleTitle>
                        </ArticleText>
                        <InfoWrapper>
                            <Citations
                                ref={(el) => (citationRefs.current[index * 2] = el)}
                                width={maxLabelWidth}
                            >
                                {formatNumber(article.citations)} Citações
                            </Citations>
                            <Year
                                ref={(el) => (citationRefs.current[index * 2 + 1] = el)}
                                width={maxLabelWidth}
                            >
                                {article.year}
                            </Year>
                        </InfoWrapper>
                    </ItemCard>
                ))}
            </ListContainer>
        </CardContainer>
    );
};

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: 24px;
  flex: 1;
  display: flex;
  max-height: 400px;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 22px;

  @media (max-width: 768px) {
    padding: 20px 15px 10px 15px;
    max-height: 350px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 10px 15px;
    max-height: 300px;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 18px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 14px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 25px;
  }
  
  &::-webkit-scrollbar-thumb {
    height: 0.6em;
    border: 0.5em solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 2em;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ItemCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 16px;
    border-radius: 22px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    border-radius: 22px;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    img {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ArticleText = styled.div`
  flex-grow: 1;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

const ArticleTitle = styled.h4`
  font-size: 12px; 
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  white-space: normal; 
  overflow-wrap: break-word; 
  word-wrap: break-word; 
  hyphens: auto; 

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    flex-direction: column;
    align-items: flex-start; 
  }
`;

const Citations = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.primary}; 
  padding: 8px 16px;
  border-radius: 32px;
  font-size: 12px; 
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text}; 
  text-align: center;
  min-width: ${({ width }) => width}px; 

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 10px;
  }
`;

const Year = styled.div`
  background-color: ${({ theme }) => theme.colors.card}; 
  border: 1px solid ${({ theme }) => theme.colors.primary}; 
  padding: 8px 16px;
  border-radius: 32px;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold; 
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  min-width: ${({ width }) => width}px;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 11px;
    width: 120x;
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 10px;
    width: 120x;
  }
`;

const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default RelevantArticlesList;
