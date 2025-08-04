import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Teams3 = ({ team }) => {

    const navigation = useNavigation()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {team.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Team Details', { team: item.team })}>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: item.team.logos[0] ? item.team.logos[0].href : 'https://th.bing.com/th/id/R.0a09df8ffdb1195277590bd5b9f06af6?rik=4zje8w%2bankOyew&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffootball-png-transparent-image-2000.png&ehk=DYK7B1tP7ihsD54yUb56O%2bGDqrYKxa1tipyeLKLpue4%3d&risl=&pid=ImgRaw&r=0' }} width={50} height={50} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>{item.team.name}</Text>

                    </View>
                </TouchableOpacity>
            ))}
            <View style={{ height: 100 }}></View>
        </ScrollView>
    )
}

export default Teams3