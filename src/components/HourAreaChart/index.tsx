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
import { TimeDataInterface } from '../ParticipationHour';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface HourAreaChartPropsInterface {
  data: TimeDataInterface[];
  label: string;
  color: string;
}

const HourAreaChart = ({ data, label, color }: HourAreaChartPropsInterface) => {
  const chartData = {
    labels: data.map((data) => `${String(data.time)}:00`),
    datasets: [
      {
        label: `${label} line chart`,
        data: data.map((data) => data.count),
        fill: false,
        borderColor: color,
        pointStyle: 'rectDot',
      },
    ],
  };

  return (
    <$.Wrapper color={color}>
      <label>{label}</label>
      <Line data={chartData} />
    </$.Wrapper>
  );
};

export default HourAreaChart;
