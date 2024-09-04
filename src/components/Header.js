import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Find Author</h1>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
  height: 70px;
  background-color: ${(props) => props.theme.colors.card}; 
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif; 
    font-size: 24px; 
    font-weight: bold; 
    margin: 20px 40px;
    color: ${(props) => props.theme.colors.text}; 
  }

  @media (max-width: 768px) {
    height: 60px; 
    
    h1 {
      font-size: 20px;
      margin: 10px 20px; 
    }
  }

  @media (max-width: 480px) {
    height: 50px;
    
    h1 {
      font-size: 18px; 
      margin: 10px 16px; 
    }
  }
`;

export default Header;
