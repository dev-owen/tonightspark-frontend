import styled from 'styled-components';
import { WHITE } from '../../utils/color';

export const Wrapper = styled.div<{ color: string }>`
  width: 1460px;
  background-color: ${WHITE};
  box-sizing: border-box;
  padding: 28px;
  margin: 60px 80px;
  border-radius: 28px;
  text-align: left;

  label {
    background-color: ${(props) => props.color};
    color: ${WHITE};
    font-size: 16px;
    font-weight: 800;
    padding: 8px 16px;
    border-radius: 20px;
  }
  scale: 0.84;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;
