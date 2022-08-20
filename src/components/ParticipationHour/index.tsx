import React, { useEffect, useState } from 'react';
import * as $ from './style';
import { data } from '../../data/hourValue';
import HourAreaChart from '../HourAreaChart';
import { BLUE_100, INDIGO_10, INDIGO_100, ORANGE_100 } from '../../utils/color';
import Badge from '../Badge';
import { formatNumber } from '../../utils/number';
import { HeaderContainer, HeaderDescription, HeaderTitle } from '../Header';

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
        <HeaderContainer marginLeft="80px">
          <HeaderTitle><Badge color={INDIGO_100} backgroundColor={INDIGO_10}>
            {formatNumber(480864)}
          </Badge>Total Visits</HeaderTitle>
          <HeaderDescription>Participants count during the event</HeaderDescription>
        </HeaderContainer>
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
      <HourAreaChart label="Area 1" data={data} color={BLUE_100} />
      <HourAreaChart label="Area 2" data={data} color={ORANGE_100} />
    </$.Wrapper>
  );
};

export default ParticipationHour;
