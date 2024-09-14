import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchRandomTopics } from '../services/TopicService';

const LabelSelector = ({ onSelect, selectedLabel }) => {
  const [labels, setLabels] = useState([]);
  const [currentLabel, setCurrentLabel] = useState('');
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const loadRandomTopics = async () => {
      if (hasFetched) return;

      const topics = await fetchRandomTopics();
      if (topics.length > 0) {
        setLabels(topics);
        setCurrentLabel(topics[0].display_name);
        onSelect(topics[0].display_name);
      }
      setHasFetched(true);
    };

    loadRandomTopics(); 
  }, [onSelect, hasFetched]);

  useEffect(() => {
    if (selectedLabel) {
      setCurrentLabel(selectedLabel);
    }
  }, [selectedLabel]);

  return (
    <LabelContainer>
      {labels.map((label) => (
        <Label
          key={label.id}
          isSelected={label.display_name === currentLabel}
          onClick={() => {
            onSelect(label.display_name);
            setCurrentLabel(label.display_name);
          }}
        >
          {label.display_name}
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
  background: ${({ isSelected, theme }) => isSelected ? theme.colors.gradient : "#252836"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isSelected }) => isSelected ? "#6C5ECF" : "#3b3f54"};
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
