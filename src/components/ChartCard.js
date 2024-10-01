import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartCardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  padding: 20px;
  border-radius: 24px; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 10px 15px;
  }
`;

const ChartTitle = styled.h2`
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

const ChartSubtitle = styled.h1`
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

const ChartCanvas = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  canvas {
    width: 100%;
    height: auto;
    max-height: 380px;
  }

  @media (max-width: 1600px) {
    canvas {
      max-height: 280px;
    }
  }

  @media (max-width: 768px) {
    canvas {
      max-height: 220px;
    }
  }

  @media (max-width: 480px) {
    canvas {
      max-height: 180px;
    }
  }
`;

const ChartCard = ({ labels, dataPoints, title, subtitle }) => {
  const chartRef = useRef(null);

  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: dataPoints,
        backgroundColor: [],
        borderRadius: 4,
        barPercentage: 1,
        categoryPercentage: 0.6,
      },
    ],
  };

  const getGradient = (ctx, bar) => {
    const gradient = ctx.createLinearGradient(bar.x - bar.width / 2, 0, bar.x + bar.width / 2, 0);
    gradient.addColorStop(0, "#A36BFD");
    gradient.addColorStop(1, "#6B8AEB");
    return gradient;
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const chartInstance = chart;
    const ctx = chartInstance.ctx;
    const bars = chartInstance.getDatasetMeta(0).data;

    if (bars) {
      chartInstance.data.datasets[0].backgroundColor = bars.map((bar) => getGradient(ctx, bar));
      chartInstance.update();
    }
  }, [dataPoints]);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        borderColor: '#fff',
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: (context) => {
            if (context.tick.value === 0) {
              return '#fff';
            }
            return 'transparent';
          },
        },
        border: {
          display: true,
          color: '#fff',
        },
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
      },
    },
  };

  return (
    <ChartCardWrapper>
      <ChartTitle>{title}</ChartTitle>
      <ChartSubtitle>{subtitle}</ChartSubtitle>
      <ChartCanvas>
        <Bar ref={chartRef} data={data} options={options} />
      </ChartCanvas>
    </ChartCardWrapper>
  );
};

export default ChartCard;
