import React from 'react';
import styled from 'styled-components';
import ic_company from '../assets/ic_company.svg';
import ic_university from '../assets/ic_university.svg';
import ic_book from '../assets/ic_book.svg';

const InfoListCard = ({ title, subtitle, data }) => {

    const getIconForType = (type) => {
    switch (type) {
      case 'company':
        return ic_company;
      case 'education':
        return ic_university;
      default:
        return ic_book;
    }
  };

  return (
    <CardContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ListContainer>
        {data.map((item, index) => (
          <ListItem key={index}>
            <ItemInfo>
              <Icon>
                <img src={getIconForType(item.type)} alt={`${item.type} icon`} width="30" height="30" />
              </Icon>
              <ItemText>{item.text}</ItemText>
            </ItemInfo>
            <ItemValue>{item.value}</ItemValue>
          </ListItem>
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
  flex-direction: column;
  min-height: 480px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin-bottom: 22px;

  @media (max-width: 1600px) {
    max-height: 400px;
  }

  &::-webkit-scrollbar {
    width: 44px;
  }
  
  &::-webkit-scrollbar-thumb {
    height: 1em;
    border: 1em solid rgba(0, 0, 0, 0);
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
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text}; 
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text}; 
  margin-bottom: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary}; 
  border-radius: 32px; 
  background-color: ${({ theme }) => theme.colors.card}; 
  color: ${({ theme }) => theme.colors.text}; 
  min-height: 60px; 
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

const ItemText = styled.div`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`;

const ItemValue = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary}; 
  background-color: ${({ theme }) => theme.colors.card}; 
  padding: 5px 20px; 
  border-radius: 32px; 
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text}; 
  width: 120px; 
  text-align: center; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InfoListCard;
