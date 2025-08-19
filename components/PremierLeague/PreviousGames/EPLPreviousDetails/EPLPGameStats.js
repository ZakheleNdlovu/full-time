import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import EPLPStats from './EPLPStats'
import EPLPEventDetails from './EPLPEventDetails'
import EPLPLineUps from './EPLPLineUp'

const EPLPGameDetails = () => {

    const route = useRoute()
    const { game } = route.params

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.box1}>
                <Text>{game.name}</Text>
                <Text>{new Date(game.date).toLocaleDateString()}</Text>
                <Text>{new Date(game.date).toLocaleTimeString()}</Text>
                <Text>{game.competitions[0].status.type.description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '49%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', width: '80%' }}>
                            <Image source={{ uri: game.competitions[0].competitors[0].team.logo ? game.competitions[0].competitors[0].team.logo : 'https://th.bing.com/th/id/R.0a09df8ffdb1195277590bd5b9f06af6?rik=4zje8w%2bankOyew&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffootball-png-transparent-image-2000.png&ehk=DYK7B1tP7ihsD54yUb56O%2bGDqrYKxa1tipyeLKLpue4%3d&risl=&pid=ImgRaw&r=0' }} style={{ width: 80, height: 80 }} />
                            <Text style={{ textAlign: 'center' }}>{game.competitions[0].competitors[0].team.displayName}</Text>
                        </View>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30 }}>{game.competitions[0].competitors[0].score}</Text>
                        </View>
                    </View>
                    <Text>VS</Text>
                    <View style={{ width: '49%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30 }}>{game.competitions[0].competitors[1].score}</Text>
                        </View>
                        <View style={{ alignItems: 'center', width: '80%' }}>
                            <Image source={{ uri: game.competitions[0].competitors[1].team.logo ? game.competitions[0].competitors[1].team.logo : 'https://th.bing.com/th/id/R.0a09df8ffdb1195277590bd5b9f06af6?rik=4zje8w%2bankOyew&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffootball-png-transparent-image-2000.png&ehk=DYK7B1tP7ihsD54yUb56O%2bGDqrYKxa1tipyeLKLpue4%3d&risl=&pid=ImgRaw&r=0' }} style={{ width: 80, height: 80 }} />
                            <Text style={{ textAlign: 'center' }}>{game.competitions[0].competitors[1].team.displayName}</Text>
                        </View>
                    </View>
                </View>

            </View>
            <ScrollView style={{ height: '70%' }}>
                <View style={styles.box}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Game Details</Text>
                </View>
                <View >
                    <EPLPStats game={game} />
                    <EPLPEventDetails game={game} />
                    <EPLPLineUps game={game} />
                </View>
                <View style={{ height: 1000 }}>

                </View>
            </ScrollView>
        </View>
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
        borderWidth: 1,
        borderColor: 'black',
        width: '98%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    box1: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginBottom: 2,
        borderWidth: 1,
        borderColor: 'black',
        width: '98%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%'
    },
    text2: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '500',

    }

})

export default EPLPGameDetails