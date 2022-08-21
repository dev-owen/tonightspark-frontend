import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  GRAY_200,
  GRAY_500,
  GRAY_600,
  INDIGO_10,
  PURPLE_100,
  WHITE,
} from '../../utils/color';

export const Wrapper = styled.div`
  z-index: 9999;
  position: fixed;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: ${WHITE};
  font-size: 16px;
  font-weight: 600;
  color: ${GRAY_500};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Top = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const Middle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${GRAY_600};

  :hover {
    cursor: pointer;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: normal;
  padding-bottom: 40px;
  text-align: left;
  p {
    margin: 0;
  }
  a {
    margin-top: 80px;
  }
  a > p {
    margin-top: 8px;
  }
  .copyright {
    color: ${GRAY_200};
  }
`;

export const LogoWrapper = styled.span`
  margin-left: 20px;
  width: fit-content;
`;
export const MenuLinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

export const MenuLink = styled(Link)<{ current: boolean }>`
  background-color: ${({ current }) => (current ? INDIGO_10 : 'none')};
  color: ${({ current }) => (current ? PURPLE_100 : GRAY_500)};
  padding: 0 20px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;
