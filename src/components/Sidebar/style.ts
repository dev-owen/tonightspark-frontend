import styled from 'styled-components';
import { GRAY_500, WHITE } from '../../utils/color';

export const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${WHITE};
  font-size: 16px;
  font-weight: 600;
  color: ${GRAY_500};
  display: flex;
  flex-direction: column;

  .bottomSection {
    margin-top: auto;
  }
`;
