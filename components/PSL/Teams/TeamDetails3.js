import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { useNavigation } from '@react-navigation/native'

const TeamDetails3 = () => {

    const route = useRoute()
    const { team } = route.params
    const [details, setDetails] = useState([])
    const [stats, setStats] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/teams/${team.id}/roster`)
            if (!response.ok) {
                throw new error('Failed to fetch team details')
            }
            const data = await response.json()
            setDetails(data.athletes)
        }

        const getStats = async () => {
            const response = await fetch(`http://sports.core.api.espn.com/v2/sports/soccer/leagues/rsa.1/seasons/2025/types/1/teams/${team.id}/record?lang=en&region=us`)
            if (!response.ok) {
                throw new error('Failed to fetch team stats')
            }
            const data = await response.json()
            setStats(data.items[0])

        }
        getData()
        getStats()
    }, [team.id])
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{team.name}</Text>
            </View>
            <ScrollView>
                <View style={{ width: '97%', alignSelf: 'center', marginTop: 2, borderRadius: 10, overflow: 'hidden' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Team Stats', { stats: stats, team: team })}
                        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: `#${team.color}`, opacity: 0.9 }}>
                        <ImageBackground source={{ uri: team.logos[0] ? team.logos[0].href : 'https://th.bing.com/th/id/R.0a09df8ffdb1195277590bd5b9f06af6?rik=4zje8w%2bankOyew&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffootball-png-transparent-image-2000.png&ehk=DYK7B1tP7ihsD54yUb56O%2bGDqrYKxa1tipyeLKLpue4%3d&risl=&pid=ImgRaw&r=0' }} style={{ width: '100%', height: 350, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: `#${team.alternateColor}`, fontSize: 20, fontWeight: 'bold' }}>Tap to see season stats</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)', elevation: 2, borderRadius: 10, width: '97%', alignSelf: 'center', marginTop: 20, padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', textAlign: 'center' }}>Squad</Text>
                </View>
                <View style={{ padding: 20 }}>
                    {
                        details.map((player, index) => (
                            <TouchableOpacity key={index} style={{ marginBottom: 10, padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                <View >
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>{player.displayName}</Text>
                                    <Text style={{ fontSize: 16, color: '#666' }}>{player.position.name}</Text>
                                    <Text style={{ fontSize: 14, color: '#999' }}>Number: {player.jersey ? player.jersey : '-'}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{ height: 100 }}></View>
            </ScrollView>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',

    }
})

export default TeamDetails3