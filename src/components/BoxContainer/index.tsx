import styled, { CSSProperties } from 'styled-components';

const BoxContainer = styled.div<{
  backgroundColor: CSSProperties['backgroundColor'];
  margin?: CSSProperties['margin'];
  width?: CSSProperties['width'];
  padding?: CSSProperties['padding'];
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: ${({ margin = '' }) => margin};
  width: ${({ width = '360px' }) => width};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: ${({ padding = '32px' }) => padding};
  border-radius: 24px;
`;

export default BoxContainer;
