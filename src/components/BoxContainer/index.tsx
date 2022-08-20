import styled, { CSSProperties } from "styled-components"

const BoxContainer = styled.div<{ backgroundColor: CSSProperties['backgroundColor']; margin?:CSSProperties['margin']; width?: CSSProperties['width'];  }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin: ${({ margin = '' }) => margin};
    width: ${({ width = '360px' }) => width};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 28px;
    padding: 24px 20px;
    border-radius: 24px;
`

export default BoxContainer