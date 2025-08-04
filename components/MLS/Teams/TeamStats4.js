import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const TeamStats4 = () => {

    const route = useRoute()
    const { stats, team } = route.params
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{team ? team.name : null}</Text>
                <Image source={{ uri: team.logos[0] ? team.logos[0].href : null }} width={150} height={150} />
            </View>
            <View style={{ padding: 10, backgroundColor: '#f8f8f8', borderRadius: 10, margin: 10, alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', elevation: 5 }}>
                <Text style={{ fontSize: 20 }}>Season Statistics</Text>
            </View>
            <View style={{ padding: 20, backgroundColor: '#f8f8f8', borderRadius: 10, margin: 10 }}>
                <Text style={styles.text}>{stats.stats ? `Games Played: ${stats.stats[0].value}` : null}</Text>
                <Text style={styles.text}>{stats.stats ? `Wins: ${stats.stats[8].value}` : null}</Text>
                <Text style={styles.text}>{stats.stats ? `Losses: ${stats.stats[1].value}` : null}</Text>
                <Text style={styles.text}>{stats.stats ? `Draws: ${stats.stats[7].value}` : null}</Text>
                <Text style={styles.text}>{stats.stats ? `Points: ${stats.stats[3].value}` : null}</Text>
                <Text style={styles.text}>{stats.stats ? `Goals For: ${stats.stats[5].value}` : null}</Text>
                <Text style={styles.text}>{stats.stats ? `Goals Against: ${stats.stats[4].value}` : null}</Text>
                <Text style={styles.text}>{stats.stats ? `Rank: ${stats.stats[23].value}` : null}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        elevation: 2,
        borderRadius: 10,
        width: '97%',
        alignSelf: 'center',
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: '#442',
        marginVertical: 2
    }
})

export default TeamStats4