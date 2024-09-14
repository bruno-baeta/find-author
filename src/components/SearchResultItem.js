import React from "react";
import { useNavigate } from "react-router-dom"; 
import styled from "styled-components";
import profileIcon from "../assets/ic_search_list_icon.svg";

const SearchResultItem = ({ name, publications, citations, authorId, onItemClick }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    onItemClick();
    navigate(`/author/${authorId}`);
  };

  return (
    <ItemContainer onClick={handleItemClick}>
      <ProfileImage src={profileIcon} alt="Profile" />
      <Details>
        <Name>{name}</Name>
        <Stats>
          <Stat>{publications} Publicações</Stat>
          <Stat>{citations} Citações</Stat>
        </Stats>
      </Details>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.card};
  padding: 15px 6px 15px 0px;
  height: 40px; 
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer; 
  
  &:hover {
    background-color: ${(props) => props.theme.colors.background};
    color: #FFFFFF;
    
    button {
      background: #FFFFFF; 
      color: #6C5ECF;
    }
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Name = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

const Stats = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    display: none; 
  }
`;

const Stat = styled.div`
  background: linear-gradient(90deg, #6C5ECF 0%, #6B8AEB 100%);
  color: #fff;
  padding: 5px 15px;
  border-radius: 24px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: bold;
  min-width: 130px;
  text-align: center;
`;

export default SearchResultItem;
