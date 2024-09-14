import React from 'react';
import styled from 'styled-components';

const MetricsOrCollaboratorsCard = ({ title, subtitle, data }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ListContainer>
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
                <ActionButton>{item.value}</ActionButton>
              ) : (
                <ItemValue>{item.value}</ItemValue>
              )}
            </BottomContent>
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
  max-height: 382px; 
  min-height: 382px; 
  flex-direction: column;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 22px;

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
  
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 24px;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 32px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

const CollaboratorInfo = styled.p`
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
`;

const ItemValue = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export default MetricsOrCollaboratorsCard;
