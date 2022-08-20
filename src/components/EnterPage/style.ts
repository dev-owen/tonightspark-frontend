import styled from 'styled-components';
import {
  GRAY_100,
  GRAY_300,
  GRAY_50,
  GRAY_700,
  GRAY_800,
} from '../../utils/color';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: ${GRAY_800};
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const EnterCardContainer = styled.div<{ isVerified?: boolean }>`
  width: 720px;
  height: 600px;
  background-color: ${GRAY_50};
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;

  .enterCardItem {
    border: 1px solid ${GRAY_700};
    height: fit-content;
    margin: auto;

    p {
      margin: 8px 0;
    }

    p.titleText {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 28px;
    }

    div.inputItem {
      input.enterInput {
        margin-top: 92px;
        width: 550px;
        height: 56px;
        border-radius: 28px;
        border: 1px solid ${GRAY_100};
        font-size: 20px;
        font-weight: 600;
        padding: 18px 67px;
        box-sizing: border-box;
        background-color: ${GRAY_50};

        ::placeholder {
          color: ${GRAY_300};
        }
      }

      .dot {
        height: 56px;
        width: 56px;
        background-color: ${GRAY_50};
        border-radius: 50%;
        display: inline-block;
        margin: 0;
        border: 1px solid ${GRAY_100};
      }
    }
  }
`;
