import styled from 'styled-components';
import useNumberOfVisitorsQuey from '../../hooks/useNumberOfVisitorsQuey';
import useRemainingTimeQuery from '../../hooks/useRemainingTimeQuery';
import { GRAY_700 } from '../../utils/color';
import Badge from '../Badge';
import BoxContainer from '../BoxContainer';
import { HeaderContainer, HeaderDescription, HeaderTitle } from '../Header';
import MiniLabel from '../MiniLabel';

export type AreaInformation = {
  mainColor: string;
  subColor: string;
  totalValue: number;
  title: string;
  description: string;
  items: { label: string; value: number }[];
  valueFormatter: (value: number) => string;
};

const AreaInformationPage = () => {
  const numberOfVisitorsQuery = useNumberOfVisitorsQuey();
  const remainingTimeQuery = useRemainingTimeQuery();

  return (
    <Layout>
      {[
        numberOfVisitorsQuery.visitorInfo,
        remainingTimeQuery.remainInfo,
        remainingTimeQuery.bounceInfo,
      ].map((info, index) => (
        <Group key={index}>
          <HeaderContainer>
            <Badge color={info.mainColor} backgroundColor={info.subColor}>
              {info.valueFormatter(info.totalValue)}{info.title==='Bounce Rate' ? ' avg' :''}
            </Badge>
            <HeaderTitle>{info.title}</HeaderTitle>
            <HeaderDescription>{info.description}</HeaderDescription>
          </HeaderContainer>
          <BoxContainer
            backgroundColor={info.subColor}
            margin="40px 0 0 0"
            padding="24px 20px"
          >
            {info.items.sort((a, b) => {
              if (a.label === 'NONE') return 1
              if (b.label === 'NONE') return -1
              return b.value - a.value
            }).map((item, itemIndex) => (
              <Item key={itemIndex}>
                <MiniLabel margin="0 0 0 16px" backgroundColor={info.mainColor}>
                  {item.label}
                </MiniLabel>
                <ItemValue>{info.valueFormatter(item.value)}</ItemValue>
              </Item>
            ))}
          </BoxContainer>
        </Group>
      ))}
    </Layout>
  );
};

export default AreaInformationPage;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 52px;
  flex-direction: row;
  margin: 0 auto;
`;
const Group = styled.div``;

const Item = styled.div`
  background: white;
  border-radius: 24px;
  width: auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemValue = styled.div`
  margin-right: 24px;
  color: ${GRAY_700};
  font-size: 24px;
  font-weight: 600;
`;
