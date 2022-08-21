import React, { useEffect, useState } from 'react';
import * as $ from './style';
import HourAreaChart from '../HourAreaChart';
import { BLUE_100, INDIGO_10, INDIGO_100, ORANGE_100 } from '../../utils/color';
import Badge from '../Badge';
import { formatNumber } from '../../utils/number';
import { HeaderContainer, HeaderDescription, HeaderTitle } from '../Header';
import { useRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';

export interface TimeDataInterface {
  time: number;
  count: number;
}

interface AreaDataInterface {
  areaName: string;
  timeCountList: TimeDataInterface[];
}

const ParticipationHour = () => {
  const [hash, setHash] = useRecoilState(creatorHashState);
  const [overallData, setOverallData] = useState<TimeDataInterface[]>([]);
  const [areaData, setAreaData] = useState<AreaDataInterface[]>([]);

  const [minMax, setMinMax] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  const fetchPage2 = async (path: string) => {
    return await fetch(`https://zepi-next.vercel.app/api/v1/page2/${path}`).then(
      (res) => res.json(),
    );
  };

  useEffect(() => {
    if (!hash) return

    Promise.all([
      fetchPage2(`total-visit/${hash}`).then((res) => {
        if (res) setOverallData([...res]);
      }),
      fetchPage2(`chart-area/${hash}`).then((res) => {
        if (res) setAreaData([...res]);
      }),
    ]);
  }, [hash]);

  useEffect(() => {
    overallData.forEach((data) => {
      setMinMax((prevState) => ({
        min: Math.min(prevState.min, data.count),
        max: Math.max(prevState.max, data.count),
      }));
    });
  }, [overallData]);

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
        <HeaderTitle>
          <Badge color={INDIGO_100} backgroundColor={INDIGO_10}>
            {formatNumber(480864)}
          </Badge>
          Total Visits
        </HeaderTitle>
        <HeaderDescription>
          Participants count during the event
        </HeaderDescription>
      </HeaderContainer>
      <$.OverallAreaHourChartContainer>
        <div className="overallLabel">Overall</div>
        <$.OverallChartContainer>
          {overallData.map((data, index) => (
            <div key={index}>
              <div
                className={`overallTimeLabel ${index % 2 === 1 ? 'hide' : ''}`}
              >
                {index % 2 === 0
                  ? convertTimeName(String(data.time) + ':00')
                  : '-'}
              </div>
              <$.RateBoxItem
                percentage={
                  ((data.count - minMax.min) * 100) / (minMax.max - minMax.min)
                }
              />
            </div>
          ))}
        </$.OverallChartContainer>
      </$.OverallAreaHourChartContainer>
      {areaData.map((area, index) => {
        return (
          <HourAreaChart
            key={`area-${index}`}
            label={area.areaName}
            data={area.timeCountList}
            color={index % 2 == 0 ? BLUE_100 : ORANGE_100}
          />
        );
      })}
    </$.Wrapper>
  );
};

export default ParticipationHour;
