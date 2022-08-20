import styled, { CSSProperties } from 'styled-components';

const Badge = styled.div<{
  color: CSSProperties['color'];
  backgroundColor: CSSProperties['backgroundColor'];
}>`
  font-size: 28px;
  font-weight: 800;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  box-sizing: border-box;
  width: min-content;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 8px 16px 8px 16px;
  margin-bottom: 24px;
`;
export default Badge;
