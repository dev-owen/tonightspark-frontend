import styled from 'styled-components';
import {
  GRAY_400,
  GRAY_500,
  GRAY_800,
  GREEN_100,
  INDIGO_10,
  INDIGO_100,
  RATE_100,
  RATE_200,
  RATE_300,
  RATE_400,
  WHITE,
} from '../../utils/color';

export const Wrapper = styled.div`
  width: 100%;

  p {
    margin: 8px 0;
  }

  .titleContainer {
    text-align: left;
    margin: 112px 120px 40px;

    p {
      display: flex;
      align-items: center;
      div {
        margin: auto 0;
      }
    }
    .boldTitle {
      font-size: 28px;
      font-weight: 800;
      color: ${GRAY_800};
    }

    .countNumber {
      color: ${INDIGO_100};
      background-color: ${INDIGO_10};
      border-radius: 8px;
      padding: 8px 16px;
      margin-right: 16px;
    }

    .description {
      font-size: 20px;
      font-weight: 400;
      color: ${GRAY_500};
      margin-top: 20px;
    }
  }
`;

export const OverallAreaHourChartContainer = styled.div`
  width: 1460px;
  height: 240px;
  box-sizing: border-box;
  background-color: ${WHITE};
  border-radius: 24px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 80px;

  scale: 0.86;
  margin-left: 0;
  margin-top: 44px;

  .overallLabel {
    font-size: 16px;
    font-weight: 800;
    background-color: ${GREEN_100};
    color: ${WHITE};
    border-radius: 20px;
    padding: 8px 16px;
    width: fit-content;
  }
`;

export const OverallChartContainer = styled.div`
  display: flex;

  .overallTimeLabel {
    font-size: 16px;
    font-weight: 400;
    color: ${GRAY_400};
    margin-bottom: 24px;
  }

  .hide {
    color: ${WHITE};
  }
`;

export const RateBoxItem = styled.div<{ percentage: number }>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  margin: 0 10px;
  background-color: ${(props) => {
    if (props.percentage < 25) return `${RATE_100}`;
    else if (props.percentage < 50) return `${RATE_200}`;
    else if (props.percentage < 75) return `${RATE_300}`;
    else return `${RATE_400}`;
  }};
`;
