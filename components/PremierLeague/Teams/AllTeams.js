import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Teams from './Teams'

const AllTeams = () => {

    const [teams, setTeams] = useState([])
    const [League, setLeague] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams')
            if (!response.ok) {
                throw new Error('Failed to fetch teams')
            }
            const data = await response.json()
            setTeams(data.sports[0].leagues[0].teams)
            setLeague(data.sports[0].leagues[0].name)
            setLoading(false)
        }
        fetchTeams()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View style={{ height: '95%' }}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position: 'absolute', left: 20 }}>
                    <Ionicons name="menu" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.text2}>{League} Teams</Text>
                <View style={{ width: 15 }}></View>
            </View>
            <View style={styles.box}>
                <Teams team={teams} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        padding: 21,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '97%',
        alignSelf: 'center',
        boxShadowColor: '#000',
        boxShadowOffset: {
            width: 0,
            height: 2
        },
        boxShadowOpacity: 0.1,
        boxShadowRadius: 4,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    box: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginBottom: 10,
        width: '97%',
        alignSelf: 'center',
        boxShadowColor: '#000',
        boxShadowOffset: {
            width: 0,
            height: 2
        },
        boxShadowOpacity: 0.1,
        boxShadowRadius: 4,
        elevation: 2
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',

    },
})

export default AllTeams