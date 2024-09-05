import React, { useState } from "react";
import styled from "styled-components";

const LabelSelector = ({ onSelect }) => {
  const labels = [
    "Deep Learning", "Quantum Computing", "Neurobiology", "Microbiology", "Data Science",
    "Biotechnology", "Antropologia Cultural", "Econometrics", "Comunicação Digital",
    "Educação Inclusiva", "Filosofia Política", "Chemistry"
  ];

  const [selectedLabel, setSelectedLabel] = useState(labels[0]);

  const getVisibleLabels = () => {
    if (window.innerWidth < 768) {
      return labels.slice(0, 5);
    }
    return labels;
  };

  const [visibleLabels, setVisibleLabels] = useState(getVisibleLabels());

  window.addEventListener("resize", () => setVisibleLabels(getVisibleLabels()));

  return (
    <LabelContainer>
      {visibleLabels.map((label) => (
        <Label
          key={label}
          isSelected={label === selectedLabel}
          onClick={() => {
            onSelect(label);
            setSelectedLabel(label);
          }}
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

  @media (max-width: 768px) {
    margin: 0 15px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    margin: 0 10px;
    gap: 6px;
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
  background: ${(props) =>
    props.isSelected ? props.theme.colors.gradient : "#252836"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? "#6C5ECF" : "#3b3f54"};
  }

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? "#6C5ECF" : "#3b3f54"};
  }

  @media (max-width: 768px) {
    padding: 6px 12px; 
    font-size: 11px;
    height: 40px; 
  }

  @media (max-width: 480px) {
    padding: 4px 10px; 
    font-size: 10px;
    height: 30px; 
  }
`;

export default LabelSelector;
