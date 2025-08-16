import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import L1TeamPlayer from './L1TeamPlayer'

const L1LineUps = ({ game }) => {

    const [starters, setStarters] = useState([])
    const [starters2, setStarters2] = useState([])
    const [error, setError] = useState('')


    try {
        useEffect(() => {
            const getStarters = async () => {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/soccer/leagues/fra.1/events/${game.id}/competitions/${game.id}/competitors/${game.competitions[0].competitors[0].team.id}/roster`)
                if (!response.ok) {
                    throw new Error("error");

                }
                const data = await response.json()
                setStarters(data.entries)
            }

            const getStarters2 = async () => {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/soccer/leagues/rsa.1/events/${game.id}/competitions/${game.id}/competitors/${game.competitions[0].competitors[1].team.id}/roster`)
                if (!response.ok) {
                    throw new Error("error");

                }
                const data = await response.json()
                setStarters2(data.entries)
            }
            getStarters()
            getStarters2()
        }, [])
    }
    catch (e) {
        setError(e)
    }
    return (
        <View >
            <View style={{ elevation: 2, width: '97%', borderRadius: 10, alignSelf: 'center', borderColor: 'black', borderWidth: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Team LineUps</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <Text>Substitutes</Text>
                    <View style={{ backgroundColor: 'gray', width: 20, height: 20, margin: 2 }}>

                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ width: '49%', alignSelf: 'center', alignItems: 'flex-start', padding: '10', height: 500, justifyContent: 'flex-start' }}>
                    {
                        starters.map((player, i) => {
                            return (
                                <View key={i} style={{ width: '100%' }}>
                                    <View >
                                        <EPLTeamPlayer id={player.playerId} playerDet={player} />
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{ width: '49%', alignSelf: 'center', padding: 10, alignItems: 'flex-end', height: 500, justifyContent: 'flex-start' }}>
                    {
                        starters2.map((player, i) => {
                            return (
                                <View key={i} style={{ width: '100%' }}>
                                    <View >
                                        <L1TeamPlayer id={player.playerId} playerDet={player} />
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={{ height: 100 }}></View>
        </View>
    )
}

export default L1LineUps