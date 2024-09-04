import React, { useState } from "react";
import styled from "styled-components";

const Switch = () => {
  const [active, setActive] = useState(true); 

  const toggleSwitch = () => {
    setActive(!active); 
  };

  return (
    <SwitchContainer onClick={toggleSwitch} active={active}>
      <SwitchLabel active={active}>{active ? "Autores" : "Tópicos"}</SwitchLabel>
      <SwitchCircle active={active} />
    </SwitchContainer>
  );
};

// Estilos
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
  width: 40px;
  height: 40px;
  background-color: #6c5ecf;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.active ? "5px" : "calc(100% - 45px)")}; 
  transition: left 0.3s ease;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    left: ${(props) => (props.active ? "5px" : "calc(100% - 40px)")}; 
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    left: ${(props) => (props.active ? "5px" : "calc(100% - 35px)")}; 
  }
`;

const SwitchLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  left: ${(props) => (props.active ? "calc(100% - 80px)" : "18px")}; 
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
