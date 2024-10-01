import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MetricsOrCollaboratorsCard = ({ title, subtitle, data }) => {
  const navigate = useNavigate();

  const handleButtonClick = (collaboratorId) => {
    navigate(`/author/${collaboratorId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CardContainer>
      <ListContainer>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <ItemsWrapper>
          {data.map((item, index) => (
            <ItemCard key={index}>
              <IconWrapper>
                <img src={item.icon} alt={item.title} width="70" height="70" />
              </IconWrapper>
              <ItemText>
                <CollaboratorName>{item.title}</CollaboratorName>
                <CollaboratorInfo>{item.description}</CollaboratorInfo>
                {item.collaborations && (
                  <CollaboratorInfo>{item.collaborations} Colaborações</CollaboratorInfo>
                )}
              </ItemText>
              <BottomContent>
                {item.type === 'button' ? (
                  <ActionButton onClick={() => handleButtonClick(item.id)}>
                    {item.value}
                  </ActionButton>
                ) : (
                  <ItemValue>{item.value}</ItemValue>
                )}
              </BottomContent>
            </ItemCard>
          ))}
        </ItemsWrapper>
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
  max-height: 410px;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 22px;

  @media (max-width: 768px) { 
    padding: 20px 15px 10px 15px;
    max-height: 310px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 10px 15px;
    max-height: 330px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
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
  align-items: flex-start;
  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const ItemCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1px;
  align-items: center;
  padding: 10px 8px;
  width: calc(33.33% - 20px);
  max-width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  img {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    img {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

const ItemText = styled.div`
  text-align: center;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CollaboratorName = styled.h4`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const CollaboratorInfo = styled.p`
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const BottomContent = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 10px;
  }
`;

const ItemValue = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 4px 10px;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 98%;

  @media (max-width: 480px) {
      gap: 16px;
  }
`;

export default MetricsOrCollaboratorsCard;
