import styled from 'styled-components';
import { INDIGO_100 } from '../../utils/color';

export const Wrapper = styled.div`
  margin-top: calc(50vh - 80px);
  margin-left: calc(50vw - 230px);

  .lds-roller {
    display: inline-block;
    position: relative;
    justify-content: center;
    align-content: center;
    width: 160px;
    height: 160px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 80px 80px;
  }
  .lds-roller div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${INDIGO_100};
    margin: -8px 0 0 -8px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 126px;
    left: 126px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 136px;
    left: 112px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 142px;
    left: 96px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 144px;
    left: 80px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 142px;
    left: 64px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 136px;
    left: 48px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 126px;
    left: 34px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 112px;
    left: 24px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
