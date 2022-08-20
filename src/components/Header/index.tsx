import styled, { CSSProperties } from 'styled-components'
import { GRAY_400, GRAY_500 } from "../../utils/color"

export const HeaderContainer = styled.div<{ marginTop?: CSSProperties['marginTop']; marginLeft?: CSSProperties['marginLeft'] }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${({ marginTop = '120px' }) => marginTop};
    margin-left: ${({ marginLeft = '0' }) => marginLeft};
    padding-left: 20px;
`
export const HeaderTitle = styled.div<{ marginTop?: CSSProperties['marginTop'] }>`
    margin-top: ${({ marginTop = '0' }) => marginTop};
    font-size: 28px;
    font-weight: 800;
    display: flex;
    align-items: center;
    div {
        margin-right: 16px;
    }
    span {
        font-size: 16px;
        font-weight: normal;
        margin-left: 16px;
        color: ${GRAY_400};
    }
`
export const HeaderDescription = styled.div`
    margin-top: 16px;
    font-size: 20px;
    color: ${GRAY_500};
`
