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
      <ListContainer>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
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
  border-radius: 24px; 
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-height: 380px; 
  min-height: 380px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin-bottom: 22px;

  @media (max-width: 768px) {
    padding: 20px 15px 10px 15px;
    max-height: 320px;
    min-height: 320px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 10px 15px;
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
  overflow-y: auto;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary}; 
  border-radius: 32px; 
  background-color: ${({ theme }) => theme.colors.card}; 
  color: ${({ theme }) => theme.colors.text}; 
  min-height: 60px; 

  @media (max-width: 768px) {
    padding: 8px;
    min-height: 55px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    min-height: 50px;
  }
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

const ItemText = styled.div`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
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

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 16px;
    width: 140px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 3px 12px;
    min-width: 100px;
    max-width: 100px;
    white-space: pre-line;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default InfoListCard;
