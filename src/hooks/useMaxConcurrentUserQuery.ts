import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { AreaInformation } from '../components/AreaInformationPage';
import { creatorHashState } from '../state/creatorHashState';
import { GREEN_10, GREEN_100, ORANGE_10, ORANGE_100 } from '../utils/color';
import formatSeconds from '../utils/formatSeconds';

const fetchMaxConcurrentUserCount = async (mapHash: string) => {
  const res = await fetch(
    `https://zepi-next.vercel.app/api/v1/collect/concurrent/${mapHash}`,
  );
  const data = await res.json();
  return data;
};

const useMaxConcurrentUserQuery = () => {
  const mapHash = useRecoilValue(creatorHashState);
  const { isLoading, data } = useQuery<number>(
    `maxConcurrentUser/${mapHash}`,
    () => fetchMaxConcurrentUserCount(mapHash),
  );

  return { isLoading, maxConcurrentUserCount: data };
};

export default useMaxConcurrentUserQuery;
