import styled, { CSSProperties } from "styled-components"

const MiniLabel = styled.div<{ backgroundColor: CSSProperties['backgroundColor']; margin?:CSSProperties['margin'];  }>`
    font-size: 16px;
    font-weight: 800;
    color: white;
    background-color: ${({ backgroundColor }) => backgroundColor};
    box-sizing: border-box;
    width: auto;
    height: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 16px 0px 16px;
    border-radius: 20px;
    margin: ${({ margin = '' }) => margin};
`

export default MiniLabel