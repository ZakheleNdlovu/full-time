import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const MLSStandings = () => {

    const [standings, setStandings] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const getStandings = async () => {
            const response = await fetch('https://site.api.espn.com/apis/v2/sports/soccer/usa.1/standings')
            if (!response.ok) {
                throw new error('Unable to get Standings')
            }
            const data = await response.json()
            setStandings(data.children)
            setLoading(false)
        }
        getStandings()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>loading...</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position: 'absolute', left: 20 }}>
                    <Ionicons name="menu" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.text2}>EPL Standings</Text>
            </View>

            <ScrollView style={{ width: '99%', alignSelf: 'center', padding: 5, height: '85%', marginVertical: 5 }}>

                <View style={styles.headerBox2}>
                    <View style={{ width: '10%' }}>
                        <Text>Rank|</Text>
                    </View>
                    <View style={{ width: '45%' }}>
                        <Text>Team name                             </Text>
                    </View>
                    <View style={{ width: '9%', alignItems: 'flex-start' }}>
                        <Text>GP |</Text>
                    </View>
                    <View style={{ width: '9%', alignItems: 'flex-start' }}>
                        <Text>PTS |</Text>
                    </View>
                    <View style={{ width: '8%', alignItems: 'flex-start' }}>
                        <Text>W |</Text>
                    </View>
                    <View style={{ width: '8%', alignItems: 'flex-start' }}>
                        <Text>L |</Text>
                    </View>
                    <View style={{ width: '7%', alignItems: 'flex-start' }}>
                        <Text>D |</Text>
                    </View>
                    <View style={{ width: '8%', alignItems: 'flex-start' }}>
                        <Text>GD|</Text>
                    </View>
                </View>
                <View>
                    <Text>{standings[0].name}</Text>
                </View>
                {
                    standings[0].standings.entries.map((team, index) => {
                        return (
                            <View key={index}>

                                <View style={{ flexDirection: 'row', width: '98%', alignSelf: 'center', marginVertical: 4, borderBottomWidth: 1, borderColor: 'gray' }}>

                                    <View style={{ alignItems: 'flex-start', width: '5%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[10].value}.</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '50%' }}>
                                        <Text>{team.team.name}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[0].value}</Text>
                                    </View>

                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[3].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[7].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[1].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[6].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[2].value}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                <View style={{ height: 20 }}></View>
                <View style={styles.headerBox2}>
                    <View style={{ width: '10%' }}>
                        <Text>Rank|</Text>
                    </View>
                    <View style={{ width: '45%' }}>
                        <Text>Team name                </Text>
                    </View>
                    <View style={{ width: '9%', alignItems: 'flex-start' }}>
                        <Text>GP |</Text>
                    </View>
                    <View style={{ width: '9%', alignItems: 'flex-start' }}>
                        <Text>PTS |</Text>
                    </View>
                    <View style={{ width: '8%', alignItems: 'flex-start' }}>
                        <Text>W |</Text>
                    </View>
                    <View style={{ width: '8%', alignItems: 'flex-start' }}>
                        <Text>L |</Text>
                    </View>
                    <View style={{ width: '7%', alignItems: 'flex-start' }}>
                        <Text>D |</Text>
                    </View>
                    <View style={{ width: '8%', alignItems: 'flex-start' }}>
                        <Text>GD|</Text>
                    </View>
                </View>
                <View>
                    <Text>{standings[1].name}</Text>
                </View>
                {
                    standings[1].standings.entries.map((team, index) => {
                        return (
                            <View key={index}>

                                <View style={{ flexDirection: 'row', width: '98%', alignSelf: 'center', marginVertical: 4, borderBottomWidth: 1, borderColor: 'gray' }}>

                                    <View style={{ alignItems: 'flex-start', width: '5%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[10].value}.</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '50%' }}>
                                        <Text>{team.team.name}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[0].value}</Text>
                                    </View>

                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[3].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[7].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[1].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[6].value}</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '8%', alignItems: 'flex-start' }}>
                                        <Text>{team.stats[2].value}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                <View style={{ height: 100 }}>

                </View>
            </ScrollView>
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
    headerBox2: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
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

        borderRadius: 10,
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
    text3: {
        fontSize: 15,
        color: '#555',

    },
})

export default MLSStandings