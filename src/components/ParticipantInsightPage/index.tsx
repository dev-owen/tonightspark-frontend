import styled from "styled-components"
import useParticipantInsightQuery, { ROLES, ROLE_COLORS } from "../../hooks/useParticipantInsightQuery"
import { BLUE_100, GRAY_100, GRAY_600, GRAY_700, GREEN_100, INDIGO_10, INDIGO_100, ORANGE_100, PURPLE_100, YELLOW_100 } from "../../utils/color"
import formatSeconds from "../../utils/formatSeconds"
import { formatNumber } from "../../utils/number"
import Badge from "../Badge"
import BigLabel from "../BigLabel"
import BoxContainer from "../BoxContainer"
import Divider from "../Divider"
import { HeaderContainer, HeaderDescription, HeaderTitle } from "../Header"
import MiniLabel from "../MiniLabel"

const LOOP_COLORS = [INDIGO_100, PURPLE_100, ORANGE_100, YELLOW_100, BLUE_100, GREEN_100]

const ParticipantInsightPage = () => {
    const { data } = useParticipantInsightQuery()

    return (
        <Layout>
            <HeaderContainer marginLeft="123px">
                <HeaderTitle>
                    <Badge color={INDIGO_100} backgroundColor={INDIGO_10}>{formatNumber(24000)}</Badge>
                    Concurrent Connectors User
                </HeaderTitle>
                <HeaderDescription>Most highest value of CCU</HeaderDescription>
            </HeaderContainer>
            <Divider height="1px" width="calc(100%-160px)" margin="60px 80px" />
            <HeaderContainer marginTop="0" marginLeft="123px">
                <HeaderTitle>
                    Statistics by User Type
                </HeaderTitle>
                <HeaderDescription>Check behavior data by participant type</HeaderDescription>
            </HeaderContainer>
            <LabelList>
                {Object.keys(ROLES).map((role) => (
                    <BigLabel backgroundColor={ROLE_COLORS[role].on} key={role}>{role}</BigLabel>
                ))}
            </LabelList>
            <Group>
                {Object.keys(ROLES).map((role) => (
                    <BoxContainer backgroundColor={'white'} width="550px" key={role}>
                        <>
                            <ItemTitle>
                                <Bar /> {role}
                            </ItemTitle>
                            {data && Object.entries(data[role]).map(([area, { visitedCount, stayTime }], index) => (
                                <Item key={index}>
                                    <MiniLabel backgroundColor={LOOP_COLORS[index % LOOP_COLORS.length]}>{area}</MiniLabel>
                                    <ItemValue><span>Enter:</span>{visitedCount}</ItemValue>
                                    <ItemValue><span>Stay Time:</span>{formatSeconds(stayTime)}</ItemValue>
                                </Item>
                            ))}
                        </>
                    </BoxContainer>
                ))}
            </Group>
        </Layout >
    )
}

export default ParticipantInsightPage

const Layout = styled.div`
    width: 100%;
`
const LabelList = styled.div`
    margin: 40px 0 60px 123px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const Bar = styled.div`
    width: 4px;
    height: 32px;
    background: ${GRAY_100};
`
const ItemTitle = styled.div`
    display: flex;
    align-items: center;
    color: ${GRAY_700};
    font-weight: 800;
    div {
        margin-right: 16px;
    }
`
const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    margin: 0 80px;
`
const Item = styled.div`
    display: flex;
    div {
        margin-right: 24px;
    }
`
const ItemValue = styled.span`
    font-size: 20px;
    margin-right: 32px;
    color: ${GRAY_600};
    span {
        color: ${GRAY_700};
        font-weight: 600;
        margin-right: 8px;
    }
`