import React from 'react';
import * as $ from './style';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export interface TimeDataInterface {
  time: string;
  value: number;
}

interface HourAreaChartPropsInterface {
  data: TimeDataInterface[];
  label: string;
  color: string;
}

const HourAreaChart = ({ data, label, color }: HourAreaChartPropsInterface) => {
  const chartData = {
    labels: data.map((data) => data.time),
    datasets: [
      {
        label: `${label} line chart`,
        data: data.map((data) => data.value),
        fill: false,
        borderColor: color,
        pointStyle: 'rectDot',
      },
    ],
    // TODO - grid line 삭제
  };

  return (
    <$.Wrapper color={color}>
      <label>{label}</label>
      <Line data={chartData} />
    </$.Wrapper>
  );
};

export default HourAreaChart;
