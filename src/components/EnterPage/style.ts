import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const EnterCardContainer = styled.div`
  width: 720px;
  height: 600px;
  background-color: rgba(255, 255, 255, 1);
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;

  .enterCardItem {
    border: 1px solid rgba(0, 0, 0, 0.7);
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
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 20px;
        font-weight: 600;
        padding: 18px 67px;
        box-sizing: border-box;
        background-color: rgba(250, 250, 250, 1);

        ::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }
      }

      .dot {
        height: 56px;
        width: 56px;
        background-color: rgba(250, 250, 250, 1);
        border-radius: 50%;
        display: inline-block;
        margin: 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
