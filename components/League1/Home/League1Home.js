import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import League1Events from './League1Events'

const League1Home = () => {

    const [games, setGames] = useState([])
    const [league, setLeague] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/scoreboard')
            if (!response.ok) {
                throw new Error('Unable to connect')
            }
            const data = await response.json()
            setGames(data.events)
            setLeague(data.leagues[0])
            setLoading(false)
        }
        fetchGames()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View style={{ width: '97%', alignItems: 'center', alignSelf: 'center' }}>
            <View style={styles.headerBox}>
                <TouchableOpacity style={{ left: 10 }} onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>{league.name}</Text>
                <Image source={{ uri: league.logos[0].href }} width={50} height={50} />
            </View>
            <View >
                <Text style={styles.text2}>Upcoming Events</Text>
            </View>
            <League1Events games={games} />

        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',

    },
    headerBox: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginBottom: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        elevation: 2,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center'
    },
    box: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginBottom: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        elevation: 2,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text2: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '500',

    }

})

export default League1Home