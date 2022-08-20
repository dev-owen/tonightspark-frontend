import { format } from 'date-fns/fp';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { AreaInformation } from '../components/AreaInformationPage';
import { creatorHashState } from '../state/creatorHashState';
import { GREEN_10, GREEN_100 } from '../utils/color';
import formatSeconds from '../utils/formatSeconds';

const fetchRemainingTime = async (mapHash: string) => {
  const res = await fetch(
    `http://54.164.45.6:8080/api/v1/collect/remain-time/${mapHash}`,
  );
  const data = await res.json();
  return data;
};

type NumberOfVisitors = {
  totalNumber: number;
  areaData: Record<string, number>;
};

const useRemainingTimeQuery = () => {
  const mapHash = useRecoilValue(creatorHashState);
  const { isLoading, data } = useQuery<NumberOfVisitors>(
    `numberOfVisitors/${mapHash}`,
    () => fetchRemainingTime(mapHash),
  );

  const areaInformation: AreaInformation = useMemo(
    () => ({
      mainColor: GREEN_100,
      subColor: GREEN_10,
      totalValue: data?.totalNumber || 0,
      title: 'Remaining Time',
      description: 'Ranking of hours users stayed in the area',
      items: Object.entries(data?.areaData || {}).reduce(
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

  return { isLoading, areaInformation };
};

export default useRemainingTimeQuery;
