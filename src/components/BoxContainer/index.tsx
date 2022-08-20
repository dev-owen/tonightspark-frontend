import styled, { CSSProperties } from "styled-components"

const BoxContainer = styled.div<{ backgroundColor: CSSProperties['backgroundColor']; margin?:CSSProperties['margin'];  }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin: ${({ margin = '' }) => margin};
    width: 360px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 28px;
    padding: 24px 20px;
    border-radius: 24px;
`

export default BoxContainer