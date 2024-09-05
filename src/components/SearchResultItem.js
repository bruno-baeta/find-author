import React from "react";
import styled from "styled-components";
import profileIcon from "../assets/ic_search_list_icon.svg";

const SearchResultItem = ({ name, publications, citations, onItemClick, onPublicationClick, onCitationClick }) => {
  return (
    <ItemContainer onClick={onItemClick}>
      <ProfileImage src={profileIcon} alt="Profile" />
      <Details>
        <Name>{name}</Name>
        <Stats>
          <StatButton onClick={(e) => { e.stopPropagation(); onPublicationClick(); }}>
            {publications} Publicações
          </StatButton>
          <StatButton onClick={(e) => { e.stopPropagation(); onCitationClick(); }}>
            {citations} Citações
          </StatButton>
        </Stats>
      </Details>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 15px 6px 15px 0px;
  height: 40px; 
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer; 
  
  &:hover {
    background-color: #A17CFF;
    color: #FFFFFF;
    
    button {
      background: #FFFFFF; 
      color: #6C5ECF;
    }
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
`;

const StatButton = styled.button`
  background: linear-gradient(90deg, #6C5ECF 0%, #6B8AEB 100%);
  color: #fff;
  padding: 5px 15px;
  border: none;
  border-radius: 24px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  min-width: 130px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export default SearchResultItem;
