import styled from 'styled-components';
import { GRAY_800 } from '../../utils/color';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: ${GRAY_800};
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const HomeContainer = styled.div`
  width: calc(100% - 300px);
  display: flex;
  flex-direction: row;
  margin-left: 300px;
  margin-bottom: 240px;
`;
