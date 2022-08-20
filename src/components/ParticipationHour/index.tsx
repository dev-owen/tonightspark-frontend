import React, { useEffect, useState } from 'react';
import * as $ from './style';
import { data } from '../../data/hourOverall';
import { OverallChartContainer, RateBoxItem } from './style';

const ParticipationHour = () => {
  const [minMax, setMinMax] = useState<{ min: number; max: number }>({
    min: 0,
    max: 100,
  });

  useEffect(() => {
    data.forEach((data) => {
      setMinMax((prevState) => ({
        min: Math.min(prevState.min, data.value),
        max: Math.max(prevState.max, data.value),
      }));
    });
  }, [data]);

  const convertTimeName = (time: string) => {
    switch (time) {
      case '12:00':
        return 'Noon';
      case '00:00':
      case '24:00':
        return 'Midnight';
      default:
        return time;
    }
  };

  return (
    <$.Wrapper>
      <div className="titleContainer">
        <p>
          <span className="countNumber boldTitle">480,864</span>
          <span className="boldTitle">Total Visits</span>
        </p>
        <p className="description">Participants count during the event</p>
      </div>
      <$.OverallAreaHourChartContainer>
        <div className="overallLabel">Overall</div>
        <$.OverallChartContainer>
          {data.map((data, index) => (
            <div key={index}>
              <div
                className={`overallTimeLabel ${index % 2 === 1 ? 'hide' : ''}`}
              >
                {index % 2 === 0 ? convertTimeName(data.time) : '-'}
              </div>
              <$.RateBoxItem
                percentage={
                  ((data.value - minMax.min) * 100) / (minMax.max - minMax.min)
                }
              />
            </div>
          ))}
        </$.OverallChartContainer>
      </$.OverallAreaHourChartContainer>
    </$.Wrapper>
  );
};

export default ParticipationHour;
