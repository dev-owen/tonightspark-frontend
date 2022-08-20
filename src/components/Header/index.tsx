import styled from "styled-components"
import { GRAY_500 } from "../../utils/color"

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 112px;
    padding-left: 20px;
`
export const HeaderTitle = styled.div`
    margin-top: 28px;
    font-size: 28px;
    font-weight: 800;
`
export const HeaderDescription = styled.div`
    margin-top: 16px;
    font-size: 20px;
    color: ${GRAY_500};
`
