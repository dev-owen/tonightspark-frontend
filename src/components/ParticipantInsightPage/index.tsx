import styled, { CSSProperties } from 'styled-components';
import useMaxConcurrentUserQuery from '../../hooks/useMaxConcurrentUserQuery';
import useParticipantInsightQuery, {
  ROLE_CODES,
  ROLE_COLORS,
} from '../../hooks/useParticipantInsightQuery';
import { ROLES } from '../../state/filterState';
import {
  BLUE_100,
  GRAY_100,
  GRAY_600,
  GRAY_700,
  GREEN_100,
  INDIGO_10,
  INDIGO_100,
  ORANGE_100,
  PURPLE_100,
  YELLOW_100,
} from '../../utils/color';
import formatSeconds from '../../utils/formatSeconds';
import { formatNumber } from '../../utils/number';
import Badge from '../Badge';
import BigLabel from '../BigLabel';
import BoxContainer from '../BoxContainer';
import Divider from '../Divider';
import { HeaderContainer, HeaderDescription, HeaderTitle } from '../Header';
import MiniLabel from '../MiniLabel';

const LOOP_COLORS = [
  INDIGO_100,
  PURPLE_100,
  ORANGE_100,
  YELLOW_100,
  BLUE_100,
  GREEN_100,
];

const ParticipantInsightPage = () => {
  const { data, filters, toggleFilter, participantInsights } = useParticipantInsightQuery();
  const maxConcurrentUserQuery = useMaxConcurrentUserQuery()

  return (
    <Layout>
      <HeaderContainer marginLeft="80px">
        <HeaderTitle>
          <Badge color={INDIGO_100} backgroundColor={INDIGO_10}>
            {formatNumber(maxConcurrentUserQuery?.maxConcurrentUserCount || 0)}
          </Badge>
          Concurrent Connectors User
        </HeaderTitle>
        <HeaderDescription>Most highest value of CCU</HeaderDescription>
      </HeaderContainer>
      <Divider height="1px" width="calc(100%-160px)" margin="60px 80px" />
      <HeaderContainer marginTop="0" marginLeft="80px">
        <HeaderTitle>Statistics by User Type</HeaderTitle>
        <HeaderDescription>
          Check behavior data by click participant type button
        </HeaderDescription>
      </HeaderContainer>
      <LabelList>
        {Object.keys(ROLES).map((role) => (
          <BigLabel
            backgroundColor={
              participantInsights[role]?.hasData ?
                filters.some((filter) => filter === role)
                  ? ROLE_COLORS[role].on
                  : ROLE_COLORS[role].off : ROLE_COLORS[role].off
            }
            key={role}
            onClick={participantInsights[role]?.hasData ? () => toggleFilter(role) : () => { }}
          >
            {role}
          </BigLabel>
        ))}
      </LabelList>
      <Group>
        {Object.values(participantInsights)?.filter(({ role }) => filters.some((filter) => filter === role)).filter(({ hasData }) => hasData)
          .map(({ role, mapData }) => (
            <BoxContainer backgroundColor={'white'} width="500px" key={role}>
              <>
                <ItemTitle>
                  <Bar color={ROLE_COLORS[role].on} /> {role}
                </ItemTitle>
                {mapData &&
                  Object.entries(mapData)
                    .filter(([_, [{ time, count }]]) => time !== 0 || count !== 0)
                    .map(
                      ([area, [{ time, count }]], index) => (
                        <Item key={index}>
                          <MiniLabel
                            backgroundColor={
                              LOOP_COLORS[index % LOOP_COLORS.length]
                            }
                          >
                            {area}
                          </MiniLabel>
                          <ItemValue>
                            <span>Enter:</span>
                            {count}
                          </ItemValue>
                          <ItemValue>
                            <span>Stay Time:</span>
                            {formatSeconds(time)}
                          </ItemValue>
                        </Item>
                      ),
                    )}
              </>
            </BoxContainer>
          ))}
      </Group>
    </Layout>
  );
};

export default ParticipantInsightPage;

const Layout = styled.div`
  width: 100%;
`;
const LabelList = styled.div`
  margin: 40px 0 60px 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Bar = styled.div<{ color: CSSProperties['color'] }>`
  width: 4px;
  height: 32px;
  background: ${({ color }) => color};
  border-radius: 4px;
`;
const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${GRAY_700};
  font-weight: 800;
  margin-bottom: 12px;
  div {
    margin-right: 16px;
  }
`;
const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin: 0 80px;
`;
const Item = styled.div`
  display: flex;
  div {
    margin-right: 24px;
  }
`;
const ItemValue = styled.span`
  font-size: 20px;
  margin-right: 32px;
  color: ${GRAY_600};
  margin-top: 6px;

  span {
    color: ${GRAY_700};
    font-weight: 600;
    margin-right: 8px;
  }
`;
