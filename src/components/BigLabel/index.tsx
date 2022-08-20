import styled, { CSSProperties } from "styled-components"

const BigLabel = styled.div<{ backgroundColor: CSSProperties['backgroundColor'] }>`
    font-size: 16px;
    font-weight: 800;
    color: white;
    background-color: ${({ backgroundColor }) => backgroundColor};
    box-sizing: border-box;
    width: auto;
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 20px 0px 20px;
    border-radius: 24px;
`

export default BigLabel