import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const BPTeamPlayer = ({ id, playerDet }) => {

    const [player, setPlayer] = useState([])

    useEffect(() => {
        const getTeam = async () => {
            const response = await fetch(`http://sports.core.api.espn.com/v2/sports/soccer/leagues/ger.1/seasons/2025/athletes/${id}?lang=en&region=us`)
            const data = await response.json()
            setPlayer(data)
        }
        getTeam()
    }, [])

    if (playerDet.starter) {
        if (playerDet.subbedOut.didSub) {
            return (
                <View style={{ padding: 5, borderBottomWidth: 1, borderColor: 'black' }}>
                    <Text style={{ alignSelf: 'center' }}>{player.fullName}</Text>
                    <Text style={{ alignSelf: 'center' }}>{player.position ? player.position.displayName : null}</Text>
                    <Text style={{ alignSelf: 'center' }}>No. {player.jersey} </Text>
                    <Text style={{ alignSelf: 'center', color: 'red' }}>subbed Out: {playerDet.subbedOut.clock.displayValue}</Text>

                </View>
            )
        }
        else {
            return (
                <View style={{ padding: 5, borderBottomWidth: 1, borderColor: 'black' }}>
                    <Text style={{ alignSelf: 'center' }}>{player.fullName}</Text>
                    <Text style={{ alignSelf: 'center' }}>{player.position ? player.position.displayName : null}</Text>
                    <Text style={{ alignSelf: 'center' }}>No. {player.jersey}</Text>

                </View>
            )
        }
    }

    if (playerDet.subbedIn.didSub) {
        return (
            <View style={{ width: '100%', backgroundColor: 'gray', padding: 5, borderBottomWidth: 1, borderColor: 'white' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>{player.fullName}</Text>
                <Text style={{ color: 'white', alignSelf: 'center' }}>{player.position ? player.position.displayName : null}</Text>
                <Text style={{ alignSelf: 'center', color: 'white' }}>No. {player.jersey}</Text>
                <Text style={{ alignSelf: 'center', color: 'limegreen' }}>subbed In: {playerDet.subbedOut.clock.displayValue}</Text>
            </View>
        )
    }

}

export default BPTeamPlayer