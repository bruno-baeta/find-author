import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ChartCard from '../components/ChartCard';
import styled from 'styled-components';
import InfoListCard from '../components/InfoListCard';
import ic_collaborator from '../assets/ic_collaborator.svg';
import ic_hindex from '../assets/ic_hindex.svg';
import ic_article from '../assets/ic_article_icon.svg';
import MetricsOrCollaboratorsCard from '../components/MetricsOrCollaboratorsCard';
import RelevantArticlesList from '../components/RelevantArticlesList';
import CompleteSearch from '../components/CompleteSearch';
import { fetchAuthor } from '../services/AuthorService';
import { fetchAuthorWorks } from '../services/WorksService';

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

const ContainerRelevantArticlesList = styled.div`
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
  const { authorId } = useParams();
  const [authorData, setAuthorData] = useState(null);
  const [collaborators, setCollaborators] = useState([]);
  const [relevantArticles, setRelevantArticles] = useState([]);

  useEffect(() => {
    const loadAuthorData = async () => {
      const data = await fetchAuthor(authorId);
      setAuthorData(data);
    };

    const loadAuthorWorks = async () => {
      const works = await fetchAuthorWorks(authorId);
      processCollaboratorsAndArticles(works);
    };

    loadAuthorData();
    loadAuthorWorks();
  }, [authorId]);

  const processCollaboratorsAndArticles = (works) => {
    const collaboratorsMap = new Map();
    const articles = [];

    works.forEach(work => {
      work.authorships.forEach(authorship => {
        const collaboratorId = authorship.author.id.replace('https://openalex.org/', '');
        const collaboratorName = authorship.author.display_name;

        if (collaboratorId !== authorId) {
          const institution = authorship.institutions?.[0]?.display_name || 'Instituição não encontrada';

          collaboratorsMap.set(collaboratorId, {
            id: collaboratorId,
            name: collaboratorName,
            institution,
            count: (collaboratorsMap.get(collaboratorId)?.count || 0) + 1,
          });
        }
      });

      articles.push({
        title: work.title,
        citations: work.cited_by_count,
        year: work.publication_year,
        icon: ic_article,
      });
    });

    setCollaborators([...collaboratorsMap.values()].sort((a, b) => b.count - a.count));
    setRelevantArticles(articles.sort((a, b) => b.citations - a.citations).slice(0, 5));
  };

  if (!authorData) {
    return null;
  }

  const authorName = authorData.display_name;
  const institutions = authorData.affiliations.map((affiliation) => ({
    type: affiliation.institution.type,
    text: affiliation.institution.display_name,
    value: `${Math.min(...affiliation.years)}-${Math.max(...affiliation.years)}`,
  }));

  const topics = authorData.topics.map((topic) => ({
    type: '',
    text: topic.display_name,
    value: `${topic.count} Artigos`,
  }));

  const metrics = [
    { icon: ic_hindex, title: 'H-index', description: '', value: authorData.summary_stats.h_index, type: 'value' },
    { icon: ic_hindex, title: 'i10-index', description: '', value: authorData.summary_stats.i10_index, type: 'value' },
    { icon: ic_hindex, title: 'Média de citações últimos 2 anos', description: '', value: authorData.summary_stats["2yr_mean_citedness"].toFixed(1), type: 'value' }
  ];

  const articlesChartData = {
    labels: authorData.counts_by_year.map(item => item.year),
    dataPoints: authorData.counts_by_year.map(item => item.works_count)
  };

  const citationsChartData = {
    labels: authorData.counts_by_year.map(item => item.year),
    dataPoints: authorData.counts_by_year.map(item => item.cited_by_count)
  };

  return (
    <div>
      <Header />
      <CompleteSearch
        onArticlesSearch={() => { }}
        clearLabel={() => { }}
        showSwitch={false}
      />
      <AuthorName>{authorName}</AuthorName>
      <ChartsContainer>
        <ChartWrapper>
          <ChartCard
            title="Artigos Publicados"
            subtitle={`${formatNumber(authorData.works_count)} artigos`}
            labels={articlesChartData.labels}
            dataPoints={articlesChartData.dataPoints}
          />
        </ChartWrapper>
        <ChartWrapper>
          <ChartCard
            title="Citações"
            subtitle={`${formatNumber(authorData.cited_by_count)} citações`}
            labels={citationsChartData.labels}
            dataPoints={citationsChartData.dataPoints}
          />
        </ChartWrapper>
      </ChartsContainer>
      <ContainerInfoListCard>
        <InfoListCard
          title="Instituições"
          subtitle={`${institutions.length} instituições`}
          data={institutions}
        />
        <InfoListCard
          title="Tópicos Abordados"
          subtitle={`${topics.length} tópicos`}
          data={topics}
        />
      </ContainerInfoListCard>
      <ContainerMetricsOrCollaboratorsCard>
        <MetricsOrCollaboratorsCard
          title="Principais Colaboradores"
          subtitle={`${collaborators.length} colaboradores`}
          data={collaborators.map(collaborator => ({
            icon: ic_collaborator,
            title: collaborator.name,
            description: collaborator.institution,
            collaborations: collaborator.count,
            value: 'Acessar Dados',
            type: 'button',
            id: collaborator.id
          }))}
        />
        <MetricsOrCollaboratorsCard
          title="Métricas de Impacto do Autor"
          subtitle="3 métricas"
          data={metrics}
        />
      </ContainerMetricsOrCollaboratorsCard>
      <ContainerRelevantArticlesList>
        <RelevantArticlesList
          title="Artigos Relevantes"
          subtitle="Top 5 mais citados"
          articles={relevantArticles}
        />
      </ContainerRelevantArticlesList>
    </div>
  );
};

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default AuthorPage;
