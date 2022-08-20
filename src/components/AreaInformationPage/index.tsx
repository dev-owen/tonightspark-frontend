import { format } from 'date-fns/fp'
import styled, { CSSProperties } from 'styled-components'
import { BLUE_10, BLUE_100, GRAY_500, GRAY_700, GREEN_10, GREEN_100, ORANGE_10, ORANGE_100 } from '../../utils/color'
import { formatNumber } from '../../utils/number'
import Badge from '../Badge'
import { HeaderContainer, HeaderDescription, HeaderTitle } from '../Header'

const dummys = [
    {
        mainColor: BLUE_100,
        subColor: BLUE_10,
        totalValue: 3338 + 18 + 14 + 6,
        title: 'Number of Visitors',
        description: 'Number of users who visited the area',
        items: [
            { label: 'ZEP', value: 3338 },
            { label: 'MS', value: 18 },
            { label: 'Chainapsis', value: 14 },
            { label: 'AWS', value: 6 }
        ],
        valueFormatter: (value: number) => formatNumber(value),
    },
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
    return (
        <Layout>
            {dummys.map((dummy, index) => (
                <Group key={index}> 
                    <HeaderContainer>
                        <Badge color={dummy.mainColor} backgroundColor={dummy.subColor}>{dummy.valueFormatter(dummy.totalValue)}</Badge>
                        <HeaderTitle>{dummy.title}</HeaderTitle>
                        <HeaderDescription>{dummy.description}</HeaderDescription>
                    </HeaderContainer>
                    <Container backgroundColor={dummy.subColor}>
                        {dummy.items.map((item, itemIndex) => (
                            <Item key={itemIndex}>
                                <ItemLabel backgroundColor={dummy.mainColor}>{item.label}</ItemLabel>
                                <ItemValue>{dummy.valueFormatter(item.value)}</ItemValue>
                            </Item>

                        ))}
                    </Container>
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

const Container = styled.div<{ backgroundColor: CSSProperties['backgroundColor'] }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin-top: 40px;
    width: 360px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 28px;
    padding: 24px 20px;
    border-radius: 24px;
`
const Item = styled.div`
    background: white;
    border-radius: 26px;
    width: auto;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ItemLabel = styled.div<{ backgroundColor: CSSProperties['backgroundColor'] }>`
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
    margin-left: 16px;
`
const ItemValue = styled.div`
    margin-right: 24px;
    color: ${GRAY_700};
    font-size: 24px;
    font-weight: 600;
`