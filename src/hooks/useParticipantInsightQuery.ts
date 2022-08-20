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

const fetchParticipantInsight = async (mapHash: string) => {
  //   const res = await fetch(
  //     `http://54.164.45.6:8080/api/v1/collect/area-user/${mapHash}`,
  //   );
  //   const data = await res.json();
  //   return data;
  return {
    [ROLES.GUEST]: {
      area1: {
        visitedCount: 20,
        stayTime: 12257,
      },
      area2: {
        visitedCount: 40,
        stayTime: 40,
      },
    },
    [ROLES.Member]: {
      area1: {
        visitedCount: 20,
        stayTime: 20,
      },
      area2: {
        visitedCount: 40,
        stayTime: 40,
      },
    },
    [ROLES.Staff]: {
      area1: {
        visitedCount: 20,
        stayTime: 20,
      },
      area2: {
        visitedCount: 40,
        stayTime: 40,
      },
    },
    [ROLES.Editor]: {
      area1: {
        visitedCount: 20,
        stayTime: 20,
      },
      area2: {
        visitedCount: 40,
        stayTime: 600,
      },
    },
    [ROLES.Manager]: {
      area1: {
        visitedCount: 20,
        stayTime: 20,
      },
      area2: {
        visitedCount: 40,
        stayTime: 40,
      },
    },
    [ROLES.Owner]: {
      area1: {
        visitedCount: 20,
        stayTime: 20,
      },
      area2: {
        visitedCount: 40,
        stayTime: 40,
      },
    },
  };
};


const useParticipantInsightQuery = () => {
  const mapHash = useRecoilValue(creatorHashState);
  const [filters, setFilter] = useRecoilState(filterState);
  const { isLoading, data } = useQuery(`participantInsight/${mapHash}`, () =>
    fetchParticipantInsight(mapHash),
  );

  const toggleFilter = (ff: string) => {
    if (filters.find((f) => f === ff)) {
      setFilter(filters.filter((f) => f !== ff))
    } else {
      setFilter([...filters, ff])
    }
  };

  return { isLoading, data, filters, toggleFilter };
};

export default useParticipantInsightQuery;
