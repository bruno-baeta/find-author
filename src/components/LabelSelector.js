import React, { useState } from "react";
import styled from "styled-components";

const LabelSelector = () => {
  const labels = [
    "Deep Learning", "Quantum Computing", "Neurobiology", "Microbiology", "Data Science",
    "Biotechnology", "Deep Antropologia Cultural", "Econometrics", "Comunicação Digital",
    "Educação Inclusiva", "Filosofia Política", "Chemistry"
  ];

  const [selectedLabel, setSelectedLabel] = useState("Deep Learning");

  return (
    <LabelContainer>
      {labels.map((label) => (
        <Label
          key={label}
          isSelected={label === selectedLabel}
          onClick={() => setSelectedLabel(label)}
        >
          {label}
        </Label>
      ))}
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 40px;

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    margin: 0 20px; 
    gap: 12px; 
  }

  @media (max-width: 480px) {
    margin: 0 10px; 
    gap: 8px; 
  }
`;

const Label = styled.div`
  height: 50px; 
  padding: 0 20px; 
  display: flex;
  align-items: center; 
  border-radius: 24px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold; 
  color: #ffffff; 
  background-color: ${(props) =>
    props.isSelected ? "#6C5ECF" : "#252836"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? "#6C5ECF" : "#3b3f54"};
  }

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    height: 45px;
    font-size: 13px; 
    padding: 0 16px; 
  }

  @media (max-width: 480px) {
    height: 40px; 
    font-size: 12px; 
    padding: 0 12px; 
  }
`;

export default LabelSelector;
