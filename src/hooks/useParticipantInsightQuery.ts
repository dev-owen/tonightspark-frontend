import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AreaInformation } from '../components/AreaInformationPage';
import { creatorHashState } from '../state/creatorHashState';
import { formatNumber } from '../utils/number';
import {
  BLUE_10,
  BLUE_100,
  GREEN_100,
  INDIGO_10,
  INDIGO_100,
  ORANGE_100,
  PURPLE_100,
  YELLOW_100,
} from '../utils/color';
import { GREEN_10, ORANGE_10, PURPLE_10, YELLOW_10 } from '../utils/color';
import { filterState, ROLES } from '../state/filterState';

export const ROLE_COLORS = {
  [ROLES['GUEST']]: { on: INDIGO_100, off: INDIGO_10 },
  [ROLES['Member']]: { on: PURPLE_100, off: PURPLE_10 },
  [ROLES['Staff']]: { on: GREEN_100, off: GREEN_10 },
  [ROLES['Editor']]: { on: BLUE_100, off: BLUE_10 },
  [ROLES['Manager']]: { on: YELLOW_100, off: YELLOW_10 },
  [ROLES['Owner']]: { on: ORANGE_100, off: ORANGE_10 },
};
export const ROLE_CODES = {
  '-1': ROLES['GUEST'],
  '0': ROLES['Member'],
  '1000': ROLES['Staff'],
  '2000': ROLES['Editor'],
  '3000': ROLES['Manager'],
  '3001': ROLES['Owner'],
};

type ROLE_CODE = '-1' | '0' | '1000' | '2000' | '3000' | '3001';
type RawParticipantInsightResult = {
  authorityName: ROLE_CODE;
  mapData: Record<string, [{ time: number; count: number }]>;
}[];

const fetchParticipantInsight = async (mapHash: string) => {
  // return JSON.parse('[{"authorityName":"1000","mapData":{"CHAIN":[{"time":0,"count":0}],"testarea":[{"time":0,"count":0}],"ZEP":[{"time":0,"count":0}],"MS":[{"time":0,"count":0}],"area1":[{"time":0,"count":100}],"area2":[{"time":0,"count":40}],"NONE":[{"time":0,"count":0}],"AWS":[{"time":0,"count":0}],"JUNCTION":[{"time":0,"count":0}]}},{"authorityName":"3000","mapData":{"CHAIN":[{"time":0,"count":0}],"testarea":[{"time":0,"count":0}],"ZEP":[{"time":0,"count":0}],"MS":[{"time":0,"count":0}],"area1":[{"time":0,"count":0}],"area2":[{"time":0,"count":60}],"NONE":[{"time":0,"count":0}],"AWS":[{"time":0,"count":0}],"JUNCTION":[{"time":0,"count":0}]}},{"authorityName":"3001","mapData":{"CHAIN":[{"time":19,"count":159}],"testarea":[{"time":0,"count":0}],"ZEP":[{"time":16,"count":145}],"MS":[{"time":23,"count":6}],"area1":[{"time":0,"count":109}],"area2":[{"time":0,"count":0}],"NONE":[{"time":81,"count":195}],"AWS":[{"time":14,"count":0}],"JUNCTION":[{"time":14,"count":25}]}},{"authorityName":"2000","mapData":{"CHAIN":[{"time":0,"count":0}],"testarea":[{"time":0,"count":0}],"ZEP":[{"time":0,"count":0}],"MS":[{"time":0,"count":0}],"area1":[{"time":0,"count":3}],"area2":[{"time":0,"count":0}],"NONE":[{"time":0,"count":0}],"AWS":[{"time":0,"count":0}],"JUNCTION":[{"time":0,"count":0}]}},{"authorityName":"-1","mapData":{"CHAIN":[{"time":8,"count":4}],"testarea":[{"time":0,"count":0}],"ZEP":[{"time":20,"count":959}],"MS":[{"time":17,"count":0}],"area1":[{"time":0,"count":60}],"area2":[{"time":0,"count":0}],"NONE":[{"time":66,"count":942}],"AWS":[{"time":11,"count":1}],"JUNCTION":[{"time":8,"count":3}]}},{"authorityName":"0","mapData":{"CHAIN":[{"time":0,"count":0}],"testarea":[{"time":0,"count":0}],"ZEP":[{"time":0,"count":0}],"MS":[{"time":0,"count":0}],"area1":[{"time":0,"count":1}],"area2":[{"time":0,"count":60}],"NONE":[{"time":0,"count":0}],"AWS":[{"time":0,"count":0}],"JUNCTION":[{"time":0,"count":0}]}}]')
  const res = await fetch(
    `https://zepi-next.vercel.app/api/v1/page1/${mapHash}`,
  );
  const data = await res.json();
  return data;
};

const useParticipantInsightQuery = () => {
  const mapHash = useRecoilValue(creatorHashState);
  const [filters, setFilter] = useRecoilState(filterState);
  const { isLoading, data } = useQuery<RawParticipantInsightResult>(
    `participantInsight/${mapHash}`,
    () => fetchParticipantInsight(mapHash),
  );

  const toggleFilter = (ff: string) => {
    if (filters.find((f) => f === ff)) {
      setFilter(filters.filter((f) => f !== ff));
    } else {
      setFilter([...filters, ff]);
    }
  };

  return { isLoading, data, filters, toggleFilter };
};

export default useParticipantInsightQuery;
