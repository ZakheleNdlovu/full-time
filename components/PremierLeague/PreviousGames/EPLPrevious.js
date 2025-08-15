import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const EPLPrevious = () => {

    const [games, setGames] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getGames = async () => {
            const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/scoreboard?dates=2025&seasontype=13655')
            if (!response.ok) {
                throw new Error("Unable to retrieve information")
            }
            const data = await response.json()
            setGames(data.events)
            console.log(games)
        }

        getGames()
    }, [])

    return (
        <View>
            <Text>EPLPrevious</Text>
            <ScrollView>
                {
                    games.map((game, i) => {
                        return (
                            <Text key={i}> {game.competitions[0].competitors[1].team.name}
                                ({game.competitions[0].competitors[0].score})
                                vs
                                {game.competitions[0].competitors[0].team.name}
                                ({game.competitions[0].competitors[0].score})
                            </Text>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default EPLPrevious