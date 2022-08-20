import { format } from 'date-fns/fp'
import styled from 'styled-components'
import useNumberOfVisitorsQuey from '../../hooks/useNumberOfVisitorsQuey'
import { BLUE_10, BLUE_100, GRAY_700, GREEN_10, GREEN_100, ORANGE_10, ORANGE_100 } from '../../utils/color'
import { formatNumber } from '../../utils/number'
import Badge from '../Badge'
import BoxContainer from '../BoxContainer'
import { HeaderContainer, HeaderDescription, HeaderTitle } from '../Header'
import MiniLabel from '../MiniLabel'

export type AreaInformation = {
    mainColor: string
    subColor: string
    totalValue: number
    title: string
    description: string
    items: { label: string; value: number }[]
    valueFormatter: (value: number) => string
}

const dummys = [
    {
        mainColor: GREEN_100,
        subColor: GREEN_10,
        totalValue: 33222 + 180 + 3341 + 1000,
        title: 'Remaining Time',
        description: 'Ranking of hours users stayed in the area',
        items: [
            { label: 'ZEP', value: 33222 },
            { label: 'MS', value: 180 },
            { label: 'Chainapsis', value: 3341 },
            { label: 'AWS', value: 1000 }
        ],
        valueFormatter: (value: number) => format(`k'h' m'm' s's'`)(new Date(value * 100)),
    },
    {
        mainColor: ORANGE_100,
        subColor: ORANGE_10,
        totalValue: (10 + 18 + 14 + 33) / 4,
        title: 'Bounce Rate',
        description: 'Number of users who left immediately',
        items: [
            { label: 'ZEP', value: 10 },
            { label: 'MS', value: 18 },
            { label: 'Chainapsis', value: 14 },
            { label: 'AWS', value: 33 },

            { label: 'ZEP', value: 10 },
            { label: 'MS', value: 18 },
            { label: 'Chainapsis', value: 14 },
            { label: 'AWS', value: 33 },
            { label: 'ZEP', value: 10 },
            { label: 'MS', value: 18 },
            { label: 'Chainapsis', value: 14 },
            { label: 'AWS', value: 33 },
            { label: 'ZEP', value: 10 },
            { label: 'MS', value: 18 },
            { label: 'Chainapsis', value: 14 },
            { label: 'AWS', value: 33 }
        ],
        valueFormatter: (value: number) => `${value}%`,
    }
]

const AreaInformationPage = () => {
    const numberOfVisitorsQuery = useNumberOfVisitorsQuey()

    return (
        <Layout>
            {[numberOfVisitorsQuery.areaInformation, ...dummys].map((dummy, index) => (
                <Group key={index}>
                    <HeaderContainer marginTop="112px">
                        <Badge color={dummy.mainColor} backgroundColor={dummy.subColor}>{dummy.valueFormatter(dummy.totalValue)}</Badge>
                        <HeaderTitle marginTop="28px">{dummy.title}</HeaderTitle>
                        <HeaderDescription>{dummy.description}</HeaderDescription>
                    </HeaderContainer>
                    <BoxContainer backgroundColor={dummy.subColor} margin="40px 0 0 0">
                        {dummy.items.map((item, itemIndex) => (
                            <Item key={itemIndex}>
                                <MiniLabel margin="0 0 0 16px" backgroundColor={dummy.mainColor}>{item.label}</MiniLabel>
                                <ItemValue>{dummy.valueFormatter(item.value)}</ItemValue>
                            </Item>

                        ))}
                    </BoxContainer>
                </Group>
            ))}
        </Layout>
    )
}

export default AreaInformationPage

const Layout = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 52px;
    flex-direction: row;
    margin: 0 auto; 
`
const Group = styled.div``

const Item = styled.div`
    background: white;
    border-radius: 26px;
    width: auto;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ItemValue = styled.div`
    margin-right: 24px;
    color: ${GRAY_700};
    font-size: 24px;
    font-weight: 600;
`