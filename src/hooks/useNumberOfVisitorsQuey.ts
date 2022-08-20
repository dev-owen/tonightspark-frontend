import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { AreaInformation } from '../components/AreaInformationPage';
import { creatorHashState } from '../state/creatorHashState';
import { BLUE_10, BLUE_100 } from '../utils/color';
import { formatNumber } from '../utils/number';

const fetchUseNumberOfVisitors = async (mapHash: string) => {
  const res = await fetch(
    `https://zepi-next.vercel.app/api/v1/page3/area-user/${mapHash}`,
  );
  const data = await res.json();
  return data;
};

type NumberOfVisitors = {
  totalNumber: number;
  areaData: Record<string, number>;
};

const useNumberOfVisitorsQuey = () => {
  const mapHash = useRecoilValue(creatorHashState);
  const { isLoading, data } = useQuery<NumberOfVisitors>(
    `numberOfVisitors/${mapHash}`,
    () => fetchUseNumberOfVisitors(mapHash),
    // {
    //   refetchInterval: 5000
    // }
  );

  const visitorInfo: AreaInformation = useMemo(
    () => ({
      mainColor: BLUE_100,
      subColor: BLUE_10,
      totalValue: data?.totalNumber || 0,
      title: 'Number of Visitors',
      description: 'Number of users who visited the area',
      items: Object.entries(data?.areaData || {}).reduce(
        (acc: AreaInformation['items'], [label, value]) => [
          ...acc,
          { label, value },
        ],
        [],
      ),
      valueFormatter: (value: number) => formatNumber(value),
    }),
    [data],
  );

  return { isLoading, visitorInfo };
};

export default useNumberOfVisitorsQuey;
