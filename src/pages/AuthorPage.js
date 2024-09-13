import React from 'react';
import Header from '../components/Header';
import CompleteSearch from '../components/CompleteSearch';
import ChartCard from '../components/ChartCard';
import styled from 'styled-components';

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0px 40px; 
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px; 
  }
`;

const ChartWrapper = styled.div`
  flex: 1; 
  max-width: 100%; 
`;

const AuthorName = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: #fff;
  padding: 0px 0px 30px 40px; 
  
  @media (max-width: 768px) {
    font-size: 28px;
    padding: 10px 20px;
  }
`;

const AuthorPage = () => {
  const handleArticlesSearch = async (searchTerm) => { };
  const authorName = "Thomas Kipf";

  return (
    <div>
      <Header />
      <CompleteSearch
        onArticlesSearch={handleArticlesSearch}
        clearLabel={() => { }}
        showSwitch={false}
      />
      <AuthorName>{authorName}</AuthorName>
      <ChartsContainer>
        <ChartWrapper>
          <ChartCard
            title="Artigos Publicados"
            subtitle="74 artigos"
            labels={["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]}
            dataPoints={[2, 6, 4, 3, 9, 5, 6, 3]}
          />
        </ChartWrapper>
        <ChartWrapper>
          <ChartCard
            title="Citações"
            subtitle="25.928 citações"
            labels={["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]}
            dataPoints={[300, 120, 200, 150, 275, 320, 260, 90]}
          />
        </ChartWrapper>
      </ChartsContainer>
    </div>
  );
};

export default AuthorPage;
