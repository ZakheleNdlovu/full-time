import { View, Text } from 'react-native'
import React from 'react'

const SAPStats = ({ game }) => {
    if (game.competitions[0].competitors[1].statistics[0]) {
        return (
            <View>
                <View style={{ alignSelf: 'center' }}>
                    <Text>Ball position</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <Text>{game.competitions[0].competitors[0].statistics[4].displayValue}%</Text>
                    </View>
                    <View>
                        <Text>{game.competitions[0].competitors[1].statistics[4].displayValue}%</Text>
                    </View>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Text>Total Shorts</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <Text>{game.competitions[0].competitors[0].statistics[8].displayValue}</Text>
                    </View>
                    <View>
                        <Text>{game.competitions[0].competitors[1].statistics[8].displayValue}</Text>
                    </View>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Text>Shorts On Target</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <Text>{game.competitions[0].competitors[0].statistics[6].displayValue}</Text>
                    </View>
                    <View>
                        <Text>{game.competitions[0].competitors[1].statistics[6].displayValue}</Text>
                    </View>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Text>Total Corners</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <Text>{game.competitions[0].competitors[0].statistics[3].displayValue}</Text>
                    </View>
                    <View>
                        <Text>{game.competitions[0].competitors[1].statistics[3].displayValue}</Text>
                    </View>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Text>Fouls Committed</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <Text>{game.competitions[0].competitors[0].statistics[1].displayValue}</Text>
                    </View>
                    <View>
                        <Text>{game.competitions[0].competitors[1].statistics[1].displayValue}</Text>
                    </View>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text>Game statistics will be available when the game begins</Text>
            </View>
        )
    }
}

export default SAPStats