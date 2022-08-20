import styled from 'styled-components';
import {
  GRAY_100,
  GRAY_300,
  GRAY_50,
  GRAY_700,
  GRAY_800,
  GREEN_100,
  ORANGE_100,
  RED_100,
  WHITE,
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
  background-color: ${GRAY_50};
`;

export const EnterCardContainer = styled.div<{ isVerified?: boolean }>`
  min-width: 790px;
  height: 600px;
  background-color: ${WHITE};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 24px;
  padding: 80px;
  box-sizing: border-box;

  .enterCardItem {
    height: fit-content;
    margin: auto 0;

    p {
      margin: 8px 0;
    }

    p.alignLeft {
      text-align: left;
    }

    p.titleText {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 28px;
      margin-top: 60px;
    }

    p.notionLink {
      color: ${ORANGE_100};
      font-size: 16px;
      font-weight: 600;
      text-align: right;
      margin-top: 70px;
    }

    p.bottomMargin {
      margin-bottom: 60px;
    }

    p.errorMessage {
      color: ${RED_100};
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      margin-top: -20px;
      position: fixed;
    }

    div.inputItem {
      input.enterInput {
        margin-top: 16px;
        width: 550px;
        height: 56px;
        border-radius: 28px;
        border: 1px solid
          ${(props) =>
            props.isVerified === undefined
              ? GRAY_100
              : props.isVerified
              ? GREEN_100
              : RED_100};
        font-size: 20px;
        font-weight: 600;
        padding: 18px 24px;
        box-sizing: border-box;
        margin-right: 24px;
        background-color: ${GRAY_50};
        color: ${(props) =>
          props.isVerified === undefined
            ? GRAY_100
            : props.isVerified
            ? GREEN_100
            : RED_100};

        ::placeholder {
          color: ${GRAY_300};
        }

        :focus {
          outline: none;
        }
      }

      button {
        height: 56px;
        justify-content: center;
        align-items: center;
        padding: 0 24px 0 24px;
        border-radius: 28px;
        font-weight: 600;
        color: ${(props) =>
          props.isVerified === undefined ? GRAY_300 : WHITE};
        background-color: ${(props) =>
          props.isVerified === undefined
            ? WHITE
            : props.isVerified
            ? GREEN_100
            : RED_100};
        border-width: ${(props) =>
          props.isVerified === undefined ? '1px' : '0'};

        :hover {
          cursor: pointer;
        }

        :disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;
