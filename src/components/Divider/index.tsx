import styled, { CSSProperties } from 'styled-components'
import { GRAY_100 } from '../../utils/color'

const Divider = styled.div<{ width?: CSSProperties['width']; height?: CSSProperties['height']; margin?: CSSProperties['margin']}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: ${GRAY_100};
  overflow: hidden;
`

export default Divider