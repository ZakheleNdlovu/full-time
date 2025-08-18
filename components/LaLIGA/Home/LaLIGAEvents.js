import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LaLIGAEvents = ({ games }) => {

    const navigation = useNavigation()

    return (
        <ScrollView style={{ width: '100%', height: '90%' }} showsVerticalScrollIndicator={false}>
            {
                games.map((game, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('LLGameDetails', { game: game })}>
                        <View style={styles.box}>
                            <Text>{game.name}</Text>
                            <Text>{new Date(game.date).toLocaleDateString()}</Text>
                            <Text>{new Date(game.date).toLocaleTimeString()}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <View style={{ width: '49%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ alignItems: 'center', width: '75%' }}>
                                        <Image source={{ uri: game.competitions[0].competitors[0].team.logo }} style={{ width: 50, height: 50 }} />
                                        <Text style={{ TextAlign: 'center' }}>{game.competitions[0].competitors[0].team.displayName}</Text>
                                    </View>
                                    <View style={{ width: '25%', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20 }}>{game.competitions[0].competitors[0].score}</Text>
                                    </View>
                                </View>
                                <Text>VS</Text>
                                <View style={{ width: '49%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ width: '25%', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20 }}>{game.competitions[0].competitors[1].score}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: '75%' }}>
                                        <Image source={{ uri: game.competitions[0].competitors[1].team.logo }} style={{ width: 50, height: 50 }} />
                                        <Text style={{ textAlign: 'center' }}>{game.competitions[0].competitors[1].team.displayName}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }
            <View style={{ height: 100 }}>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
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
        justifyContent: 'space-around',
        justifyContent: 'center',
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

export default LaLIGAEvents