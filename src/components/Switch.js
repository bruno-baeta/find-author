import React from "react";
import styled from "styled-components";

const Switch = ({ isActive, onToggle }) => {

  const toggleSwitch = () => {
    onToggle(!isActive); 
  };

  return (
    <SwitchContainer onClick={toggleSwitch} active={isActive}>
      <SwitchLabel active={isActive}>{isActive ? "Tópicos" : "Autores"}</SwitchLabel>
      <SwitchCircle active={isActive} />
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252836;
  border: 2px solid #6c5ecf;
  padding: 20px 60px;
  border-radius: 24px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 130px;
    height: 45px;
    padding: 15px 50px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 40px;
    padding: 10px 40px;
  }
`;

const SwitchCircle = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.theme.colors.gradient};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.active ? "10px" : "calc(100% - 42px)")};
  transition: left 0.3s ease;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    left: ${(props) => (props.active ? "5px" : "calc(100% - 35px)")};
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    left: ${(props) => (props.active ? "5px" : "calc(100% - 30px)")};
  }
`;

const SwitchLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  left: ${(props) => (props.active ? "calc(100% - 85px)" : "18px")};
  transition: left 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
    left: ${(props) => (props.active ? "calc(100% - 70px)" : "15px")};
  }

  @media (max-width: 480px) {
    font-size: 12px;
    left: ${(props) => (props.active ? "calc(100% - 60px)" : "12px")};
  }
`;

export default Switch;
