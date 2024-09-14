import React from 'react';
import Header from '../components/Header';
import CompleteSearch from '../components/CompleteSearch';
import ChartCard from '../components/ChartCard';
import styled from 'styled-components';
import InfoListCard from '../components/InfoListCard';
import ic_collaborator from '../assets/ic_collaborator.svg';
import ic_hindex from '../assets/ic_hindex.svg'; 
import MetricsOrCollaboratorsCard from '../components/MetricsOrCollaboratorsCard';

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0px 40px; 
  width: 100%;
  margin-bottom: 22px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px; 
  }
`;

const ContainerInfoListCard = styled.div`
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

const ContainerMetricsOrCollaboratorsCard = styled.div`
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

  const institutions = [
    { type: 'company', text: 'Google (United States)', value: 'Presente' },
    { type: 'company', text: 'DeepMind (United Kingdom)', value: '2020' },
    { type: 'education', text: 'University of Amsterdam', value: '2016-2020' },
  ];

  const topics = [
    { type: '', text: 'Graph Neural Network Models and Applications', value: '7 Artigos' },
    { type: '', text: 'Advances in Transfer Learning and Domain Adaptation', value: '5 Artigos' },
    { type: '', text: 'Stereo Vision and Depth Estimation', value: '3 Artigos' },
  ];

  const collaborators = [
    { icon: ic_collaborator, title: 'Max Welling', description: 'University of Amsterdam', collaborations: 10, value: 'Acessar Dados', type: 'button' },
    { icon: ic_collaborator, title: 'Peter Bloem', description: 'Vrije Universiteit Amsterdam', collaborations: 7, value: 'Acessar Dados', type: 'button' },
    { icon: ic_collaborator, title: 'Rianne van den Berg', description: 'University of Amsterdam', collaborations: 5, value: 'Acessar Dados', type: 'button' },
  ];

  const metrics = [
    { icon: ic_hindex, title: 'H-index', description: '', value: '26', type: 'value' },
    { icon: ic_hindex, title: 'i10-index', description: '', value: '35', type: 'value' },
    { icon: ic_hindex, title: 'Média de citações últimos 2 anos', description: '', value: '5.1', type: 'value' }
  ];

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
      <ContainerInfoListCard>
        <InfoListCard
          title="Instituições"
          subtitle="8 instituições"
          data={institutions}
        />
        <InfoListCard
          title="Tópicos Abordados"
          subtitle="4 tópicos"
          data={topics}
        />
      </ContainerInfoListCard>
      <ContainerMetricsOrCollaboratorsCard>
        <MetricsOrCollaboratorsCard
          title="Colaboradores do Autor"
          subtitle="18 colaboradores"
          data={collaborators} />
        <MetricsOrCollaboratorsCard
          title="Métricas de Impacto do Autor"
          subtitle="3 métricas"
          data={metrics} />
      </ContainerMetricsOrCollaboratorsCard>
    </div>
  );
};

export default AuthorPage;
