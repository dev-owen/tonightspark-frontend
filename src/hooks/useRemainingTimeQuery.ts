import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { AreaInformation } from '../components/AreaInformationPage';
import { creatorHashState } from '../state/creatorHashState';
import { GREEN_10, GREEN_100, ORANGE_10, ORANGE_100 } from '../utils/color';
import formatSeconds from '../utils/formatSeconds';

const fetchRemainingTime = async (mapHash: string) => {
  const res = await fetch(
    `http://54.164.45.6:8080/api/v1/collect/remain-time/${mapHash}`,
  );
  const data = await res.json();
  return data;
};

type NumberOfVisitors = {
  bounce: {
    totalNumber: number;
    areaData: Record<string, number>;
  },
  remain: {
    totalNumber: number;
    areaData: Record<string, number>;
  }
};

const useRemainingTimeQuery = () => {
  const mapHash = useRecoilValue(creatorHashState);
  const { isLoading, data } = useQuery<NumberOfVisitors>(
    `numberOfVisitors/${mapHash}`,
    () => fetchRemainingTime(mapHash),
  );

  const remainInfo: AreaInformation = useMemo(
    () => ({
      mainColor: GREEN_100,
      subColor: GREEN_10,
      totalValue: data?.remain.totalNumber || 0,
      title: 'Remaining Time',
      description: 'Ranking of hours users stayed in the area',
      items: Object.entries(data?.remain.areaData || {}).reduce(
        (acc: AreaInformation['items'], [label, value]) => [
          ...acc,
          { label, value },
        ],
        [],
      ),
      valueFormatter: (value: number) => formatSeconds(value),
    }),
    [data],
  );


  const bounceInfo: AreaInformation = useMemo(
    () => ({
      mainColor: ORANGE_100,
      subColor: ORANGE_10,
      totalValue: data?.bounce.totalNumber || 0,
      title: 'Bounce Rate',
      description: 'Number of users who left immediately',
      items: Object.entries(data?.bounce.areaData || {}).reduce(
        (acc: AreaInformation['items'], [label, value]) => [
          ...acc,
          { label, value },
        ],
        [],
      ),
      valueFormatter: (value: number) => `${value}%`,
    }),
    [data],
  );

  return { isLoading, remainInfo, bounceInfo };
};

export default useRemainingTimeQuery;
